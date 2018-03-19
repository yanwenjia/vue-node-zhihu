import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Theme from '@/components/Theme'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/theme/:id',
      name: 'theme',
      component: Theme
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
