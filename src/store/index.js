import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import { strictEqual } from 'assert';
// 使用数据持久化
import createPersistedState from 'vuex-persistedstate'
let store=new Vuex.Store({
    state:{
        list:[],
        loading:true,
        nums:0,
        cartList:[],
        orderList:[],//存储订单商品列表
        orderInfo:[],
        check:false,
    },
    mutations:{
        changeList(state,res) {
            state.list = res
        },
        //设置loading效果
        setLoading(state,payload){
                state.loading=payload
        },
        //添加购物车的数据
        addCart(state,payload){
            state.cartList = payload;
        },
        //全选
        shopAll(state){
            state.check=!state.check
            for(let i=0;i<state.cartList.length;i++) {
              let bool=state.check
              state.cartList[i].checked=bool
              if(state.cartList[i].checked){
                  bool=true
              }
          }
          },
        countCar(state){
            let sum=0
            this.state.cartList.forEach((item)=>{
                sum+=item.nums
            })
            state.nums=sum
        },
        setOrderList(state){
            state.orderList = state.cartList.filter(item=>{
                return item.checked == true;
            });
        },
        setOrder(state,payload){
            state.orderInfo = payload;
        },
        clear(state){
            state.cartList = [];
            state.nums = 0;
            state.orderInfo = [];
        }
    },
    getters:{
        totalAmounts(state){
            let amount = 0;
            state.orderList.forEach(item=>{
                amount += item.price*item.nums;
            });

            return amount;
        }
    },
    actions:{
        // 获取本地数据json，时间为2秒
        getList(context) {
            setTimeout(()=>{
                // axios.get("static/data.json").then((res)=>{
                //     console.log(res)
                //     context.commit("changeList",res.data)
                // })
            },2000)
            
        }
    },
     plugins: [createPersistedState()]
})
export default store