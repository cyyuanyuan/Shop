<!-- 人气推荐 -->
<template>
  <div class="cy_hot">
    <div class="cy_title">
      <van-nav-bar title="人气推荐" > 
        <template #right>
          <van-icon name="arrow" size="20" class="right"  />
        </template>
      </van-nav-bar>
    </div>
    <div class="hot_main">
      <ul>
        <li v-for="(item, index) in Hotgood" :key="index" v-show='index>10&&index<15'>
          <Hotgood :json="item"> </Hotgood>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hotgood from '@/components/Hotgood'
export default {
  data() {
    return {
      Hotgood:[],
    
    };
  },

  mounted() {
     this.$axios.get("/shop/goods/list").then(res => {
      console.log(res);
      this.Hotgood = res.data;
      console.log(this.Hotgood)
    });
  },
  methods: {},
  components: {
    Hotgood
  }
};
</script>
<style  lang='scss'>
.cy_title {
  border-bottom: 2px solid #dddd;
  font-size: 0.6rem;
  .right {
    color: black;
  }
}
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