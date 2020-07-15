<!-- 性情页 -->
<template>
  <div>
    <div class="cy_title">
      <van-nav-bar title="严选专栏" left-arrow @click-left="onClickLeft" />
    </div>
   
    <ul>
      <router-link :to="'/detaile/'+item.id" tag='li' v-for="(item, index) in list" :key="index">
        <img :src="item.pic" alt />
        <p>{{ item.title }}</p>
        <p>{{ item.descript }}</p>
        <p>查看详情</p>
    
      </router-link>
     
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      Banner:[]
    };
  },

  mounted() {
    this.getAjax();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getAjax() {
      this.$axios.get("/cms/news/list").then(res => {
        console.log(res.data);
        this.list = res.data;
      });
    },
  },
  components: {}
};
</script>
<style scoped lang='scss'>
.cy_title {
  border-bottom: 10px solid #dddd;
  font-size: 0.6rem;
  .left {
    color: black;
  }
}
.cy_title {
  width: 100%;
  height: 0.8rem;
  border-bottom: 2px solid #ddd;
}
ul > li {
  padding-left: 0.09rem;
  padding-top: 0.09rem;
  padding-right: 0.09rem;
  text-align: center;
  position: relative;
  img {
    width: 100%;
    height: 4.56rem;
    display: block;
    background: rgba(0, 0, 0, 0.7);
  }
  p:nth-of-type(1) {
    position: absolute;
    top: 1.4rem;
    left: 10%;
    width: 80%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.4rem;
    color: white;
  }
  p:nth-of-type(2) {
    position: absolute;
    top: 2.2rem;
    left: 10%;
    width: 80%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.3rem;
    color: white;
  }
  p:nth-of-type(3) {
    position: absolute;
    top: 3rem;
    left: 3.94rem;
    width: 1.8rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.26rem;
    color: white;
    border: 0.01rem solid #ffffff;
    border-radius: 0.5rem;
  }
}
</style>