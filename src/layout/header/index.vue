<template>
  <div class="header-content">
    <div class="left c-ED6337 t-bold f18">InvoiceFree</div>
    <div class="content">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <template v-for="item in menuList" :key="item.path">
          <a-menu-item @click="onClickMenuItem(item.path)">{{ item.title }}</a-menu-item>
        </template>
      </a-menu>
    </div>
    <div class="right t-align-r flex-1">
      <a-button type="text" style="color: #fff" @click="onLogout" v-if="email">Log Out</a-button>
      <a-button type="text" style="color: #fff" @click="toLogin" v-else>Log In</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'
const email = useUserStore().userInfo
const selectedKeys = ref(['/home'])

// 监听当前路由路径的变化
// watch(
//   () => router.currentRoute.value.path,
//   (newPath, oldPath) => {
//     selectedKeys.value = [newPath]
//     console.log(`Current path changed from ${oldPath} to ${newPath}`)
//   },
//   { immediate: true },
// )
watchEffect(() => {
  selectedKeys.value = [router.currentRoute.value.path]
})

const menuList = reactive([
  { title: 'Invoice Generator', path: '/home' },
  { title: 'Invoice List', path: '/invoice-list' },
])
const onClickMenuItem = (path: string) => {
  router.push(path)
}
const toLogin = () => {
  router.replace('/login')
}
const onLogout = () => {
  useUserStore()
    .logout()
    .then(() => {
      router.replace('/login')
    })
}
</script>
<style scoped lang="scss">
.header-content {
  padding: 0 20px;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  .left,
  .right {
    width: calc((100% - $main-content-width) / 2);
  }
  .content {
    width: $main-content-width;
  }
}
</style>
