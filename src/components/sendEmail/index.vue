<template>
  <div>
    <a-modal
      title="Send Invoice"
      v-model:open="open"
      centered
      :maskClosable="false"
      :width="500"
      :footer="null"
      @ok="save"
      @cancel="handleCancel"
    >
      <div class="form-wrap">
        <a-form
          layout="vertical"
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
        >
          <a-form-item label="To(required)">
            <a-input placeholder="name@example.com" v-model:value="formState.to" />
          </a-form-item>

          <a-form-item label="From(required)">
            <a-input placeholder="name@example.com" v-model:value="formState.from" />
          </a-form-item>

          <a-form-item label="Message(required)">
            <a-textarea
              v-model:value="formState.message"
              placeholder="Autosize height with minimum and maximum number of lines"
              :auto-size="{ minRows: 2, maxRows: 5 }"
            />
          </a-form-item>
          <div class="flex f-j-between mg-b10">
            <a-button type="primary" @click="save">Send Invoice</a-button>
            <a-button @click="handleCancel">Close</a-button>
          </div>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script setup>
import { Form, message } from 'ant-design-vue'
import { ref, defineEmits, reactive, toRaw } from 'vue'
import { post } from '@/api/http'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const formState = reactive({
  from: '',
  to: '',
  message: '',
})
let id = ref(null)
const rulesRef = reactive({})
const useForm = Form.useForm
const { resetFields, validate, validateInfos } = useForm(formState, rulesRef, {
  onValidate: (...args) => console.log(...args),
})
const open = ref(false)
const showModal = (_id) => {
  if(_id){
    id.value = _id
  }else {
    id.value = userStore.invoiceData.id
  }
  open.value = true
}
const handleCancel = (e) => {
  open.value = false
}
const save = () => {
  validate()
    .then(async () => {
      const obj = {
        ...toRaw(formState),
        id: id.value,
      }
      const { code, msg } = await post('/api/v1/invoice/sendEmail', obj)
      if (code === '00000') {
        message.success('Invoice sent successfully')
      } else {
        message.error(msg || 'Failed to send invoice')
      }
      open.value = false
    })
    .catch((err) => {
      console.log('error', err)
    })
}
defineExpose({ showModal })
</script>
<style lang="scss">
.form-wrap {
  background: #f9fafb;
  padding: 20px;
  margin-bottom: 10px;
}
</style>
