<template>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <template v-for="item in tabList" :key="item">
        <a-tab-pane :tab="item">
          <EditForm v-if="item === 'Edit'" />
          <div v-else-if="item === 'Preview'">
            <Invoice/>
          </div>
          <div v-else-if="item === 'Print'">
            <Print/>
          </div>
          <div v-else>Content of Tab Pane {{ item }}</div>
        </a-tab-pane>
      </template>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import EditForm from './components/EditForm.vue'
import Invoice from '@/components/invoice/index.vue'
import Print from './components/Print.vue';
import { reactive, ref } from 'vue'
const activeKey = ref('Edit')
const tabList = reactive(['Edit', 'Preview', 'PDF', 'Email', 'Print'])
</script>
<style scoped lang="scss"></style>
