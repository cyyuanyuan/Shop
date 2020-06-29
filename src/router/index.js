import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
//底部跳转
import Space from '@/pages/bottom/Space'
import Car from '@/pages/bottom/Car'
import First from '@/pages/bottom/First'
import Person from '@/pages/bottom/Person'
import Login from '@/pages/Login'
import Zhuce from '@/pages/Zhuce'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
       redirect:"/first",
      children:[
        {
          path: 'first',
          name: 'First',
          component: First
        },
        {
          path: 'space',
          name: 'Space',
          component: Space
        },
        {
          path: 'car',
          name: 'Car',
          component: Car
        },
        {
          path: 'person',
          name: 'Person',
          component: Person
        },      
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
  ]
})
