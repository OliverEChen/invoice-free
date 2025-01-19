<template>
  <div>
    <a-tabs v-model:activeKey="activeKey" @change="onTabChange">
      <template v-for="item in tabList" :key="item">
        <a-tab-pane :tab="item"> </a-tab-pane>
      </template>
    </a-tabs>
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive, ref, watchEffect, watch } from 'vue';
import { useUserStore } from '@/store/modules/user'
const activeKey = ref('Edit')
let tabList = ref(['Edit', 'Preview', 'PDF', 'Email', 'Print', 'Link'])
const router = useRouter()
const userStore = useUserStore()
watchEffect(() => {
  console.log('watchEffect')
  let path = router.currentRoute.value.path.split('/').pop()
  if(path === 'pdf'){
    activeKey.value = path.toUpperCase()
  }else {
    activeKey.value = path.charAt(0).toUpperCase() + path.slice(1)
  }
})
watch(()=> userStore.invoiceData.id, (id) => {
  console.log('watchId', id)
  if(id){
    tabList.value = ['Edit', 'Preview', 'PDF', 'Email', 'Print', 'Link']
  }else {
    tabList.value = ['Edit', 'Preview']
  }
}, {immediate: true, deep: true})
const onTabChange = (key: string) => {
  router.push(`/generator/${key.toLocaleLowerCase()}`)
}
</script>
<style scoped lang="scss"></style>
