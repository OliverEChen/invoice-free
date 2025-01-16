<template>
  <div>
    <div class="flex f-a-center f-j-between mg-b10">
      <a href="#">{{ linkUrl }}</a>
    <a-button type="primary" @click="handleCopy">Copy</a-button>

    </div>

    <Invoice ref="invoiceRef" v-if="id"/>
  </div>
</template>

<script setup lang="ts">
import Invoice from '@/components/invoice/index.vue'
import { ref, reactive, onMounted, h } from 'vue'
import { post } from '@/api/http';
import {useUserStore} from '@/store/modules/user'
import { message, Modal } from 'ant-design-vue';
const invoiceRef = ref(null)
const userStore = useUserStore()
const id = userStore.invoiceData.id
const linkUrl = import.meta.env.VITE_SERVE + `/link-page?id=${id}`
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(linkUrl)
    Modal.success({
      content: h('div', {}, [h('p', 'Link Copied!')]),
    })
  } catch (err) {
    console.error('复制失败', err)
  }

}
</script>
<style scoped lang="scss"></style>
