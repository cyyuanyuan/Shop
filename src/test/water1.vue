<!-- 瀑布流布局 -->
<template>
  <div class="box">
    <div class="item" v-for="(item,index) in goodsList" :key="index">
      <img :src="item.pic" />
      <p>{{index+1}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.getGoods();

    document.addEventListener("scroll", this.lazyload1);
  },
  data() {
    return {
      goodsList: []
    };
  },
  computed: {},
  methods: {
    getGoods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          console.log(res);
          this.goodsList = res.data;
          this.$nextTick(() => {
            this.waterFall();
            this.waterfall();
          });
        });
    },

waterFall() {
    waterfall(){
      /**
       * 1. 获取所有的元素，计算每一行的列数
       * 2. 循环元素，先拍出来第一行
       */
      let items = document.querySelectorAll(".item");
      //屏幕的宽度
      let bodyWidth = document.documentElement.clientWidth;
      // 每个元素的宽度
      let itemWidth = items[0].clientWidth;
      //每一行要显示的列数
      let columns = parseInt(bodyWidth/itemWidth);

      let bWidth = document.documentElement.clientWidth;
      let iWidth = items[0].clientWidth;
      let columnArr = [];//存储每一列的高度值
      let space = 10;

      let columns = parseInt(bWidth / iWidth);
      console.log(columns);

      var itemHeight = [];
      for (var i = 0; i < items.length; i++) {
        if (i < columns) {
      for(let i=0; i<items.length;i++){
        //第一行图片的操作
        if(i<columns){
          //第一行图片的位置
          items[i].style.top = "0px";
          items[i].style.left = (iWidth + 10) * i + "px";
          itemHeight.push(items[i].clientHeight);
        } else {
          var minIndex = 0;
          var minHeight = itemHeight[0];
          items[i].style.left = (itemWidth+space)*i+"px";
          //保存第一行每一列的高度
          columnArr.push(items[i].clientHeight);
          console.log(columnArr);
        }else{
          let minIndex = 0;//找出每一列最小值的下标
          let minHeight = columnArr[0];//找出来最小高度值

          for (var m = 0; m < itemHeight.length; m++) {
            if (itemHeight[m] < minHeight) {
              minHeight = itemHeight[m];
          for(var m=0;m<columnArr.length;m++){
            if(columnArr[m] < minHeight){
              minHeight = columnArr[m];
              minIndex = m;
            }
          }


          items[i].style.top = minHeight + 10 + "px";
          items[i].style.left =items[minIndex].offsetLeft + "px";
          itemHeight[minIndex] = minHeight + items[i].clientHeight+10;
          items[i].style.left = items[minIndex].offsetLeft+"px";
          items[i].style.top = minHeight+space+"px";
          columnArr[minIndex] = minHeight + items[i].clientHeight+space;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
.box{
  width: 100%;
  position: relative;
  .item {
    width: 46%;
    position: absolute;
    img {
  .item{
    width: 30%;
    position:absolute;
    img{
      width: 100%;
      display: block;
      box-shadow: 1px 4px 6px rgba($color: #000000, $alpha: .6);
      box-shadow: 1px 5px 7px rgba($color: #000000, $alpha: .6);
    }
    p{
      position: absolute;
      top:1rem;
      font-size: .6rem;
      left: 1.5rem;
      color: #FF0000;
      
    }
  }
  .item:hover{
    transform: scale(1.03);
  }
}
</style>