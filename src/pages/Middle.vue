<!-- 首页中间 -->
<template>
  <div class="cy_box">
    <div class="cy_title">
      <van-nav-bar title="精选专题" v-jump='path'>
        <template #right>
          <van-icon name="arrow" size="20" class="right" />
        </template>
      </van-nav-bar>
    </div>
    <div class="isc">
      <ul>
        <li v-for="(item, index) in isc" :key="index">
          <img
            :src="item.pic"
            alt
          />
          <p>{{ item.title }}</p>
          <p>{{ item.descript }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isc:[],
          path:'/select1'
    };
  },

  mounted() {
       this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
     this.isc=res.data
    });
  },
  methods: {},
  components: {}
};
</script>
<style scoped lang='scss'>
.cy_box {
  width: 100%;
  height: 8rem;
}
.cy_title {
  border-bottom: 1px solid #dddd;
  font-size: 0.6rem;
  .right {
    color: black;
  }
}
.cy_box>div:nth-of-type(2){
     width: 100%;
        height: 8rem;
        border-bottom:0.3rem solid #F5F5F5;
        // overflow: hidden;
        overflow: auto;
         >ul{
            width: 22.7rem;
            height: 8rem;
            display: flex;
            >li{
                width: 10rem;
                height: 4.5rem;
                margin-left: 0.12rem;
                >img{
                    width: 10rem;
                    height: 5.5rem;
                    display: block;
                    border-radius: 0.06rem;
                }
                >p:nth-of-type(1){
                    font-size: 0.3rem;
                    color: #2C2C2C;
                    margin-top: 0.12rem;
                    width: 4rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                >p:nth-of-type(2){
                    font-size: 0.28rem;
                    color: #A8A8A8;
                    margin-top: 0.4rem;
                    width: 3.24rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
        }
}
</style>