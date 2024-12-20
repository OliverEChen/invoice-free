<template>
  <div>
    <a-modal
      v-model:open="open"
      centered
      :footer="null"
      :maskClosable="false"
      :closable="false"
      :width="500"
      wrapClassName="custom-modal"
    >
      <div id="app">
        <VueSignaturePad
          ref="signaturePad"
          width="500px"
          height="300px"
          :customStyle="{ border: '1px solid #ccc' }"
        />

        <div class="btns">
          <a-button @click="handleCancel">cancel</a-button>
          <a-button @click="clear">clear</a-button>
          <a-button @click="save" type="primary">Save</a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
const open = ref(false)
const signaturePad = ref(null)
const imgData = ref(null)
const emit = defineEmits(['imgData'])
const showModal = (flag) => {
  open.value = true
  if (flag !== 'edit') {
    imgData.value = null
    signaturePad.value && signaturePad.value.clearSignature()
  }
}
const handleCancel = (e) => {
  open.value = false
}
const undo = () => {
  signaturePad.value.undoSignature()
}
const clear = () => {
  signaturePad.value.clearSignature()
}
const save = () => {
  const { isEmpty, data } = signaturePad.value.saveSignature()
  console.log(isEmpty)
  console.log(data)
  imgData.value = data
  open.value = false
  emit('imgData', imgData.value)
}
defineExpose({ showModal })
</script>
<style lang="scss">
.custom-modal .ant-modal-content {
  overflow: hidden;
  padding: 0 !important;
}
.btns {
  display: flex;
  button {
    height: 30px;
    width: 100%;
  }
}
</style>
