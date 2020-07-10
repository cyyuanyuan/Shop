<!-- 全部砍价商品 -->
<template>
    <div>
         <div class="cy_title">
      <van-nav-bar title="砍价列表" left-arrow @click-left="onClickLeft" />
    </div>
        <ul id="cy_ul">
      <li v-for="(item, index) in Cutgood" :key="index" @click="tiao(item.id)">
        <Cutgood :good="item"></Cutgood>
      </li>
    </ul>
    </div>
</template>

<script>
import Cutgood from "@/components/Cutgood";
export default {
    data () {
        return {
            Cutgood:[]
        }
    },

    mounted(){
         this.$axios.get("/shop/goods/kanjia/list").then(res => {
      console.log(res.data);
      this.Cutgood = res.data.goodsMap;
    });
    },
    methods: {
         onClickLeft() {
      this.$router.go(-1);
    },
    tiao(id){
        this.$router.push('/xiang?id='+id)
    }
    },
    components: {
        Cutgood
    },
}

</script>
<style scoped>
    
</style>