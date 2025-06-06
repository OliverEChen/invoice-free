//进行axios二次封装:使用请求与响应拦截器
import axios from 'axios'
import { message } from 'ant-design-vue';
//引入用户相关的仓库
import { useUserStore } from '@/store/modules/user'
//第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
const userStore = useUserStore()

const request = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带/api
  timeout: 5000, //超时的时间的设置
})
//第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //获取用户相关的小仓库:获取仓库内部token,登录成功以后携带给服务器
  if (userStore.token) {
    config.headers['P-Authorization'] = userStore.token
  }
  //config配置对象,headers属性请求头,经常给服务器端携带公共参数
  //返回配置对象
  return config
})

//第三步:响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data
  },
  (error) => {
    //失败回调:处理http网络错误的
    console.log('error', error)

    //http状态码
    const status = error.response.status
    //提示错误信息
    message.error(error.response.data?.msg || '请求失败');
    if (status === 401) {
      userStore.logout()
    } else {
      return Promise.reject(error)
    }
  },
)
//对外暴露
export default request
