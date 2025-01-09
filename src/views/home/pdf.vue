<template>
  <div>
    <a-button type="primary" class="mg-b10" @click="handleDownload">Download</a-button>

    <Invoice ref="invoiceRef" />
  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
const invoiceRef = ref(null)
const handleDownload = () => {
}
</script>
<style scoped lang="scss"></style>
