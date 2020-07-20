<!-- 我的订单页面 -->
<template>
  <div class="box">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />
   <div class="item" v-for="(item,index) in goodsMap" :key="index">
          <p @click="see(item)">查看详情></p>
          <van-card :num="it.number" :desc="it.property" :thumb="it.pic" :title="it.goodsName" :price="it.amount" v-for="(it,i) in item" :key="i"/>
      </div>
  </div>
</template>

<script>
import storage from "@/untils/storage";
export default {
  data() {
    return {
        goodsMap:[],
        path:'/order2'
    };
  },

  mounted() {
      this.getAll()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getAll(){
        let user =storage.get("YanShop",true);

          let formtdata = new FormData();

          formtdata.append("token",user.token);

          this.$axios.post("https://api.it120.cc/small4/order/list",formtdata)
          .then(res=>{
              console.log(res);
              this.goodsMap = res.data.goodsMap;
          })
    },
    see(item){
        console.log(item)
        this.$router.push({
            path:'/order2',
            query:{
                item
            }
        })
    }
  },
  components: {}
};
</script>
<style scoped>
</style>