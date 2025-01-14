<template>
  <div>
    <a-button type="primary" class="mg-b10" @click="handleSendEmail">Send Email</a-button>
    <Invoice ref="invoiceRef" />
    <send-email ref="sendEmailRef"/>

  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
import { Space } from 'ant-design-vue';
import SendEmail from '@/components/sendEmail/index.vue'

const invoiceRef = ref(null)
const sendEmailRef = ref(null)
const handleSendEmail = () => {
  sendEmailRef.value.showModal()
}
</script>
<style scoped lang="scss">
</style>
