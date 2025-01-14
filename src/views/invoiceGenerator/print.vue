<template>
  <div>
    <a-button type="primary" class="mg-b10" @click="handlePrint">Click to Print</a-button>
    <Invoice ref="invoiceRef" />

  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
const invoiceRef = ref(null)
const handlePrint = () => {

  const content = invoiceRef.value.$el.innerHTML
  const iframe = document.createElement('iframe')

  iframe.setAttribute('style', 'display:none;')
  document.body.appendChild(iframe)

  const doc = iframe.contentDocument || iframe.contentWindow.document

  doc.open()
  doc.write('<html><head><title>Print</title></head><body>')
  doc.write(content)
  doc.write('</body></html>')
  doc.close()

  iframe.contentWindow.onload = function () {
    iframe.contentWindow.print()
    document.body.removeChild(iframe)
  }
}
</script>
<style scoped lang="scss"></style>
