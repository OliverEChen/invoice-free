<template>
  <div class="cus-upload">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :custom-request="customRequest"
    >
      <img v-if="isAvatar && imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <loading-outlined v-if="loading"></loading-outlined>
        <plus-outlined v-else></plus-outlined>
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
  </div>
</template>
<script setup>
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined'
import PlusOutlined from '@ant-design/icons-vue/PlusOutlined'
import { ref, h } from 'vue';
import { message } from 'ant-design-vue'
import { uploadApi } from '@/api/http'
const emit = defineEmits(['fileData'])
const {isAvatar} = defineProps({
  isAvatar: {
    type: Boolean,
    default: true
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const fileList = ref([])
const loading = ref(false)
const handleChange = (info) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    // getBase64(info.file.originFileObj, (base64Url) => {
    //   imageUrl.value = base64Url
      loading.value = false
    // })
  }
  if (info.file.status === 'error') {
    loading.value = false
    // message.error('upload error')
  }
}
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG or PNG file!')
    return
  }
  const isLt2M = file.size / 1024 / 1024 < 10
  if (!isLt2M) {
    message.error('Image must smaller than 10MB!')
    return
  }
  return isJpgOrPng && isLt2M
}
const onUploadProgress = (ev, onProgress) => {
      // ev - axios 上传进度实例，上传过程触发多次
      // ev.loaded 当前已上传内容的大小，ev.total - 本次上传请求内容总大小
      console.log(ev);
      const percent = (ev.loaded / ev.total) * 100;
      // 计算出上传进度，调用组件进度条方法
      onProgress({ percent });
    }
const customRequest = ({ file, onProgress, onSuccess, onError }) => {
  if(!beforeUpload(file)) {
    onError()
    return
  }
  
  const formData = new FormData()
  // fileList.value.forEach(file => {
  //   formData.append('files[]', file);
  // });
  console.log('file', file)
  formData.append('file', file)
  formData.append('dir', 'logo')
  loading.value = true
  // You can use any AJAX library you like
  uploadApi('/api/v1/ossFile/uploadImage', formData, (ev) => onUploadProgress(ev, onProgress))
    .then((res) => {
      fileList.value = []
      loading.value = false
      onSuccess()
      message.success('upload successfully.')
      emit('fileData', res.data)
    })
    .catch((err) => {
      console.log('error', err)
      loading.value = false
      onError()
      message.error('upload failed.')
    })
}
</script>
<style lang="scss">
.cus-upload {
  width: 128px;
  height: 128px;
}
.avatar-uploader > .ant-upload {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
