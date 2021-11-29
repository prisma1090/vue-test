import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bpkb from '../views/Bpkb.vue'
import Foto from '../views/Foto.vue'
import Ttd from '../views/Ttd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bpkb',
    name: 'Bpkb',
    component: Bpkb
  },
  {
    path: '/foto',
    name: 'Foto',
    component: Foto
  },
  {
    path: '/ttd',
    name: 'Ttd',
    component: Ttd
  }
]

const router = new VueRouter({
  routes
})

export default router
