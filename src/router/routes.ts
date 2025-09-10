import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    tagName?: string
    icon?: string
    auths?: string[]
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/layout-main.vue'),
    redirect: {
      name: 'Empty',
    },
    children: [
      {
        path: '/empty',
        name: 'Empty',
        component: () => import('@/views/empty-main.vue'),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/dashboard-main.vue'),
        meta: {
          tagName: '数据看板',
          icon: 'DataScreen',
        },
      },
      {
        path: '/fe-241023',
        name: 'Fe241023',
        component: () => import('@/views/fe-241023/fe-main.vue'),
        meta: {
          tagName: '炒饭机器人列表',
          icon: 'SurveillanceCameras',
        },
      },
      {
        path: '/fe-241023/grid',
        name: 'Robot',
        component: () => import('@/views/fe-241023/robot-grid.vue'),
        meta: {
          tagName: '炒饭机器人网格',
          icon: 'RobotOne',
        },
      },
      {
        path: '/map',
        name: 'Map',
        component: () => import('@/views/map/map-main.vue'),
        meta: {
          tagName: 'Web 地图',
          icon: 'LocalTwo',
        },
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/order/order-main.vue'),
        meta: {
          tagName: '订单管理',
          icon: 'Order',
        },
      },
      {
        path: '/order/detail',
        name: 'Detail',
        component: () => import('@/views/order/order-detail.vue'),
        meta: {
          tagName: '订单详情',
          icon: 'Find',
        },
      },
      {
        path: '/order/add',
        name: 'FileAddition',
        component: () => import('@/views/order/order-add.vue'),
        meta: {
          tagName: '导入订单',
          icon: 'FileAddition',
        },
      },
      {
        path: '/ads',
        name: 'Ads',
        component: () => import('@/views/ads/ads-main.vue'),
        meta: {
          tagName: '广告发布',
          icon: 'GoogleAds',
        },
      },
      {
        path: '/system',
        name: 'System',
        component: () => import('@/views/system/system-main.vue'),
        meta: {
          auths: ['admin'],
          tagName: '系统设置',
          icon: 'System',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login-main.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 匹配未定义的任意路由
    redirect: {
      name: 'Empty',
    },
  },
]

export default routes
