import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
// 使用数据持久化
import createPersistedState from 'vuex-persistedstate'
let store = new Vuex.Store({
  state: {
    cartlist: [],
    loading: true,
    shoplist:[]
  },
  mutations: {
    changeList(state, res) {
      state.cartlist = res
    },
    //设置loading效果
    setLoading(state, payload) {
      state.loading = payload
    },
    add(state,item){
        let ind=state.cartlist.findIndex((v)=>{
            return v.id==item.id
        })
        if(ind==-1){
            state.shoplist.push(item)
            alert('加入成功')
        }
    }
  },
  actions: {
    // 获取本地数据json，时间为2秒
    getList(context) {
      // setTimeout(()=>{
      //     axios.get("/static/json/good.json").then((res)=>{
      //         console.log(res)
      //         context.commit("changeList",res)
      //     })
      // },2000)

    }
  },
  plugins: [createPersistedState()]
})
export default store
