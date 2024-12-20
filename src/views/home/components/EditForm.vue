<template>
  <div class="form-wrap">
    <div
      style="height: 8px; width: 100%; background: #db6d6d; position: absolute; top: 0; left: 0"
    ></div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-row :gutter="16">
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Basic Information</div>
          </div>
          <a-form-item label="Number" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Date" name="username">
            <a-date-picker v-model:value="value1" style="width: 100%" />
          </a-form-item>
          <a-form-item label="Terms" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Due" name="username">
            <a-date-picker v-model:value="value1" style="width: 100%" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Logo</div>
          </div>
          <a-form-item label="" name="password">
            <cus-upload />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>From</div>
          </div>
          <a-form-item label="Name" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Email" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Address" name="username">
            <a-input v-model:value="formState.username" class="mg-b10" />
            <a-input v-model:value="formState.username" class="mg-b10" />
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="phone" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Bussiness Number" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Website" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Owner" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Bill to</div>
          </div>
          <a-form-item label="Name" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Email" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Address" name="username">
            <a-input v-model:value="formState.username" class="mg-b10" />
            <a-input v-model:value="formState.username" class="mg-b10" />
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Phone" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Mobile" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Fax" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="currency">
        <a-col :span="12">
          <div class="flex f-a-center mg-r20">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Items</div>
          </div>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Currency" :label-col="{ span: 8 }" name="username">
            <a-select
              ref="select"
              v-model:value="value1"
              style="width: 100%"
              @focus="focus"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <div>
        <a-row :gutter="8">
          <a-col :span="8">Description</a-col>
          <a-col :span="3">Unit Cost</a-col>
          <a-col :span="3">quantity</a-col>
          <a-col :span="2">Amount</a-col>
          <a-col :span="8"></a-col>
        </a-row>
        <div style="border: 1px solid #ccc; width: 100%" class="mg-t10 mg-b10"></div>
        <div v-for="(item, index) in itemList" :key="index">
          <a-row :gutter="8">
            <a-col :span="8">
              <a-input
                v-model:value="value2"
                placeholder="Autosize height with minimum and maximum number of lines"
            /></a-col>
            <a-col :span="3">
              <a-input-number id="inputNumber" v-model:value="value" :min="1" />
            </a-col>
            <a-col :span="3">
              <a-input-number id="inputNumber" v-model:value="value" :min="1" />
            </a-col>
            <a-col :span="2">$ 12.99</a-col>
            <a-col :span="8">
              <ArrowUpOutlined style="font-size: 24px" class="mg-r20" />
              <a-button type="primary" @click="onDeleteItem(index)" danger>
                <template #icon>
                  <DeleteOutlined />
                </template>
                Delete
              </a-button>
            </a-col>
            <a-col :span="8" class="mg-t10">
              <a-textarea
                v-model:value="value2"
                placeholder="Autosize height with minimum and maximum number of lines"
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
            <a-form-item label="Subtotal" name="username"> $ 256 </a-form-item>
            <a-form-item label="Tax %" name="username">
              <div class="flex f-a-center">
                <a-input-number v-model:value="formState.username" />
                <span class="mg-l10">%</span>
              </div>
            </a-form-item>
            <a-form-item label="Discount" name="username">
              <a-input-number v-model:value="formState.username" />
            </a-form-item>
            <a-form-item label="Shipping Fee" name="username">
              <a-input-number v-model:value="formState.username" />
            </a-form-item>
            <a-form-item label="Total" name="username"> $ 256 </a-form-item>
          </a-col>
        </a-row>
      </div>
      <a-row>
        <a-col :span="24">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Notes</div>
          </div>
          <a-form-item name="username" :wrapperCol="{ span: 24 }">
            <a-textarea
              v-model:value="value1"
              placeholder="Autosize height based on content lines"
              :auto-size="{ minRows: 3 }"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Signature</div>
          </div>
          <a-button type="primary" @click="onOpenSignature" v-if="imgData === null">
            <template #icon>
              <PlusOutlined />
            </template>
            Add Signature
          </a-button>
          <div v-else>
            <div>
              <a-image :width="200" :src="imgData" />
              <p>{{ signTime }}</p>
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
      <a-row>
        <a-col :span="24">
          <div class="flex f-a-center mg-b10">
            <div style="width: 4px; height: 12px; background: #db6d6d" class="mg-r5"></div>
            <div>Photos</div>
          </div>
          <div class="flex f-wrap">
            <template v-for="(item, index) in PhotoList">
              <div class="mg-r10 mg-b10" style="width: 100px">
                <a-image
                  :width="100"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div class="f18 t_ellipsis">Description</div>
                <div class="t_ellipsis2">Additional Detailsscscsdcscwdqwdqwdqwdq wdwef</div>
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
            <CusUpload />
          </div>
        </a-col>
      </a-row>
    </a-form>
  </div>
  <a-space class="mg-t30">
    <a-button type="primary" html-type="submit" style="padding: 0 30px">Save</a-button>
    <a-button style="padding: 0 30px">Clear</a-button>
  </a-space>
  <MyVueSignature ref="myVueSignature" @imgData="getImgData" />
  <EditPhotoDetail ref="editPhotoDetail" />
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
import EditPhotoDetail from './EditPhotoDetail.vue'
import { formatDateWithMonth } from '@/utils/utils'
import { reactive, ref } from 'vue'
const formState = reactive({
  username: '',
  password: '',
  remember: true,
})
const PhotoList = reactive([1, 2])
let itemList = reactive([{}])
const imgData = ref(null)
const signTime = ref('')
const myVueSignature = ref(null)
const editPhotoDetail = ref(null)
const onEditPhotoDetail = (item) => {
  editPhotoDetail.value.showModal('edit', item)
}
const onDeletePhoto = (index) => {
  PhotoList.splice(index, 1)
}
const onAddItem = () => {
  itemList.push({})
}
const onDeleteItem = (index) => {
  itemList.splice(index, 1)
}
const getImgData = (data) => {
  console.log('getImgData', data)
  imgData.value = data
  signTime.value = 'Signed on:' + formatDateWithMonth()
}
const onOpenSignature = () => {
  console.log(myVueSignature.value)
  myVueSignature.value.showModal('open')
}
const onEditSignature = () => {
  myVueSignature.value.showModal('edit')
}
const onDeleteSignature = () => {
  imgData.value = null
}
const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
</script>
<style lang="scss" scoped>
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
