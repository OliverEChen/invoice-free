<template>
  <div class="form-wrap">
    <div
      style="height: 8px; width: 100%; background: #db6d6d; position: absolute; top: 0; left: 0"
    ></div>
    <a-form
      ref="formRef"
      :model="formState"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      autocomplete="off"
    >
      <!-- Basic Information -->
      <a-row :gutter="16">
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Basic Information</div>
          </div>
          <a-form-item label="Number">
            <a-input v-model:value="formState.number" />
          </a-form-item>
          <a-form-item label="Date">
            <a-date-picker
              v-model:value="formState.date"
              format="MMM DD,YYYY"
              valueFormat="YYYY-MM-DD"
              style="width: 100%"
              @change="handleDateChange"
            />
          </a-form-item>
          <a-form-item label="Terms">
            <a-select
              ref="select"
              v-model:value="formState.terms"
              style="width: 100%"
              @change="handleTermsChange"
            >
              <template v-for="item in termsOption" :key="item">
                <a-select-option :value="item">{{ item }}</a-select-option>
              </template>
            </a-select>
          </a-form-item>
          <a-form-item
            label="Due"
            v-if="formState.terms && !['None', 'On Receipt'].includes(formState.terms)"
          >
            <a-date-picker
              v-model:value="formState.due"
              format="MMM DD,YYYY"
              valueFormat="YYYY-MM-DD"
              style="width: 100%"
              @change="handleDueChange"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Logo</div>
          </div>
          <a-form-item label="">
            <cus-upload :image-url="formState.logoUrl" @fileData="getFileData" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <!-- From -->
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>From</div>
          </div>
          <a-form-item label="Name">
            <a-input v-model:value="formState.fromName" placeholder="Bussiness Name" />
          </a-form-item>
          <a-form-item label="Email">
            <a-input v-model:value="formState.fromEmail" placeholder="name@bussiness.com" />
          </a-form-item>
          <a-form-item label="Address">
            <a-input v-model:value="formState.fromStreet" placeholder="Street" class="mg-b10" />
            <a-input v-model:value="formState.fromCity" placeholder="City,State" class="mg-b10" />
            <a-input v-model:value="formState.fromZipCode" placeholder="Zip code" />
          </a-form-item>
          <a-form-item label="phone">
            <a-input v-model:value="formState.fromPhone" placeholder="(123)456789" />
          </a-form-item>
          <a-form-item label="Bussiness Number">
            <a-input v-model:value="formState.fromBusNumber" placeholder="123-456-789" />
          </a-form-item>
          <a-form-item label="Website">
            <a-input v-model:value="formState.fromWebsite" placeholder="https://website.com" />
          </a-form-item>
          <a-form-item label="Owner">
            <a-input v-model:value="formState.fromOwner" placeholder="Bussiness Owner Name" />
          </a-form-item>
        </a-col>
        <!-- Bill to -->
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Bill to</div>
          </div>
          <a-form-item label="Name">
            <a-input v-model:value="formState.toName" placeholder="Client Name" />
          </a-form-item>
          <a-form-item label="Email">
            <a-input v-model:value="formState.toEmail" placeholder="name@client.com" />
          </a-form-item>
          <a-form-item label="Address">
            <a-input v-model:value="formState.toStreet" placeholder="Street" class="mg-b10" />
            <a-input v-model:value="formState.toCity" placeholder="City,State" class="mg-b10" />
            <a-input v-model:value="formState.toZipCode" placeholder="Zip code" />
          </a-form-item>
          <a-form-item label="Phone">
            <a-input v-model:value="formState.toPhone" placeholder="(123)456789" />
          </a-form-item>
          <a-form-item label="Mobile">
            <a-input v-model:value="formState.toMobile" placeholder="(123)456789" />
          </a-form-item>
          <a-form-item label="Fax">
            <a-input v-model:value="formState.toFax" placeholder="(123)456789" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="currency mg-b20">
        <a-col :span="4">
          <div class="flex f-a-center mg-r20" style="height: 100%">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Items</div>
          </div>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Currency" :label-col="{ span: 8 }">
            <a-select
              ref="select"
              v-model:value="formState.currency"
              style="width: 100%"
              @change="handleCurrencyChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <!-- Items -->
      <div>
        <a-row :gutter="8">
          <a-col :span="8">Description</a-col>
          <a-col :span="3">Unit Cost</a-col>
          <a-col :span="3">quantity</a-col>
          <a-col :span="2">Amount</a-col>
          <a-col :span="8"></a-col>
        </a-row>
        <div style="border: 1px solid #ccc; width: 100%" class="mg-t10 mg-b10"></div>
        <div v-for="(item, index) in formState.invoiceItems" :key="index">
          <a-row :gutter="8">
            <a-col :span="8">
              <a-input v-model:value="item.description" placeholder="Item Description"
            /></a-col>
            <a-col :span="3">
              <a-input-number
                id="inputNumber"
                v-model:value="item.unitCost"
                :precision="2"
                :min="1"
                @change="handleItemAmount(item)"
              />
            </a-col>
            <a-col :span="3">
              <a-input-number
                id="inputNumber"
                v-model:value="item.quantity"
                :min="1"
                @change="handleItemAmount(item)"
              />
            </a-col>
            <a-col :span="2">
              <div style="height: 100%" class="flex f-a-center">$ {{ item.amount }}</div>
            </a-col>
            <a-col :span="8">
              <ArrowUpOutlined
                style="font-size: 24px"
                class="mg-r20 arrow-up"
                @click="handleBubbleUp(index)"
              />
              <a-popconfirm
                title="Are you sure delete this record?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="onDeleteItem(index)"
                @cancel="cancel"
              >
                <a-button type="primary" danger :icon="h(DeleteOutlined)"> Delete </a-button>
              </a-popconfirm>
            </a-col>
            <a-col :span="8" class="mg-t10">
              <a-textarea
                v-model:value="item.addDetails"
                placeholder="Additional details"
                :auto-size="{ minRows: 2, maxRows: 5 }"
            /></a-col>
          </a-row>
          <div style="border: 1px dashed #ccc; width: 100%" class="mg-t10 mg-b10"></div>
        </div>
        <a-button type="primary" @click="onAddItem">
          <template #icon>
            <PlusOutlined />
          </template>
          Add Item
        </a-button>
        <div style="border: 1px solid #ccc; width: 100%" class="mg-t10 mg-b10"></div>
        <a-row>
          <a-col :span="12"></a-col>
          <a-col :span="12">
            <a-form-item label="Subtotal"> $ {{ formState.subTotal }} </a-form-item>
            <a-form-item label="Tax %">
              <div class="flex f-a-center">
                <a-input-number v-model:value="formState.tax" :precision="2" :max="100" :min="0" />
                <span class="mg-l10">%</span>
              </div>
            </a-form-item>
            <a-form-item label="Discount">
              <a-input-number v-model:value="formState.discount" :precision="2" :min="0" />
            </a-form-item>
            <a-form-item label="Shipping Fee">
              <a-input-number v-model:value="formState.shippingFee" :precision="2" :min="0" />
            </a-form-item>
            <a-form-item label="Total"> $ {{ formState.total }} </a-form-item>
          </a-col>
        </a-row>
      </div>
      <!-- Notes -->
      <a-row>
        <a-col :span="24">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Notes</div>
          </div>
          <a-form-item :wrapperCol="{ span: 24 }">
            <a-textarea
              v-model:value="formState.notes"
              placeholder="Notes - any relevant information not covered, additional terms and conditions"
              :auto-size="{ minRows: 3 }"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <!-- Signature -->
      <a-row>
        <a-col :span="24">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Signature</div>
          </div>
          <a-button type="primary" @click="onOpenSignature" v-if="formState.signatureUrl === ''">
            <template #icon>
              <PlusOutlined />
            </template>
            Add Signature
          </a-button>
          <div v-else>
            <div>
              <a-image :width="200" :src="formState.signatureUrl" />
              <p>{{ dayjs(formState.signedOn).format('MMM DD, YYYY') }}</p>
            </div>
            <div>
              <a-button type="primary" @click="onEditSignature" class="mg-r10">
                <template #icon>
                  <EditOutlined />
                </template>
                Edit
              </a-button>
              <a-button type="primary" @click="onDeleteSignature" danger>
                <template #icon>
                  <DeleteOutlined />
                </template>
                Delete
              </a-button>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row class="mg-t20">
        <a-col :span="24">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Photos</div>
          </div>
          <div class="flex f-wrap">
            <template v-for="(item, index) in formState.invoicePhotos">
              <div class="mg-r10 mg-b10" style="width: 100px">
                <a-image
                  :width="100"
                  :src="item.photoUrl"
                />
                <div class="f18 t_ellipsis">{{ item.description }}</div>
                <div class="t_ellipsis2">{{ item.addDetails }}</div>
                <div>
                  <a-button type="primary" class="mg-r10" @click="onEditPhotoDetail(item)">
                    <template #icon>
                      <EditOutlined />
                    </template>
                  </a-button>
                  <a-button type="primary" danger @click="onDeletePhoto(index)">
                    <template #icon>
                      <DeleteOutlined />
                    </template>
                  </a-button>
                </div>
              </div>
            </template>
            <CusUpload :isAvatar="false" @fileData="getPhotoData"/>
          </div>
        </a-col>
      </a-row>
    </a-form>
  </div>
  <a-space class="mg-t30">
    <a-button type="primary" html-type="submit" style="padding: 0 30px" @click="onSave">Save</a-button>
    <a-button style="padding: 0 30px" @click="onClear">Clear</a-button>
  </a-space>
  <MyVueSignature ref="myVueSignature" @signatureData="getSignatureData" />
  <EditPhotoDetail ref="editPhotoDetail" @photoData="getPhotoDataDetail"/>
</template>
<script setup>
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons-vue/lib/icons'
import CusUpload from '@/components/upload/CusUpload.vue'
import MyVueSignature from '@/components/myVueSignaturePad/index.vue'
import EditPhotoDetail from './components/EditPhotoDetail.vue'
import {onBeforeRouteLeave } from 'vue-router'
import { reactive, ref, watch, h, onMounted } from 'vue';
import dayjs, { Dayjs } from 'dayjs'
import { addDaysToDate, base64ToFile } from '@/utils/utils'
import { message } from 'ant-design-vue'
import {uploadApi, post} from '@/api/http'
import {cloneDeep} from 'lodash'
import {useUserStore} from '@/store/modules/user'
import { storeToRefs } from 'pinia'
const termsOption = [
  'None',
  'Custom',
  'On Receipt',
  'Next Day',
  '2 Days',
  '3 Days',
  '4 Days',
  '5 Days',
  '6 Days',
  '7 Days',
  '10 Days',
  '14 Days',
  '21 Days',
  '30 Days',
  '45 Days',
  '60 Days',
  '90 Days',
  '180 Days',
  '365 Days',
]
const initialFormData = {
  id: null,
  number: '',
  date: dayjs().format('YYYY-MM-DD'),
  terms: 'On Receipt',
  due: '',
  logoId: null,
  logoUrl: '',
  fromName: '',
  fromEmail: '',
  fromStreet: '',
  fromCity: '',
  fromZipCode: '',
  fromPhone: '',
  fromBusNumber: '',
  fromWebsite: '',
  fromOwner: '',
  toName: '',
  toEmail: '',
  toStreet: '',
  toCity: '',
  toZipCode: '',
  toPhone: '',
  toMobile: '',
  toFax: '',
  currency: '',
  subTotal: 0,
  tax: 0,
  discount: 0,
  shippingFee: 0,
  total: 0,
  notes: '',
  signatureId: null,
  signatureUrl: '',
  signedOn: '',
  invoiceItems: [],
  invoicePhotos: [],
}
const userStore = useUserStore()
const {invoiceData} = storeToRefs(userStore)

const formState = reactive(cloneDeep(initialFormData))
const formRef = ref(null)
const myVueSignature = ref(null)
const editPhotoDetail = ref(null)
onMounted(() => {
  Object.assign(formState,invoiceData.value)
})
watch(
  () => formState.invoiceItems,
  (newVal) => {
    let sum = 0
    newVal.forEach((item) => {
      sum += item.amount
    })
    formState.subTotal = sum
  },
  { deep: true },
)
watch(
  [
    () => formState.subTotal,
    () => formState.tax,
    () => formState.discount,
    () => formState.shippingFee,
  ],
  (newVal) => {
    // Total = subtotal + subtotal * tax - discount + sheeping fee
    let sum = newVal[0] + (newVal[0] * (newVal[1] / 100) - newVal[2]) + newVal[3]
    formState.total = parseFloat(sum.toFixed(2))
  },
)
onBeforeRouteLeave((to, from) => {
  if(to.path !== '/login'){
    // 退出登录不需要保存数据，直接退出登录即可
    userStore.setInvoiceData(formState)
  }
  // const answer = window.confirm(
  //   'Do you really want to leave? you have unsaved changes!'
  // )
  // // 取消导航并停留在同一页面上
  // if (!answer) return false
})
const onSave = async () => {
  // 有 id 为修改，无 id 为新增
  const url = formState.id ? '/api/v1/invoice/update' : '/api/v1/invoice/save'
  const {code} = await post(url, formState)
  if(code === '00000'){
    message.success('Save invoice successfully!')
  }else {
    message.error('Save invoice failed!')
  }
}
const onClear = () => {
  Object.assign(formState,cloneDeep(initialFormData))
  console.log('Clear invoice successfully', formState)

}
const handleCurrencyChange = (val) => {
  formState.currency = val
}
const handleItemAmount = (item) => {
  item.amount = item.quantity * item.unitCost
}
const handleBubbleUp = (index) => {
  if (index > 0) {
    const temp = formState.invoiceItems[index]
    formState.invoiceItems[index] = formState.invoiceItems[index - 1]
    formState.invoiceItems[index - 1] = temp
  }
}
const getFileData = (data) => {
  formState.logoUrl = data.path
  formState.logoId = data.id
}
const getPhotoData = (data) => {
  const obj = {
    photoUrl: data.path,
    photoId: data.id,
    description: '',
    addDetails: '',
  }
  editPhotoDetail.value.showModal(obj)
}
const getPhotoDataDetail = (data) => {
  const obj = {
    photoUrl: data.photoUrl,
    photoId: data.id,
    description: data.description,
    addDetails: data.addDetails,
  }
  formState.invoicePhotos.push(obj)
}
const handleTermsChange = (val) => {
  console.log('val', val)
  if (val === 'Custom') {
    formState.due = dayjs().format('YYYY-MM-DD')
  } else if (val === 'On Receipt') {
    formState.due = dayjs().format('YYYY-MM-DD')
  } else if (val.includes('Day')) {
    let days = val.split(' ')[0]
    if (days === 'Next') {
      days = 1
    } else {
      days = parseInt(days)
    }
    formState.due = addDaysToDate(formState.date, days)
    console.log('addDaysToDate(formState.date, days)', addDaysToDate(formState.date, days))
  }
}
const handleDueChange = (val) => {
  console.log('handleDueChange', val)
  formState.terms = 'Custom'
}
const handleDateChange = (val) => {
  console.log('handleDateChange', val)
  handleTermsChange(formState.terms)
}
const onEditPhotoDetail = (item) => {
  editPhotoDetail.value.showModal('edit', item)
}
const onDeletePhoto = (index) => {
  formState.invoicePhotos.splice(index, 1)
}
const onAddItem = () => {
  formState.invoiceItems.push({
    description: '',
    addDetails: '',
    quantity: 0,
    amount: 0,
    seq: 0,
    unitCost: 0,
  })
}
const onDeleteItem = (index) => {
  formState.invoiceItems.splice(index, 1)
}
const getSignatureData = (data) => {
  const {file} = base64ToFile(data, `signature${Date.now()}.png`)
  const formData = new FormData()
  formData.append('file', file)
  formData.append('dir', 'signature')
  uploadApi('/api/v1/ossFile/uploadImage', formData)
    .then((res) => {
      console.log('res', res)
      formState.signatureId = res.data.id
      formState.signatureUrl = res.data.path
      formState.signedOn = dayjs().format('YYYY-MM-DD')

      message.success('upload successfully.')
    })
    .catch((err) => {
      message.error('upload failed.')
    })
}
const onOpenSignature = () => {
  console.log(myVueSignature.value)
  myVueSignature.value.showModal('open')
}
const onEditSignature = () => {
  myVueSignature.value.showModal('edit')
}
const onDeleteSignature = () => {
  formState.signatureId = null
  formState.signatureUrl = ''
  formState.signedOn = ''
}
</script>
<style lang="scss" scoped>
.arrow-up:active {
  color: #ccc;
}
.form-wrap {
  position: relative;
  border: 1px solid #000;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 28px 20px 20px;
}
.currency .ant-form-item {
  margin-bottom: 0;
}
</style>
