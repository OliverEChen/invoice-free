<template>
  <a-spin :spinning="spinning" tip="Loading...">
    <div style="width: 70%; margin: 30px auto">
      <div class="flex f-a-center f-j-between mg-b10">
        <a-button type="primary" @click="handleDownloadPdf">PDF</a-button>
        <a-button type="primary" @click="handlePrint">Print</a-button>
      </div>

      <Invoice ref="invoiceRef" v-if="id" />
    </div>
  </a-spin>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted, h } from 'vue'
import { post, get } from '@/api/http'
import { useUserStore } from '@/store/modules/user'
import { message, Modal } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { printHTML, downloadFileByURL } from '@/utils/utils'

const invoiceRef = ref(null)
const spinning = ref<boolean>(false)
const userStore = useUserStore()
const route = useRoute()
const id = route.query.id
onMounted(() => {
  loadData()
})
const loadData = async () => {
  const { code, data } = await get(`/api/v1/invoice/detail/${id}`)
  if (code === '00000') {
    userStore.setInvoiceData(data)
  } else {
    message.error('Invoice Not Found!')
  }
}
const handlePrint = async () => {
  spinning.value = true
  const content = invoiceRef.value.$el.innerHTML
  await printHTML(content)
  spinning.value = false
}
const handleDownloadPdf = async () => {
  if (id) {
    spinning.value = true
    const { code } = await post('/api/v1/invoice/generatePdf', { id })
    if (code === '00000') {
      downloadFileByURL(userStore.invoiceData.pdfUrl)
      spinning.value = false
    }
  } else {
    spinning.value = false
    message.error('Invoice not found!')
  }
}
</script>
<style scoped lang="scss"></style>
