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
import { reactive, ref, watchEffect } from 'vue'
const activeKey = ref('Edit')
const tabList = reactive(['Edit', 'Preview', 'PDF', 'Email', 'Print'])
const router = useRouter()
watchEffect(() => {
  let path = router.currentRoute.value.path.split('/').pop()
  if(path === 'pdf'){
    activeKey.value = path.toUpperCase()
  }else {
    activeKey.value = path.charAt(0).toUpperCase() + path.slice(1)
  }
})
const onTabChange = (key: string) => {
  console.log(`/generator/${key.toLocaleLowerCase()}`)
  router.push(`/generator/${key.toLocaleLowerCase()}`)
}
</script>
<style scoped lang="scss"></style>
