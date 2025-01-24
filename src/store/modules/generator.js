import { defineStore } from 'pinia'
import router from '@/router'
export const useGeneratorStore = defineStore('generator', {
    state: () => {
        return {
            activeKey: 'Edit-', // window.confirm 点取消时留在编辑页面
        }
    },
    actions: {
        setActiveKey(val) {
            this.activeKey += val
        },
        resetActiveKey() {
            this.activeKey = 'Edit-'
        }
    }
})
