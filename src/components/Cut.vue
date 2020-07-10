<!-- 商品列表 -->
<template>
  <div>
    <div class="cy_title">
      <van-nav-bar title="全民砍价">
        <template #right>
          <van-icon name="arrow" size="20" class="right" v-jump='path' />
        </template>
      </van-nav-bar>
    </div>
    <ul id="cy_ul">
      <li v-for="(item, index) in Cutgood" :key="index" v-show='index<99762'>
        <Cutgood :good="item"></Cutgood>
      </li>
    </ul>
  </div>
</template>

<script>
import Cutgood from "@/components/Cutgood";
export default {
  data() {
    return {
      Cutgood: [],
      path:'/allcut'
    };
  },

  mounted() {
    this.$axios.get("/shop/goods/kanjia/list").then(res => {
      console.log(res.data);
      this.Cutgood = res.data.goodsMap;
    });
  },
  methods: {
    
  },
  components: {
    Cutgood
  }
};
</script>
<style scoped lang='scss'>
.cy_title {
  border-bottom: 2px solid #dddd;
  font-size: 0.6rem;
  .right {
    color: black;
  }
}
</style>