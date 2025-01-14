<template>
  <div>
    <Invoice ref="invoiceRef" />
  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
const invoiceRef = ref(null)
</script>
<style scoped lang="scss"></style>
