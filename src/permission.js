import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import pinia from './store'
import {useUserStore} from '@/store/modules/user'

const whitePage = ['/login','signup','/home']
nprogress.configure({
  showSpinner: false,
})
const userStore = useUserStore(pinia)
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
//   document.title = `${setting.title}-${to.meta.title as string}`
  nprogress.start()
  const token = userStore.token

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whitePage.includes(to.path)) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
// 全局后置守卫
router.afterEach((to, from, next) => {
  nprogress.done()
})
