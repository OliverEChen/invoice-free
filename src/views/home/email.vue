<template>
  <div>
   <send-email></send-email>
    <Invoice ref="invoiceRef" />
  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
import { Space } from 'ant-design-vue';
import SendEmail from '@/components/sendEmail/index.vue'

const invoiceRef = ref(null)
</script>
<style scoped lang="scss">
</style>
