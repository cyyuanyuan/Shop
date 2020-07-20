<!-- 详情组件 -->
<template>
  <div class="cy-box">
       <div class="cy_font">
      <van-icon name="arrow-left" size="25" @click="dot" />
    </div>
    <!-- 轮播图区域 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in list.pics" :key="index">
          <img :src="item.pic" alt class="banner-img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品介绍 -->
      <p style="font-size:0.4rem">{{ list.basicInfo.name}}</p>
    <div class="cy_two">
      <p>
        低价
        <span>￥{{list.basicInfo.minPrice}}</span>
      </p>
      <p>原价￥{{ list.basicInfo.originalPrice}}</p>
      <p>库存{{ list.basicInfo.stores }}</p>
    </div>
    <div class="cy_line"></div>
    <!-- 选项卡 -->
      <div>
      <van-tabs v-model="active">
        <van-tab title="商品介绍">
          <div v-html="list.content" class="cy_content"></div>
        </van-tab>
        <van-tab title="商品评价">
          <ul id="renqi">
            <li v-for="(item, index) in json" :key="index">
              <i class="van-icon van-icon-user-circle-o">
              </i>
              <div>
                <div>
                  <p>{{ item.user.nick }}</p>
                  <p>{{item.goods.goodReputationStr}}</p>
                </div>
                <p>{{item.goods.goodReputationRemark}}</p>
                <div>
                  <p>{{ item.user.dateLogin }}</p>
                  <p>
                    选择规格:
                    <span>{{ item.goods.property }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
    <p class="kan" v-jump='path'>立即发起砍价，最低可砍到1元</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
         active: 2,
         path:'/cutprice'
    };
  },

  mounted() {},
  methods: {
       dot() {
      this.$router.go(-1);
    },
  },
  components: {},
  props:['list','json']
};
</script>
<style scoped lang='scss'>
.cy_two {
  display: flex;
  margin: 0.2rem 0.2rem;
  font-size: 0.3rem;
  > p {
    margin-right: 0.8rem;
  }
  > p:nth-of-type(1) {
    color: red;
  }
  > p:nth-of-type(2) {
    color: gray;
  }
  > p:nth-of-type(3) {
    color: gray;
    margin-left: 2rem;
  }
}
.cy_line {
  width: 100%;
  height: 0.3rem;
  background: #ddd;
}
.banner {
  width: 100%;
  img {
    width: 100%;
    height: 9.2rem;
    display: block;
    margin: 0 auto;
  }
}
#renqi {
  width: 100%;
  > li {
    height: 2.54rem;
    padding: 0 0.3rem;
    border-bottom: 0.03rem solid #e9e9e9;
    display: flex;
    > i {
      font-size: 0.9rem;
      margin-top: 0.3rem;
    }
    > div {
      margin-left: 0.2rem;
      > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        margin-top: 0.3rem;
        p:nth-of-type(1) {
          font-size: 0.3rem;
        }
        p:nth-of-type(2) {
          width: 0.6rem;
          height: 0.4rem;
          border-radius: 0.06rem;
          color: white;
          text-align: center;
          line-height: 0.4rem;
          background: #b7282e;
          font-size: 0.3rem;
          margin-left: 0.3rem;
        }
      }
      > p:nth-of-type(1) {
        font-size: 0.3rem;
        margin-top: 0.1rem;
      }
      > div:nth-of-type(2) {
        display: flex;
        margin-top: 0.2rem;
        > p {
          font-size: 0.3rem;
          color: #b2b2b2;
        }
        > p:nth-of-type(2) {
          margin-left: 0.3rem;
        }
      }
    }
  }
}
.cy_font {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: white;
  top: 0.4rem;
  left: 0.2rem;
  line-height: 0.8rem;
  text-align: center;
  position: fixed;
  z-index: 1000;
}
.kan{
    width: 100%;
    height: 0.8rem;
    background: #B7282E;
    font-size: 0.2rem;
    color: white;
    text-align: center;
    line-height: 0.8rem;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>