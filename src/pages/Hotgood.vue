<!-- 人气热销商品 -->
<template>
    <div>
        <div class="cy_title">
        <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
    </div>
  <div class="hot_main">
      <ul>
        <li v-for="(item, index) in Hotgood" :key="index" @click="skip(item.id)">
          <Hotgood :json="item"> </Hotgood>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
import Hotgood from '@/components/Hotgood'
export default {
    data () {
        return {
              Hotgood:[],
        }
    },

    mounted(){
         this.$axios.get("/shop/goods/list").then(res => {
      console.log(res);
      this.Hotgood = res.data;
      console.log(this.Hotgood)
    });
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        // skip(id){
        //     this.$router.push('/renqi?id='+id)
            
        // }
         skip(id){
       this.$router.push("/renqi?id="+id)
    }
    },
    components: {
       Hotgood
    },
}

</script>
<style scoped lang='scss'>
   .cy_hot {
  width: 100%;
  height: 5rem;
}
.hot_main{
  width: 100%;
  padding-bottom: 0.8rem;
  box-sizing: border-box;
  ul{
     width: 100%;
        display: flex;
        padding: 0 0.2rem;
        justify-content: space-between;
        flex-wrap: wrap;
          >li{
            width: 50%;
           
        }
  }
} 
</style>