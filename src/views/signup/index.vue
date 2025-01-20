<template>
  <div class="page-wrap">
    <div class="container">
      <div class="mg-b10 f20 c-ED6337">InvoiceFree</div>
      <div class="mg-b20">Sign Up</div>
      <div class="form-wrap">
        <a-form
          ref="formRef"
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
            name="firstName"
            :rules="[{ required: true, message: 'Please input your first name!' }]"
          >
            <a-input v-model:value="formState.firstName" placeholder="leon"/>
          </a-form-item>
          <a-form-item
            label="Last Name"
            name="lastName"
            :rules="[{ required: true, message: 'Please input your last name!' }]"
          >
            <a-input v-model:value="formState.lastName" placeholder="zhang"/>
          </a-form-item>
          <a-form-item
            label="Email"
            name="loginEmail"
            :rules="[
              {required: true, validator: validateEmail, trigger: 'change'}
            ]"
          >
            <a-input v-model:value="formState.loginEmail" placeholder="name@example.com"/>
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, validator: validatePassword, trigger: 'change' }]"
          >
            <a-input-password v-model:value="formState.password" placeholder="******"/>
          </a-form-item>
          <a-form-item
            label="confirmPassword"
            name="confirmPassword"
            :rules="[
              {required: true,validator: validateConfirmPassword, trigger: 'change'}
            ]"
          >
            <a-input-password v-model:value="formState.confirmPassword" placeholder="******"/>
          </a-form-item>
          <a-form-item name="remember">
            <a-checkbox v-model:checked="formState.remember"
              >I want to receive emails from InvoiceFree and its Affiliates about their products,
              services, news, events, and promotions.
            </a-checkbox>
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" style="width: 100%">Sign Up</a-button>
          </a-form-item>
          <a-form-item>
            <a-button style="width: 100%" @click="onCancel">Cancel</a-button>
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
import { reactive, ref } from 'vue';
import router from '@/router'
import {validateEmail, validatePassword} from '@/utils/utils'
import {post} from '@/api/http'
import { message } from 'ant-design-vue';
interface FormState {
  loginEmail: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  remember: boolean
}

const formState = reactive<FormState>({
  loginEmail: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  remember: false
})
const formRef = ref(null)
const toLogin = () => {
  router.push('/login')
}
const validateConfirmPassword = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the confirmPassword');
  } else if (value !== formState.password) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};
const onFinish = async (values: any) => {
  console.log('Success:', values)
  const {code, msg} = await post('/api/v1/user/register', values)
  if(code === '00000'){
    message.success(msg)
    router.push('/login')
  }else {
    message.error(msg)
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const onCancel = () => {
  formRef.value.resetFields()
}
</script>
<style scoped lang="scss">
.page-wrap {
  position: relative;
  background: #444;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    margin: 40px 0;
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
