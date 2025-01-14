<template>
  <div>
    <a-button type="primary" class="mg-b10" @click="handleDownload">Download</a-button>

    <Invoice ref="invoiceRef" v-if="id"/>
  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted } from 'vue'
import { post } from '@/api/http';
import {useUserStore} from '@/store/modules/user'
import { message } from 'ant-design-vue';
const invoiceRef = ref(null)
const userStore = useUserStore()
const id = userStore.invoiceData.id
const handleDownload = async () => {
  if(id){
    const {code} = await post('/api/v1/invoice/generatePdf', {id})

  }else {
    message.error('Invoice not found!')
  }

}
</script>
<style scoped lang="scss"></style>
