<template>
    <a-spin :spinning="spinning" tip="Invoice Loading...">

    <a-button type="primary" class="mg-b10" @click="handlePrint">Click to Print</a-button>
    <Invoice ref="invoiceRef" />

  </a-spin>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
import { printHTML } from '@/utils/utils'

const invoiceRef = ref(null)
const spinning = ref<boolean>(false)

const handlePrint = async () => {
  spinning.value = true
  const content = invoiceRef.value.$el.innerHTML
  await printHTML(content)
  spinning.value = false
}
</script>
<style scoped lang="scss"></style>
