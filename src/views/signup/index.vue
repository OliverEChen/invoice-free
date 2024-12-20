<template>
  <div class="page-wrap">
    <div class="container">
      <div class="mg-b10 f20 c-ED6337">InvoiceFree</div>
      <div class="mg-b20">Sign Up</div>
      <div class="form-wrap">
        <a-form
          layout="vertical"
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="First Name"
            name="email"
            :rules="[{ required: true, message: 'Please input your first name!' }]"
          >
            <a-input v-model:value="formState.firstName" />
          </a-form-item>
          <a-form-item
            label="Last Name"
            name="email"
            :rules="[{ required: true, message: 'Please input your last name!' }]"
          >
            <a-input v-model:value="formState.lastName" />
          </a-form-item>
          <a-form-item
            label="Email"
            name="email"
            :rules="[{ required: true, message: 'Please input your email!' }]"
          >
            <a-input v-model:value="formState.email" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>
          <a-form-item name="remember">
            <a-checkbox v-model:checked="formState.remember"
              >I want to receive emails from Invoice Simple and its Affiliates about their products,
              services, news, events, and promotions.
            </a-checkbox>
          </a-form-item>

          <a-form-item name="password">
            <a-button type="primary" html-type="submit" style="width: 100%">Sign Up</a-button>
          </a-form-item>
          <a-form-item name="password">
            <a-button style="width: 100%">Cancel</a-button>
          </a-form-item>
        </a-form>
      </div>
      <div class="flex f-a-center f-j-end mg-t20">
        <div class="mg-r10">Already have an account?</div>
        <a-button @click="toLogin">Login</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import router from '@/router'
interface FormState {
  firstName: string
  lastName: string
  email: string
  password: string
  remember: boolean
}

const formState = reactive<FormState>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  remember: false,
})
const toLogin = () => {
  router.push('/login')
}

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
<style scoped lang="scss">
.page-wrap {
  position: relative;
  background: #444;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    color: #fff;
    text-align: center;
    width: 30%;
    .form-wrap {
      padding: 20px;
      background: #fff;
    }
  }
}
</style>
