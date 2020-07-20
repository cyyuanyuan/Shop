<!-- 详情 -->
<template>
  <div class="main">
    <Details :list="list"  :json='list1'></Details>
  </div>
</template>

<script>
import Details from "@/common/Details";
export default {
  data() {
    return {
      list: {},
      list1:[]
    };
  },

  mounted() {
    let id = this.$route.query.id;
    this.$axios.get("/shop/goods/detail?id=" + id).then(res => {
      this.list = res.data;
    });
     this.$axios.get("/shop/goods/reputation?goodsId=" + id).then(res => {
      //console.log(res);
      this.list1 = res.data;
      console.log(res)
    });
  },
  methods: {},
  components: {
    Details
  }
};
</script>

<style  lang='scss'>
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