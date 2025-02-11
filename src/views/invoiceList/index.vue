<template>
  <a-spin :spinning="spinning" tip="Invoice Loading...">
    <a-tabs v-model:activeKey="activeKey">
      <template v-for="item in tabList" :key="item">
        <a-tab-pane :tab="item">
          <div>
            <a-row>
              <a-col :span="12">
                <a-form layout="inline" :model="formState" class="mg-b20">
                  <a-form-item>
                    <a-input v-model:value="formState.toName" placeholder="input client name" />
                  </a-form-item>
                  <Space>
                    <a-button type="primary" @click="handleSearch">Search</a-button>
                    <a-button @click="handleReset">Reset</a-button>
                  </Space>
                </a-form>
              </a-col>
              <a-col :span="12" class="t-align-r">
                <a-button type="primary" @click="toNewInvoice">
                  <template #icon>
                    <PlusOutlined />
                  </template>
                  New Invoice
                </a-button>
              </a-col>
            </a-row>

            <a-table
              :columns="columns"
              :data-source="tableData"
              :pagination="{
                total,
              }"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'number'">
                  <a @click="toEditInvoice(record)">
                    {{ record.number }}
                  </a>
                </template>
                <template v-else-if="column.key === 'paidType'">
                    {{ markPaidItems[record.paidType - 1] }}
                </template>
                <template v-else-if="column.key === 'total'">
                    {{formatCurrency(record.currency)}}&nbsp;{{ record.total }}
                </template>
                <template v-else-if="column.key === 'action'">
                  <a-popover title="">
                    <template #content>
                      <a-popover title="" placement="right" v-if="!record.paidType">
                        <template #content>
                          <template v-for="(item, index) in markPaidItems" :key="item">
                            <p>
                              <a-button type="link" @click="onMarkPaidItem(record.id, index)">{{
                                item
                              }}</a-button>
                            </p>
                          </template>
                        </template>
                        <p>
                          <a-button type="link">Mark Paid</a-button>
                        </p>
                      </a-popover>
                      <a-button type="link" @click="onUnMarkPaid(record)" v-else
                        >UnMark Paid</a-button
                      >

                      <p>
                        <a-button type="link" @click="handleCopy(record)">Get Link</a-button>
                      </p>
                      <p>
                        <a-button type="link" @click="onSendEmail(record)">Email</a-button>
                      </p>
                      <p>
                        <a-button type="link" @click="onPrint(record)">Print</a-button>
                      </p>
                      <p>
                        <a-button type="link" danger @click="showDeleteConfirm(record.id)"
                          >Delete</a-button
                        >
                      </p>
                    </template>
                    <MoreOutlined />
                  </a-popover>
                </template>
              </template>
            </a-table>
          </div>
        </a-tab-pane>
      </template>
    </a-tabs>
    <Invoice ref="invoiceRef" style="display: none" />
    <Email ref="emailRef" />
  </a-spin>
</template>

<script setup lang="ts">
import { reactive, ref, createVNode, h, onMounted } from 'vue'
import { Modal, Space, message } from 'ant-design-vue'
import { ExclamationCircleOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons-vue'
import Invoice from '@/components/invoice/index.vue'
import { get, post } from '@/api/http'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'
import { printHTML, formatCurrency, copyToClipboard } from '@/utils/utils'
import Email from '@/components/sendEmail/index.vue'
import { Item } from 'ant-design-vue/es/menu'
const spinning = ref<boolean>(false)
const invoiceRef = ref(null)
const emailRef = ref(null)
const activeKey = ref('Invoice List')
const tabList = reactive(['Invoice List'])
const userStore = useUserStore()
// 1：Bank Transfer 2：Cash 3：Check 4：Credit 5：Debit 6：Mobile Payment App 7：Other
const markPaidItems = reactive([
  'Bank Transfer',
  'Cash',
  'Check',
  'Credit',
  'Debit',
  'Mobile Payment App',
  'Other',
])
const formState = reactive({
  toName: '',
})
const columns = [
  {
    title: 'Invoice',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Client',
    dataIndex: 'toName',
    key: 'toName',
  },
  {
    title: 'Paid',
    dataIndex: 'paidType',
    key: 'paidType',
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
  },
  {
    title: 'Balance Due',
    key: 'total',
    dataIndex: 'total',
  },
  {
    title: 'Action',
    key: 'action',
  },
]
const total = ref(0)
const tableData = ref([])
onMounted(() => {
  getInvoiceList()
})
const getInvoiceList = async () => {
  const { code, data } = await get('/api/v1/invoice/list', {
    toName: formState.toName,
  })
  if (code === '00000') {
    total.value = data.total
    tableData.value = data.list
  }
}
const onMarkPaidItem = async (id, index) => {
  const data = {
    id,
    paidType: index + 1,
  }
  const { code } = await post('/api/v1/invoice/markPaid', data)
  if (code === '00000') {
    message.success('Mark Paid success')
    getInvoiceList()
  } else {
    message.error('Mark Paid failed')
  }
}
const onUnMarkPaid = async (record) => {
  const { code } = await post('/api/v1/invoice/unMarkPaid', { id: record.id })
  if (code === '00000') {
    message.success('UnMark Paid success')
    getInvoiceList()
  } else {
    message.error('UnMark Paid failed')
  }
}
const onSendEmail = (record) => {
  emailRef.value.showModal(record)
}
const toEditInvoice = async ({idEncrypt}) => {
  const { code, data } = await get(`/api/v1/invoice/detail/${idEncrypt}`)
  if (code === '00000') {
    userStore.setInvoiceData(data)
    router.push('/generator/edit')
  }
}
const toNewInvoice = () => {
  userStore.removeInvoiceData()
  router.push('/generator/edit')
}
const handleSearch = () => {
  getInvoiceList()
}
const handleReset = () => {
  formState.toName = ''
  getInvoiceList()
}
const onPrint = async ({idEncrypt}) => {
  spinning.value = true
  const { code, data } = await get(`/api/v1/invoice/detail/${idEncrypt}`)
  if (code === '00000') {
    userStore.setInvoiceData(data)
    setTimeout(async () => {
      const content = invoiceRef.value.$el.innerHTML
      await printHTML(content)
      spinning.value = false
    }, 1000)
  } else {
    spinning.value = false
  }
}
const handleCopy = async (record) => {
  const linkUrl = import.meta.env.VITE_SERVE + `/link-page?id=${record.idEncrypt}`
  try {
    const success = await copyToClipboard(linkUrl)
    if (success) {
      Modal.success({
        content: h('div', {}, [h('p', 'Link Copied!')]),
      })
    } else {
      message.error('Link Copy Failed!')
      console.error('复制失败', err)
    }
  } catch (err) {
    console.error('复制出错:', err)
  }
}
const showDeleteConfirm = (id) => {
  Modal.confirm({
    title: 'Are you to sure delete it?',
    icon: createVNode(ExclamationCircleOutlined),
    // content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'Cancel',
    async onOk() {
      const { code, data } = await post('/api/v1/invoice/delete', { id })
      if (code === '00000') {
        message.success('Delete success')
        getInvoiceList()
      } else {
        message.error('Delete failed')
      }
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}
</script>
<style scoped lang="scss"></style>
