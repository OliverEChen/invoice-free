<template>
  <div class="page-wrap">
    <a-empty />
    <a-button
      type="primary"
      @click="
        () => {
          router.go(-1)
        }
      "
      >Back</a-button
    >
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
</script>
<style scoped lang="scss">
.page-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
