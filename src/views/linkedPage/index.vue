<template>
  <div style="width: 70%; margin: 30px auto">
    <div class="flex f-a-center f-j-between mg-b10">
      <a-button type="primary" @click="handleDownloadPdf">PDF</a-button>
      <a-button type="primary" @click="onPrint">Print</a-button>
    </div>

    <Invoice ref="invoiceRef" v-if="id" />
  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted, h } from 'vue'
import { post, get } from '@/api/http'
import { useUserStore } from '@/store/modules/user'
import { message, Modal } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import {printHTML} from '@/utils/utils'

const invoiceRef = ref(null)
const userStore = useUserStore()
const route = useRoute()
const id = route.query.id

const loadData = async () => {
  const { code, data } = await get(`/api/v1/invoice/detail/${id}`)
  if (code === '00000') {
    userStore.setInvoiceData(data)
  } else {
    message.error('Invoice Not Found!')
  }
}
const onPrint = async () => {
  const content = invoiceRef.value.$el.innerHTML
  printHTML(content)
}
onMounted(() => {
  loadData()
})
const handleDownloadPdf = () => {}
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText('record.name')
    Modal.success({
      content: h('div', {}, [h('p', 'Link Copied!')]),
    })
  } catch (err) {
    console.error('复制失败', err)
  }
}
</script>
<style scoped lang="scss"></style>
