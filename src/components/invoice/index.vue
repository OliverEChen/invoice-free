<template>
  <div
    style="
      position: relative;
      width: 100%;
      border: 1px solid #000;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
      padding: 28px 20px 20px;
      line-height: 1.5;
    "
  >
    <div
      style="height: 8px; width: 100%; background: #db6d6d; position: absolute; top: 0; left: 0"
    ></div>
    <div style="display: flex; align-items: center">
      <div style="display: flex; align-items: center">
        <img
          style="width: 100px; height: 100px; margin-right: 20px"
          :src="invoiceData?.logoUrl"
        />
        <div>
          <div style="font-weight: 500; font-size: 18px">{{ invoiceData.fromOwner }}</div>
          <div>{{ invoiceData.fromName }}</div>
          <div>
            <span style="font-weight: 500">Bussiness Number</span>
            <span style="margin-left: 10px;">{{ invoiceData?.fromBusNumber }}</span>
          </div>
          <div>{{ invoiceData.fromStreet }}</div>
          <div>{{ invoiceData.fromCity }}</div>
          <div>{{ invoiceData.fromZipCode }}</div>
          <div>{{ invoiceData.fromPhone }}</div>
          <div>{{ invoiceData.fromWebsite }}</div>
          <div>{{ invoiceData.fromEmail }}</div>
        </div>
      </div>
      <div style="flex: 1; text-align: right">
        <div style="font-weight: 500">INVOICE</div>
        <div>{{ invoiceData.number }}</div>
        <div style="font-weight: 500">DATE</div>
        <div>{{ invoiceData.date }}</div>
        <div style="font-weight: 500">DUE DATE</div>
        <div>{{ invoiceData.due }}</div>
        <div style="font-weight: 500">BANLANCE DUE</div>
        <div>SGD {{ formatCurrency(invoiceData.currency) }} 1646</div>
      </div>
    </div>
    <div style="border: 1px solid #ccc; margin: 10px 0"></div>
    <div>
      <div>BILL TO</div>
      <div style="font-weight: 500;">{{ invoiceData.toName }}</div>
      <div>{{ invoiceData.toStreet }}</div>
      <div>{{ invoiceData.toCity }}</div>
      <div>{{ invoiceData.toZipCode }}</div>
      <div style="display: flex; align-items: center">
        <img
          style="width: 12px; height: 12px; margin-right: 10px"
          src="../../assets/icon-2.png"
        />
        <div>{{ invoiceData.toMobile }}</div>
      </div>
      <div style="display: flex; align-items: center">
        <img
          style="width: 12px; height: 12px; margin-right: 10px"
          src="../../assets/icon-1.png"
        />
        <div>{{ invoiceData.toPhone }}</div>
      </div>
      <div style="display: flex; align-items: center">
        <img
          style="width: 12px; height: 12px; margin-right: 10px"
          src="../../assets/icon-3.png"
        />
        <div>{{ invoiceData.toFax }}</div>
      </div>
      <div>{{ invoiceData.toEmail }}</div>
    </div>
    <div style="margin-top: 10px">
      <div style="font-weight: 700; display: flex">
        <div style="width: 55%">DESCRIPTION</div>
        <div style="width: 15%">Unit Cost</div>
        <div style="width: 15%">QTY</div>
        <div style="width: 15%">AMOUNT</div>
      </div>
      <div style="border: 1px solid #000; margin: 8px 0"></div>
      <div v-for="(item, index) in invoiceData.invoiceItems" :key="index">
        <div style="display: flex">
          <div style="width: 55%">
            <div style="font-weight: 500">{{ item.description }}</div>
            <div>{{ item.addDetails }}</div>
          </div>
          <div style="width: 15%">{{ formatCurrency(invoiceData.currency) }} {{ item.unitCost }}</div>
          <div style="width: 15%">{{item.quantity}}</div>
          <div style="width: 15%">{{ formatCurrency(invoiceData.currency) }} {{item.amount}}</div>
        </div>
        <div style="border: 1px dashed #ccc; margin: 8px 0" v-if="invoiceData.invoiceItems.length - 1 !== index"></div>
      </div>
      <div style="border: 1px solid #ccc; margin: 8px 0"></div>
      <div style="margin-left: 50%">
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">SUBTOTAL</div>
          <div>{{ formatCurrency(invoiceData.currency) }} {{ invoiceData.subTotal }}</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">DISCOUNT</div>
          <div>{{ formatCurrency(invoiceData.currency) }} {{ invoiceData.discount }}</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">TAX(10%)</div>
          <div>{{ invoiceData.tax }}</div>
        </div>
        <div style="border: 1px solid #ccc; margin: 8px 0"></div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">TOTAL</div>
          <div>{{ formatCurrency(invoiceData.currency) }} {{ invoiceData.total }}</div>
        </div>
        <div style="border: 1px solid #ccc; margin: 8px 0"></div>
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: 500">BANLANCE DUE</div>
          <div style="font-weight: 700">{{ formatCurrency(invoiceData.currency) }} {{ invoiceData.total }}</div>
        </div>
        <div style="border: 1px solid #ccc; margin: 8px 0"></div>
        <div style="page-break-inside: avoid;">
          <img
            style="width: 100px; height: 100px; margin-right: 20px"
            :src="invoiceData.signatureUrl"
          />
          <div style="font-weight: 500">DATE SIGNED</div>
          <div>{{ invoiceData.signedOn && dayjs(invoiceData.signedOn).format('MMM DD, YYYY') }}</div>
        </div>
      </div>
    </div>
    <div style="display: flex;flex-wrap: wrap;margin-top: 10px;">
      <div style="margin: 0 10px 10px 0;width: 120px;page-break-inside: avoid;" v-for="item in invoiceData.invoicePhotos" :key="item.photoId">
        <img style="width: 120px; height: 120px;" :src="item.photoUrl" />
        <div style="font-weight: 500">{{ item.description }}</div>
        <div>{{ item.addDetails }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, h, onBeforeMount } from 'vue';
import {useUserStore} from '@/store/modules/user'
import { storeToRefs } from 'pinia'
import dayjs, { Dayjs } from 'dayjs'
import {formatCurrency} from '@/utils/utils'

const userStore = useUserStore()
const {invoiceData} = storeToRefs(userStore)

</script>
<style scoped lang="scss">
</style>
