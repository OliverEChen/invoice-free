<template>
  <a-spin :spinning="spinning" tip="Loading...">
    <div>
      <a-button type="primary" class="mg-b10" @click="handleDownload">Download</a-button>

      <Invoice ref="invoiceRef" v-if="id" />
    </div>
  </a-spin>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
import { post, get } from '@/api/http'
import { useUserStore } from '@/store/modules/user'
import { downloadFileByURL } from '@/utils/utils'
import { message } from 'ant-design-vue'
const invoiceRef = ref(null)
const userStore = useUserStore()
const spinning = ref<boolean>(false)
const id = userStore.invoiceData.idEncrypt
const handleDownload = async () => {
  if (id) {
    spinning.value = true
    const { code } = await post('/api/v1/invoice/generatePdf', { id })
    if (code === '00000') {
      getInvoiceDetail(id)
    }
  } else {
    spinning.value = false
    message.error('Invoice not found!')
  }
}
const getInvoiceDetail = async (id) => {
  const { code, data } = await get(`/api/v1/invoice/detail/${id}`)
  if (code === '00000') {
    downloadFileByURL(data.pdfUrl)
    spinning.value = false
  }
}
</script>
<style scoped lang="scss"></style>
