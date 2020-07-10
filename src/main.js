// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入样式清空
import './assets/Reset.css'
//全局使用vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//全局使用element-ui
import Ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; // 引入elementui样式库
Vue.use(Ele)
// 本地存储
import storage from '@/untils/storage'
//全局使用axios
import axios from '@/untils/resquest'
axios.defaults.baseURL='https://api.it120.cc/small4'
import store from './store'
//将axios绑定到vue原型
Vue.prototype.$axios=axios
Vue.config.productionTip = false
// 全局自定义指令
Vue.directive("jump",(el,{ value },vnode,oldNode)=>{
  el.onclick = ()=>{
    // value
    vnode.context.$router.push({
        path:value
    })
  }
})
//
//全局路由守卫,进入组件之前触发
router.beforeEach((to,from, next)=>{ 
  //判断路由是否设置title值，给组件添加标题内容
  if(to.hasOwnProperty("meta")){
    document.title = to.meta.title;
  }

  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
