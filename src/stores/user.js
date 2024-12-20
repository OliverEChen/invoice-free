import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            userInfo: {}
        }
    },
    actions: {
        setToken(token) {
            this.token = token
        },
        getUserInfo(data) {
            return new Promise((resolve, reject) => {
                this.userInfo = data
                resolve()
            })
        },
        logout() {
            return new Promise((resolve, reject) => {
                this.token = ''
                this.userInfo = {}
                resolve()
            })
        }
    }
})
