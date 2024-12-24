import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: localStorage.getItem('TOKEN'),
            userInfo: {}
        }
    },
    actions: {
        setToken(token) {
            this.token = token
            localStorage.setItem('TOKEN', token)
        },
        getUserInfo(data) {
            return new Promise((resolve, reject) => {
                this.setToken('token')
                this.userInfo = data
                resolve()
            })
        },
        logout() {
            return new Promise((resolve, reject) => {
                this.token = ''
                localStorage.removeItem('TOKEN')
                this.userInfo = {}
                resolve()
            })
        }
    }
})
