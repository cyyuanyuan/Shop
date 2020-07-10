<!-- Banner -->
<template>
  <div id="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerImg" :key="index">
          <img :src="item.picUrl" alt="">
      </van-swipe-item>
    </van-swipe>
     <ul class="cy_bottom">
              <li v-for="(item, index) in json" :key="index" v-jump='item.to'>
                  <img :src="item.img" alt="">
                  <p>{{ item.title }}</p>
              </li>
          </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        bannerImg:[],
        json:[
          {
            title:'签到',
            img:'../static/img/1_03.jpg',
            to:'/qian'  
          },
           {
            title:'礼券',
            img:'../static/img/1_05.jpg'  ,
            to:'/gift'
          },
           {
            title:'砍价',
            img:'../static/img/1_07.jpg'  ,
            to:'/cut'
          },
           {
            title:'专栏',
            img:'../static/img/1_09.jpg'  ,
            to:'/zhuan'
          }
          
      ]
    };
  },

  mounted() {
    this.$axios.get("https://api.it120.cc/small4/banner/list").then(res => {
      console.log(res.data);
      this.bannerImg=res.data
    });
  },
  methods: {},
  components: {}
};
</script>
<style scoped lang='scss'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
div img{
    width: 100%;
}
#banner{
    position: relative;
}
.cy_bottom{
    display: flex;
    width: 100%;
    position: absolute;
    bottom:0;
    left: 0;
    height: 2.2rem;
    font-size: 0.4rem;
    background: #fff;
    border-radius:20% 20% 0 0;
    border-bottom:0.2rem solid #F5F5F5;
    justify-content: center;
    align-items: center;
}
.cy_bottom>li{
    flex:1;
    text-align: center
}
.cy_bottom>li>img{
    width: 0.9rem;
    height: 0.9rem;
    margin-bottom: 0.2rem;
}
</style>