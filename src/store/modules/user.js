import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: localStorage.getItem('TOKEN'),
            userInfo: {},
            invoiceData: localStorage.getItem('invoice_data') ? JSON.parse(localStorage.getItem('invoice_data')) : {}
        }
    },
    actions: {
        setInvoiceData(data) {
            this.invoiceData = data
            localStorage.setItem('invoice_data', JSON.stringify(data))
        },
        setToken(token) {
            this.token = token
            localStorage.setItem('TOKEN', token)
        },
        setUserInfo(data) {
            this.userInfo = data
        },
        logout() {
            return new Promise((resolve, reject) => {
                localStorage.clear()
                this.$reset()
                resolve()
            })
        }
    }
})
