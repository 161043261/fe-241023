# fe-241023

## 路由权限控制

1. 前端不创建完整路由表, 前端根据后端返回的路由权限, 动态添加路由 `router.addRoute()`,
2. 前端创建完整路由表 [routes.ts](./src/router/routes.ts), 使用路由元信息 `meta` 指定路由权限, 并在路由守卫中校验权限

## list

1. vue3, vue-router@4, pinia, tailwindcss, animate.css, element-plus, echarts, 高德地图
2. 手写单例模式的事件 bus, 发布/订阅
3. 手写 vite 插件
4. 虚拟滚动列表, h 函数
5. 左侧菜单后端动态渲染
6. 递归组件
7. grid 网格布局, 缓存滚动位置
8. web worker
9. 全局 toast (使用 vue 插件, 全局 provide/inject 两种方式实现)

## husky

husky 是一个 git hook 工具

- preinstall -> install -> postinstall
- prestart -> start -> poststart
- pretest -> test -> posttest
- prebuild -> build -> postbuild
- prepublish/prepare -> prepublishonly -> publish -> postpublish
- preuninstall -> uninstall -> postuninstall
- prestop -> stop -> poststop
- prepublish/prepare: 在 publish 或 install 时执行

## 全局 toast

两种方式: `app.config.globalProperties/vuePlugin` 和 `app.provide/inject` 实现全局 toast, 参考

- [toast.ts](./src/components/toast/toast.ts)
- [toast-main.vue](./src/components/toast/toast-main.vue)
- [main.ts](./src/main.ts)
- [dashboard-main.vue](./src/views/dashboard/dashboard-main.vue)

## 路由传参

### query

```ts
router.push({
  path: '/register',
  // name: 'Register', // 不需要指定路由组件的名字
  // query: URL 查询参数 http://localhost:5173/register?name=item1&price=1000&id=1
  query: item,
  state: item, // window.history.state = item
})
```

### params

```ts
router.push({
  name: 'RegisterWithId', // 必须指定路由组件的名字
  // params: URL 路径参数 http://localhost:5173/register/1
  params: {
    id: item.id,
  },
})
```

## 自定义指令: 可拖拽窗口

参考 [draggable-window.vue](src/views/order/components/draggable-window.vue)
