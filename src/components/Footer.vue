<!-- 尾部 -->
<template>
 
    <ul id="foot">
        <li v-for="(item, index) in footer1" :key="index" v-jump='item.to' @click="dot(index)" :class="activeIndex==index?'red':''">
            <i :class="item.name"></i>
            <p>{{ item.title }}</p>
        </li>
    </ul>

</template>

<script>
export default {
  data() {
    return {
        activeIndex:0,
        footer1:[
            {
                name:'van-icon van-icon-wap-home-o',
                title:'首页',
                to:'/first'
            },
            {
                name:'van-icon van-icon-apps-o',
                title:'分类',
                to:'/space'
            },
            {
                name:'van-icon van-icon-shopping-cart-o',
                title:'购物车',
                to:'/car'
            },
            {
                name:'van-icon van-icon-user-o',
                title:'个人',
                to:'/person'
            },

        ]
    };
  },

  mounted() {},
  methods: {
      dot(index){
          this.activeIndex=index
      }
  },
  components: {}
};
</script>
<style scoped lang='scss'>
#foot{
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0.2rem;
  background: #FFFFFF;
  z-index: 10000;
  border-top: 0.01rem solid #E9E9E9;
  li{
    width: 25%;
    
    i{
      font-size: 0.6rem;
    }
    p:nth-of-type(1){
      font-size: 0.3rem;
      margin-top: 0.04rem;
    }
  }
  li:nth-of-type(3){
    position: relative;
    >p:nth-of-type(2){
      position: absolute;
      top: -0.1rem;
      right: 0.28rem;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background: crimson;
      color: white;
      text-align: center;
      line-height: 0.25rem;
      font-size: 0.14rem;
    }
  }
}
.van-icon{
    display: block;
}
.red{
    color:red;
}
</style>