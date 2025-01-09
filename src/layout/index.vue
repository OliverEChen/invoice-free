<template>
  <a-layout class="layout">
    <a-layout-header class="header-wrap">
      <cus-header></cus-header>
    </a-layout-header>
    <a-layout-content class="main-wrap">
      <div class="main-content">
        <cus-main></cus-main>
      </div>
    </a-layout-content>
    <!-- <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer> -->
  </a-layout>
</template>
<script setup>
import CusHeader from './header/index.vue'
import CusMain from './main/index.vue'
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
