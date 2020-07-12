<!-- 分类 -->
<template>
  <div>
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" background="white" placeholder="回车搜索商品" />
    <van-tree-select
      height="155vw"
      :items="items"
      :main-active-index.sync="activeIndex"
      @click-nav="Leftclick"
    >
      <template #content>
        <div class="banner1">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in Imglist" :key="index">
              <img :src="item.to" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <ul class="cy_right1">
          <router-link :to="'/categood/'+item.id" tag="li" v-for="(item, index) in all_list" :key="index">
            <img :src="item.icon" alt />
            <p>{{ item.name }}</p>
          </router-link>
        </ul>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeIndex: 0,
      activeKey: 0,
      items: [{ text: "全部分类" }],
      cateId: [0],
      allList: [], //所有的分类数据
      Imglist: [
        {
          to: "/static/img/1.jpg"
        },
        {
          to: "/static/img/2.jpg"
        },
        {
          to: "/static/img/3.jpg"
        }
      ]
    };
  },

  mounted() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      this.$axios.get("/shop/goods/category/all").then(res => {
        this.allList = res.data;
        res.data.forEach(item => {
          if (item.pid == 0) {
            this.items.push({ text: item.name });
            this.cateId.push(item.id);
          }
        });
      });
    },
    //点击切换左侧
    Leftclick(index) {
      console.log(this.cateId[index]);
    }
  },
  components: {},
  computed: {
    all_list() {
      let arr = this.allList;
      if (this.activeIndex == 0) {
        return arr;
      }
      return arr.filter(item => {
        return item.pid == this.cateId[this.activeIndex];
      });
    }
  }
};
</script>
<style scoped lang='scss'>
.cy_main {
  display: flex;
  .cy_left {
    width: 25%;
  }
  .cy_right {
    width: 75%;
  }
}

.cy_right1 {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.6rem;
  li {
    width: 30%;
    text-align: center;
    margin-left: 0.2rem;
    > img {
      width: 3.2rem;
      height: 3.2rem;
    }
    > p {
      margin-top: 0.1rem;
      margin-bottom: 0.2rem;
      font-size: 0.3rem;
    }
  }
}
.banner1 {
  img {
    width: 8rem;
    height: 5rem;
  }
}
</style>
<style lang="scss" >
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>