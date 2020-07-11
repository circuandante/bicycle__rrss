import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/MainLayout.vue'
import User from '../views/User.vue'
import EditProfile from '../views/EditProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:username',
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '/userEdit/:username',
    name: 'UserEdit',
    component: EditProfile,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
