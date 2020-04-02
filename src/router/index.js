import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入组件
import Index from '../views/index/index'
import Login from '../views/login/index.vue'
// 使用路由
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/login',
    component: Login
  }]
})

export default router
