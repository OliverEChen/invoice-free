<template>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <template v-for="item in tabList" :key="item">
        <a-tab-pane :tab="item">
          <div>
            <a-row>
              <a-col :span="12">
                <a-form layout="inline" :model="formState" class="mg-b20">
                  <a-form-item>
                    <a-input v-model:value="formState.fieldB" placeholder="input client name" />
                  </a-form-item>
                  <a-form-item>
                    <a-button type="primary">Search</a-button>
                  </a-form-item>
                </a-form>
              </a-col>
              <a-col :span="12" class="t-align-r">
                <a-button type="primary">
                  <template #icon>
                    <PlusOutlined />
                  </template>
                  New Invoice
                </a-button>
              </a-col>
            </a-row>

            <a-table :columns="columns" :data-source="data">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'paid'">
                  <a>
                    {{ record.paid }}
                  </a>
                </template>
                <template v-else-if="column.key === 'action'">
                  <a-popover title="">
                    <template #content>
                      <a-popover title="" placement="right">
                        <template #content>
                          <template v-for="item in markPaidItems" :key="item">
                            <p>
                              <a-button type="link">{{ item }}</a-button>
                            </p>
                          </template>
                        </template>
                        <p>
                          <a-button type="link">Mark Paid</a-button>
                        </p>
                      </a-popover>
                      <p>
                        <a-button type="link" @click="onGetLink(record)">Get Link</a-button>
                      </p>
                      <p>
                        <a-button type="link">Email</a-button>
                      </p>
                      <p>
                        <a-button type="link" @click="onPrint">Print</a-button>
                      </p>
                      <p>
                        <a-button type="link" danger @click="showDeleteConfirm(record)"
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
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, createVNode, h } from 'vue'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons-vue'
const activeKey = ref('Invoice List')
const tabList = reactive(['Invoice List'])
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
  fieldA: '',
  fieldB: '',
})
const columns = [
  {
    title: 'Invoice',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Client',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid',
  },
  {
    title: 'Date',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Balance Due',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    paid: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    paid: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
]
const onPrint = () => {
  window.print()
}
const onGetLink = async (record) => {
  console.log('record', record)
  try {
    await navigator.clipboard.writeText(record.name)
    Modal.success({
      content: h('div', {}, [h('p', 'Link Copied!')]),
    })
  } catch (err) {
    console.error('复制失败', err)
  }
}
const showDeleteConfirm = (record) => {
  Modal.confirm({
    title: 'Are you to sure delete it?',
    icon: createVNode(ExclamationCircleOutlined),
    // content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'Cancel',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}
</script>
<style scoped lang="scss"></style>
