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
import Detaile from '@/pages/Detaile'
import Hotgood from '@/pages/Hotgood'
import Renqi from '@/pages/Renqi'
import Confirm from '@/pages/Confirm'
import Pay from '@/pages/Pay'
import Address from '@/pages/Address'
import Newaddress from '@/pages/Newaddress'
import Review  from '@/pages/Review'
import Cutprice  from '@/pages/Cutprice'
import Image from '@/test/Image'
import Water from '@/test/Water'
//我的订单
import Order1  from '@/pages/Order1'
import Order_detaile  from '@/pages/Order_detaile'
//我的礼券
import Gift  from '@/pages/Gift'
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
    {
      path: '/detaile/:id',
      name: 'detaile',
      component: Detaile,
      meta:{
        title:'严选专栏详情'
      }
    },
    {
      path: '/hotgood',
      name: 'hotgood',
      component: Hotgood,
      meta:{
        title:'人气推荐商品页面'
      }
    },
    {
      path: '/renqi',
      name: 'renqi',
      component:Renqi,
      meta:{
        title:'人气详情数据'
      }
    }, 
    {
      path: '/confirm',
      name: 'confirm',
      component:Confirm,
      meta:{
        title:'确认订单页面'
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component:Pay,
      meta:{
        title:'支付页面'
      }
    }, 
    {
      path: '/image',
      name: 'Image',
      component:Image,
      meta:{
        title:'图片懒加载'
      }
    }, 
    {
      path: '/address',
      name: 'Address',
      component:Address,
      meta:{
        title:'我的地址页面'
      }
    }, 
    {
      path: '/newadd',
      name: 'Newaddress',
      component:Newaddress,
      meta:{
        title:'新增地址页面'
      }
    }, 
    {
      path: '/water',
      name: 'Water',
      component:Water,
      meta:{
        title:'瀑布流页面'
      }
    }, 
    {
      path: '/review',
      name: 'Review',
      component:Review,
      meta:{
        title:'我的评价'
      }
    }, 
    {
      path: '/cutprice',
      name: 'Cutprice',
      component:Cutprice,
      meta:{
        title:'发起砍价页面'
      }
    }, 
    {
      path: '/order1',
      name: 'Order1',
      component:Order1,
      meta:{
        title:'我的订单'
      }
    }, 
    {
      path: '/order2',
      name: 'Order_detaile',
      component:Order_detaile,
      meta:{
        title:'订单详情'
      }
    }, 
    {
      path: '/gift',
      name: 'Gift',
      component:Gift,
      meta:{
        title:'我的礼券'
      }
    }, 
  ]
})
