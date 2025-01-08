<template>
  <div>
    <a-button type="primary" class="mg-b10" @click="handlePrint">Click to Print</a-button>
    <a-spin :spinning="spinning">
      <Invoice ref="invoiceRef" />
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
const spinning = ref<boolean>(false);
const invoiceRef = ref(null)
const handlePrint = () => {
  spinning.value = true
  setTimeout(() => {
    const printWindow = window.open('', '_blank')
    const printContent = invoiceRef.value.$el.innerHTML
    printWindow.document.write('<html><head><title>打印</title>')
    printWindow.document.write('</head><body>')
    printWindow.document.write(printContent)
    printWindow.document.write('</body></html>')
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
    printWindow.close()

    spinning.value = false
  }, 2000)
}
</script>
<style scoped lang="scss"></style>
