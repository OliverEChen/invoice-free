import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页',
            hidden: false,
            icon: 'House',
          },
          component: () => import('@/views/home/index.vue'),
        },
        {
          path: '/invoice-list',
          name: 'invoice-list',
          meta: {
            title: '首页',
            hidden: false,
            icon: '',
          },
          component: () => import('@/views/invoiceList/index.vue'),
        },
      ],
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/signup/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/404',
      name: '404',
      meta: {
        title: '404',
        hidden: true,
        icon: '',
      },
      component: () => import('@/views/404/index.vue'),
    },
    // 匹配任意路由重定向到404
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'any',
      meta: {
        title: 'any',
        hidden: true,
        icon: '',
      },
    },
  ],
})

export default router
