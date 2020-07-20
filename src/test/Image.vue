<!--  -->
<template>
  <div>
    <header>
      <h3>图片懒加载</h3>
    </header>
    <ul>
      <li v-for="(item, index) in goodsList" :key="index">
        <img src="/static/img/3.jpg"  :data_src='item.pic' alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.getGoods();
   
    window.addEventListener("scroll",this.lazyload);
    
  },
  data() {
    return {
      goodsList: []
    };
  },
  computed: {
    
  },
  methods: {
    getGoods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          console.log(res);
          this.goodsList = res.data;

          this.$nextTick(()=>{
            this.lazyload();
          })
        });
    },

    lazyload(){
      //定义一个兼容性的写法
      let html = document.documentElement || document.body;
      //获取所有的图片信息
      let imgs = document.querySelectorAll("img");
      console.log(imgs);

      for(var i=0;i<imgs.length;i++){

        //如果页面的滚动高度+可视区域窗口>图片距离顶端的高度
        //html.scrollTop + html.clientHeight > imgs[i].offsetTop
        if(html.scrollTop + html.clientHeight > imgs[i].offsetTop){
          this.$toast.loading("努力加载中，请稍后");
          imgs[i].src  = imgs[i].getAttribute("data_src");
          // setTimeout(()=>{
            
          // },2000);
        }

      }
    },
  }
};
</script>
<style scoped lang='scss'>
header {
  height: 0.8rem;
  line-height: 0.8rem;
  width: 100%;
  text-align: center;
  background: pink;
}
ul > li {
  width: 100%;
  height: 3.8rem;
  margin: 0.1rem 0;
  img {
    width: 100%;
    height: 3.8rem;
  }
}
</style>