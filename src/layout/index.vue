<template>
  <a-layout class="layout">
    <a-layout-header class="header-wrap">
      <cus-header></cus-header>
    </a-layout-header>
    <a-layout-content class="main-wrap">
      <div class="main-content">
        <cus-main></cus-main>
      </div>
      <a-layout-footer class="footer" v-if="showFooter">
        <div style="width: 70%;">
          Over <span class="c-ED6337 t-bold f36">50,000</span> users are using <span class="c-ED6337 t-bold f36">InvoiceFree</span>, benefiting from its convenient and efficient invoice generation services to meet the financial needs of individuals and businesses effortlessly.
        </div>
    </a-layout-footer>
    </a-layout-content>
  </a-layout>
</template>
<script setup>
import { watchEffect, ref } from 'vue'
import CusHeader from './header/index.vue'
import CusMain from './main/index.vue'
import router from '@/router'
const showFooter = ref(false)

watchEffect(() => {
  let path = router.currentRoute.value.path
  if(path.startsWith('/home')){
    showFooter.value = true
  }else{
    showFooter.value = false
  }
})
</script>
<style scoped lang="scss">
::v-deep .ant-layout-header {
  padding: 0 10px;
}
.layout {
  height: 100vh;
  .header-wrap {
    position: fixed;
    width: 100%;
    height: $header-height;
  }
  .main-wrap {
    background: #fff;
    position: absolute;
    top: $header-height;
    width: 100%;
    height: calc(100vh - $header-height);
    overflow-y: auto;
    .main-content {
      width: $main-content-width;
      padding: $main-content-padding;
      margin: 0 auto;
    }
  }
  .footer {
    font-size: 24px;
    background-color: #001529;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
  }
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
