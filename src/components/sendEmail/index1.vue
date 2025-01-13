<template>
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
          <a-button type="primary">Send Invoice</a-button>
          <a-button>Close</a-button>
        </div>
      </a-form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue'
const emit = defineEmits(['ok', 'cancel'])
interface FormState {
  email: string
  password: string
}
const formState = reactive<FormState>({
  email: '',
  password: '',
})
</script>
<style scoped lang="scss">
.form-wrap{
  background: #F9FAFB;
  padding: 20px;
  margin-bottom: 10px;
}
</style>