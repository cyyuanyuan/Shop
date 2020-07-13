import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
// 使用数据持久化
//import createPersistedState from 'vuex-persistedstate'
let store=new Vuex.Store({
    state:{
        list:[],
        loading:true,
    },
    mutations:{
        changeList(state,res) {
            state.list = res
        },
         //设置loading效果
         setLoading(state,payload){
            state.loading=payload
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
    // plugins: [createPersistedState()]
})
export default store