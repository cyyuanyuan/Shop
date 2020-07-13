import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
//底部跳转
import Space from '@/pages/bottom/Space'
import Car from '@/pages/bottom/Car'
import First from '@/pages/bottom/First'
import Person from '@/pages/bottom/Person'
import Select1 from '@/pages/bottom/Select1'
import Login from '@/pages/Login'
import Zhuce from '@/pages/Zhuce'
import Allcut from '@/pages/Allcut'
import Xiang from '@/pages/Xiang'
import Categood from '@/components/Categood'
import Search from '@/components/Search'
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
          component: First,
          meta:{
            title:'首页'
          }
        },
        {
          path: 'space',
          name: 'Space',
          component: Space,
          meta:{
            title:'分类'
          }
        },
        {
          path: 'car',
          name: 'Car',
          component: Car,
          meta:{
            title:'购物车'
          }
        },
        {
          path: 'person',
          name: 'Person',
          component:Person,
          meta:{
            title:'个人中心'
          }
        },      
      ],
    },
    {
      path: '/select1',
      name: 'Select1',
      component: Select1,
      meta:{
        title:'严选'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        title:'严选商城用户登录'
      }
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce,
      meta:{
        title:'严选商城用户注册'
      }
    },
    {
      path: '/allcut',
      name: 'Allcut',
      component: Allcut,
      meta:{
        title:'严选商城用户注册'
      }
    },
    {
      path: '/xiang',
      name: 'Xiang',
      component: Xiang,
      meta:{
        title:'详情商品'
      }
    },
    {
      path: '/categood/:id',
      name: 'Categood',
      component: Categood,
      meta:{
        title:'分类详情商品'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        title:'分类搜索商品'
      }
    },
    
  ]
})
