<template>
  <div class="page-wrap">
    <div class="container">
      <div class="mg-b10 f20 c-ED6337">InvoiceFree</div>
      <div class="mg-b20">Login to your account</div>
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
            label="Email"
            name="email"
            :rules="[{ required: true, message: 'Please input your email!' }]"
          >
            <a-input placeholder="Please input your email" v-model:value="formState.email" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password
              placeholder="Please input your password"
              v-model:value="formState.password"
            />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" style="width: 100%">Login</a-button>
          </a-form-item>
          <a-form-item>
            <a-button style="width: 100%">Cancel</a-button>
          </a-form-item>
        </a-form>
      </div>
      <div class="flex f-a-center f-j-end mg-t20">
        <div class="mg-r10">Don't have an account?</div>
        <a-button @click="toSignUp">Sign Up</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'
interface FormState {
  email: string
  password: string
}
const userInfo = {
  email: 'admin@163.com',
  password: 'password123',
}
const formState = reactive<FormState>({
  email: 'admin@163.com',
  password: 'password123',
})
const userStore = useUserStore()
const toSignUp = () => {
  router.push('/signup')
}
const onFinish = (values: any) => {
  if (values.email === userInfo.email && values.password === userInfo.password) {
    userStore.getUserInfo(values).then(() => {
      router.replace('/')
    })
  } else {
    alert('Incorrect email or password')
  }
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
