<template>
  <div>
    <a-modal
      title="Photo Details"
      v-model:open="open"
      centered
      :maskClosable="false"
      :width="400"
      @ok="save"
      @cancel="handleCancel"
    >
      <div class="flex f-d-column f-a-center">
        <a-image
          :width="200"
          class="mg-b10"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <a-input v-model:value="formData.description" placeholder="Description" class="mg-b10" />
        <a-textarea
          v-model:value="formData.additional"
          placeholder="Additional description"
          :auto-size="{ minRows: 2 }"
        />
      </div>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, defineEmits, reactive } from 'vue'
const open = ref(false)
const formData = reactive({})
const emit = defineEmits(['imgData'])
const showModal = (flag) => {
  open.value = true
  if (flag !== 'edit') {
    imgData.value = null
  }
}
const handleCancel = (e) => {
  open.value = false
}
const save = () => {
  open.value = false
  emit('imgData', imgData.value)
}
defineExpose({ showModal })
</script>
<style lang="scss"></style>
