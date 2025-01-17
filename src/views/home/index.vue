<template>
  <div>
    <div class="t-align-c">
      <h1 class="f24 font-w-700">Invoice Your Cunstomers</h1>
      <h1 class="f24 font-w-700 c-ED6337 mg-t10 mg-b10">Free，Easy，Fast</h1>
      <div>
        <p class="">
          InvoiceFree is an simple way to create invoice for
          <span class="c-ED6337">Contractors, freelancers, </span>
        </p>
        <p class="c-ED6337">owner-operators, creatives and other small business owners。</p>
      </div>
      <Button class="mg-t10 mg-b20 create-inv-btn" size="large" @click="onCreateInvoice">Create Invoice Free</Button>
    </div>
    <div class="flex f-j-between">
      <div class="card">
        <h1>Free Invoice Creation</h1>
        <div class="line"></div>
        <p>
          Users can easily generate professional invoices for free, with support for various formats
          and customizable content. No additional costs are required, making invoicing quick,
          simple, and efficient for both individuals and businesses.
        </p>
      </div>
      <div class="card">
        <h1>Easy Invoice Creation</h1>
        <div class="line"></div>
        <p>
          With a simple and intuitive interface, users can quickly create invoices. No complicated
          steps are required—just a few clicks to complete, making it convenient for businesses and
          individuals to handle daily financial tasks with ease.
        </p>
      </div>
      <div class="card">
        <h1>Fast Invoice Creation</h1>
        <div class="line"></div>
        <p>
          Offers an efficient invoice generation tool that allows users to create invoices in just
          seconds, meeting immediate financial needs and boosting productivity for a hassle-free
          invoicing experience.
        </p>
      </div>
    </div>
    <div class="wrap-1">
      <div class="left">
        <img src="../../assets/home/image-2.jpg" />
      </div>
      <div class="right">
        <div class="flex f-a-center mg-b10">
          <span></span>
          <h1>Online Invoice Generation</h1>
        </div>
        <p>
          Offers a convenient online invoice generation service. No software download is
          required—users can create, edit, and send invoices anytime, anywhere through a browser.
          Supports multiple formats and customizable information to cater to the diverse needs of
          businesses and individuals.
        </p>
      </div>
    </div>
    <div class="wrap-1">
      <div class="right">
        <div class="flex f-a-center mg-b10">
          <span></span>
          <h1>Suitable for Various Roles</h1>
        </div>
        <p>
          Designed with flexibility to support a wide range of users, including business owners,
          individual merchants, and financial professionals. Whether managing daily invoicing or
          handling complex financial tasks, it offers tailored features and a seamless user
          experience to meet diverse requirements.
        </p>
      </div>
      <div class="left">
        <img src="../../assets/home/image-1.jpg" />
      </div>
    </div>
    <div class="wrap-1">
      <div class="left">
        <img src="../../assets/home/image-2.jpg" />
      </div>
      <div class="right">
        <div class="flex f-a-center mg-b10">
          <span></span>
          <h1>Multiple Invoice Templates</h1>
        </div>
        <p>
          Offers a wide range of invoice templates designed to suit various scenarios and industry
          needs. Users can select the most suitable template and customize it to reflect
          professionalism and brand identity, meeting diverse invoicing requirements with ease.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, h } from 'vue'
import { Button } from 'ant-design-vue'
import router from '@/router';
const onCreateInvoice = () => {
  router.push('/generator/edit')
}
</script>
<style scoped lang="scss">
div {
  line-height: 1.3;
}
.create-inv-btn {
  background: #ed6337;
  color: #fff;
  border: none;
}
.create-inv-btn:hover{
  color: #fff;
}
.card {
  background: #efefef;
  width: 30%;
  padding: 20px 10px;
  h1 {
    font-size: 18px;
  }
  .line {
    border: 2px solid #ed6337;
    width: 100%;
    margin: 10px 0;
  }
}
.wrap-1 {
  margin-top: 30px;
  display: flex;
  .left {
    width: 40%;
    img {
      width: 100%;
    }
  }
  .right {
    width: 60%;
    margin-left: 20px;
    span {
      display: inline-block;
      width: 4px;
      height: 16px;
      background: #ed6337;
      margin-right: 10px;
    }
    h1 {
      font-size: 20px;
    }
  }
}
</style>
