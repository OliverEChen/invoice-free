<template>
  <div
    style="
      position: relative;
      width: 100%;
      border: 1px solid #000;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
      padding: 28px 20px 20px;
    "
  >
    <div
      style="height: 8px; width: 100%; background: #db6d6d; position: absolute; top: 0; left: 0"
    ></div>
    <div style="display: flex; align-items: center">
      <div style="display: flex; align-items: center">
        <img
          style="width: 100px; height: 100px; margin-right: 20px"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div>
          <div style="font-weight: 500; font-size: 18px">百度</div>
          <div>yanhong li</div>
          <div>
            <span style="font-weight: 500">Business Number</span>
            16116ad6649449
          </div>
          <div>东川路500号</div>
          <div>上海</div>
          <div>100201</div>
          <div>13596906558</div>
          <div>http://www.baidu.com</div>
          <div>165498461@163.com</div>
        </div>
      </div>
      <div style="flex: 1; text-align: right">
        <div style="font-weight: 500">INVOICED</div>
        <div>scb56466</div>
        <div style="font-weight: 500">DATE</div>
        <div>Dec 1, 2024</div>
        <div style="font-weight: 500">DUE DATE</div>
        <div>Dec 1, 2024</div>
        <div style="font-weight: 500">BANLANCE DUE</div>
        <div>SGD S$1646</div>
      </div>
    </div>
    <div style="border: 1px solid #ccc; margin: 10px 0"></div>
    <div>
      <div>BILL TO</div>
      <div>贝壳</div>
      <div>黄河路877</div>
      <div>北京</div>
      <div>100212</div>
      <div style="display: flex; align-items: center">
        <img
          style="width: 12px; height: 12px; margin-right: 10px"
          src="../../assets/icon-2.png"
        />
        <div>86 5002647</div>
      </div>
      <div style="display: flex; align-items: center">
        <img
          style="width: 12px; height: 12px; margin-right: 10px"
          src="../../assets/icon-1.png"
        />
        <div>158965841265</div>
      </div>
      <div style="display: flex; align-items: center">
        <img
          style="width: 12px; height: 12px; margin-right: 10px"
          src="../../assets/icon-3.png"
        />
        <div>158965841265</div>
      </div>
      <div>154649868984@163.com</div>
    </div>
    <div style="margin-top: 10px">
      <div style="font-weight: 700; display: flex">
        <div style="width: 55%">DESCRIPTION</div>
        <div style="width: 15%">RATE</div>
        <div style="width: 15%">QTY</div>
        <div style="width: 15%">AMOUNT</div>
      </div>
      <div style="border: 1px solid #000; margin: 8px 0"></div>
      <div v-for="(item, index) in items">
        <div style="display: flex">
          <div style="width: 55%">
            <div style="font-weight: 500">banana</div>
            <div>banana details banana details banana details banana details banana details</div>
          </div>
          <div style="width: 15%">S$88.88</div>
          <div style="width: 15%">8</div>
          <div style="width: 15%">S$88.88</div>
        </div>
        <div style="border: 1px dashed #ccc; margin: 8px 0" v-if="items.length - 1 !== index"></div>
      </div>
      <div style="border: 1px solid #ccc; margin: 8px 0"></div>
      <div style="margin-left: 50%">
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">SUBTOTAL</div>
          <div>S$88.88</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">DISCOUNT</div>
          <div>S$88.88</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">TAX(10%)</div>
          <div>S$88.88</div>
        </div>
        <div style="border: 1px solid #ccc; margin: 8px 0"></div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">TOTAL</div>
          <div>S$88.88</div>
        </div>
        <div style="border: 1px solid #ccc; margin: 8px 0"></div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">BANLANCE DUE</div>
          <div style="font-weight: 700">S$88.88</div>
        </div>
        <div style="border: 1px solid #ccc; margin: 8px 0"></div>
        <div style="page-break-inside: avoid;">
          <img
            style="width: 100px; height: 100px; margin-right: 20px"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div style="font-weight: 500">DATE SIGNED</div>
          <div>Dec 1, 2024</div>
        </div>
      </div>
    </div>
    <div style="display: flex;flex-wrap: wrap;margin-top: 10px;">
      <div style="margin: 0 10px 10px 0;width: 120px;" v-for="item in photos">
        <img style="width: 120px; height: 120px;" src="https://aliyuncdn.antdv.com/vue.png" />
        <div style="font-weight: 500">我的名片</div>
        <div>这是我的名片 这是我的名片 这是我的名片</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, h } from 'vue'
const items = reactive([1, 2, 3])
const photos = reactive([1,2])
</script>
<style scoped lang="scss"></style>
