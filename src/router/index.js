import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用懒加载方式
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Cartshop = () => import('../views/cartshop/Cartshop.vue')

// 1.安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cartshop',
    component: Cartshop
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 2.创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router
