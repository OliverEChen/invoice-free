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
          ref="formRef"
          layout="vertical"
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
        >
          <a-form-item name="to" label="To(required)"
          :rules="[{required: true, validator: validateEmail, trigger: 'change'}]"
          >
            <a-input placeholder="name@example.com" v-model:value="formState.to" />
          </a-form-item>

          <a-form-item name="from" label="From(required)"
          :rules="[{required: true, validator: validateEmail, trigger: 'change'}]"
          >
            <a-input placeholder="name@example.com" v-model:value="formState.from" />
          </a-form-item>

          <a-form-item name="message" label="Message">
            <a-textarea
              v-model:value="formState.message"
              placeholder="Optional message to your client"
              :auto-size="{ minRows: 2, maxRows: 5 }"
            />
          </a-form-item>
          <div class="flex f-j-between mg-b10">
            <a-button type="primary" @click="save" :loading="loading">Send Invoice</a-button>
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
import {validateEmail} from '@/utils/utils'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const formRef = ref(null);
const loading = ref(false)
const formState = reactive({
  from: '',
  to: '',
  message: '',
})
let pdfId = ref(null)
let id = ref(null)
let idEncrypt = ref(null)
const open = ref(false)
const showModal = (record={}) => {
  open.value = true
  formRef.value?.resetFields();
  if(record.id){
    pdfId.value = record.pdfId
    idEncrypt.value = record.idEncrypt
    id.value = record.id
    Object.assign(formState, {
      from: record.fromEmail,
      to: record.toEmail,
    })
  }else {
    idEncrypt.value = userStore.invoiceData.idEncrypt
    id.value = userStore.invoiceData.id
    pdfId.value = userStore.invoiceData.pdfId
    Object.assign(formState, {
      from: userStore.invoiceData.fromEmail,
      to: userStore.invoiceData.toEmail,
    })
  }
}
const handleCancel = (e) => {
  formRef.value.resetFields();
  open.value = false
}
const generatePdf = async () => {
  if (idEncrypt.value) {
    const { code } = await post('/api/v1/invoice/generatePdf', { id: idEncrypt.value })
    if (code === '00000') {
      sendEmail()
    }
  } else {
    loading.value = false
    message.error('Invoice not found!')
  }
}
const sendEmail = async () => {
  const obj = {
        ...toRaw(formState),
        id: id.value,
      }
      const { code, msg } = await post('/api/v1/invoice/sendEmail', obj)
      open.value = false
      loading.value = false
      if (code === '00000') {
        message.success('Invoice sent successfully')
      } else {
        message.error(msg || 'Failed to send invoice')
      }
}
const save = () => {
  formRef.value.validate()
    .then(async () => {
      loading.value = true
      generatePdf()
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
