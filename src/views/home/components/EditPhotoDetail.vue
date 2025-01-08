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
          :src="formData.photoUrl"
        />
        <a-input v-model:value="formData.description" placeholder="Description" class="mg-b10" />
        <a-textarea
          v-model:value="formData.addDetails"
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
const emit = defineEmits(['photoData'])
const showModal = (obj) => {
  open.value = true
  Object.assign(formData, obj)
}
const handleCancel = (e) => {
  open.value = false
}
const save = () => {
  open.value = false
  emit('photoData', formData)
}
defineExpose({ showModal })
</script>
<style lang="scss"></style>
