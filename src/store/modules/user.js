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
        setUserInfo(data) {
            this.userInfo = data
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
