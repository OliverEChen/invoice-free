<template>
  <div>
    <a-modal
      title="Send Invoice"
      v-model:open="open"
      centered
      :maskClosable="false"
      :width="500"
      :footer="null"
      @ok="save"
      @cancel="handleCancel"
    >
      <div class="form-wrap">
        <a-form
          layout="vertical"
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
        >
          <a-form-item label="To(required)">
            <a-input placeholder="name@example.com" v-model:value="formState.email" />
          </a-form-item>

          <a-form-item label="From(required)">
            <a-input placeholder="name@example.com" v-model:value="formState.email" />
          </a-form-item>

          <a-form-item label="Message(required)">
            <a-textarea
              v-model:value="formState.message"
              placeholder="Autosize height with minimum and maximum number of lines"
              :auto-size="{ minRows: 2, maxRows: 5 }"
            />
          </a-form-item>
          <div class="flex f-j-between mg-b10">
            <a-button type="primary" @click="save">Send Invoice</a-button>
            <a-button @click="handleCancel">Close</a-button>
          </div>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, defineEmits, reactive } from 'vue'
const formState = reactive({
  email: '',
  password: '',
})
const open = ref(false)
const showModal = (obj) => {
  open.value = true
}
const handleCancel = (e) => {
  open.value = false
}
const save = () => {
  open.value = false
}
defineExpose({ showModal })
</script>
<style lang="scss">
.form-wrap {
  background: #f9fafb;
  padding: 20px;
  margin-bottom: 10px;
}
</style>
