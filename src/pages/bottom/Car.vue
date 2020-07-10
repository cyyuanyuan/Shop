<!-- 购物车 -->
<template>
  <div>
    <div id="shop_top">
      <p>编辑</p>
      <p style="color: rgb(208, 0, 0); display: none;">完成</p>
      <p>购物车</p>
      <p></p>
    </div>
    <div class="cy_img">
        <img src="/static/img/10.png" alt="">
    </div>
     <div class="cy_title">
      <van-nav-bar title="猜你喜欢">
        <template #right>
          <van-icon name="arrow" size="20" class="right" />
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {},
  components: {}
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
#shop_top{
     width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.8rem;
    border-bottom: 2px solid #e9e9e9;
    background: white;
    padding: 0 0.3rem;
    font-size: 0.4rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 123;
    >p:nth-of-type(1){
        color: #d00000;
    }
}
.cy_img{
    width: 100%;
    height: 14rem;
    >img{
        width: 100%;
        height: 14rem;
    }
}
</style>