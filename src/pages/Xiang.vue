<!-- 详情 -->
<template>
  <div class="main">
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in list.pics" :key="index">
          <img :src="item.pic" alt class="banner-img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <p>{{ list.basicInfo.name }}</p>
      <p></p>
      <div>
        <p>
          低价
          <span>￥{{list.basicInfo.minPrice}}</span>
        </p>
        <p>原价￥{{list.basicInfo.originalPrice}}</p>
        <p>库存{{list.basicInfo.stores}}</p>
      </div>
      <div v-html='list.content'>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {}
    };
  },

  mounted() {
    let id = this.$route.query.id;
    console.log(id);
    this.$axios.get("/shop/goods/detail?id=" + id).then(res => {
      this.list = res.data;
      //   if (res.data.msg == "success") {
      //     this.list = res.data;
      //   }
    });
  },
  methods: {},
  components: {}
};
</script>
<style  lang='scss'>
.banner {
  width: 100%;
  img {
    width: 100%;
    height: 9.2rem;
    display: block;
    margin: 0 auto;
  }
}
.main {
  font-size: 0.2rem;
  > div:nth-of-type(2) {
    width: 5rem;
    height: 1.24rem;
    background: #ffffff;
    padding-left: 0.2rem;
    border-bottom: 0.14rem solid #f5f5f5;
    > p:nth-of-type(1) {
      font-size: 0.22rem;
      color: #464646;
      margin-top: 0.3rem;
    }
    > p:nth-of-type(2) {
      font-size: 0.16rem;
      color: #b8b8b8;
      margin-top: 0.16rem;
    }
  }
}
</style>