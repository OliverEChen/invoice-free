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
import {validateEmail} from '@/utils/utils'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const formRef = ref(null);
const formState = reactive({
  from: '',
  to: '',
  message: '',
})
let id = ref(null)
const open = ref(false)
const showModal = (record={}) => {
  if(record.id){
    id.value = record.id
    Object.assign(formState, {
      from: record.fromEmail,
      to: record.toEmail,
    })
    formState.fromEmail = record.fromEmail
    formState.toEmail = record.toEmail
  }else {
    id.value = userStore.invoiceData.id
    Object.assign(formState, {
      from: userStore.invoiceData.fromEmail,
      to: userStore.invoiceData.toEmail,
    })
  }
  open.value = true
}
const handleCancel = (e) => {
  formRef.value.resetFields();
  open.value = false
}
const save = () => {
  formRef.value.validate()
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
