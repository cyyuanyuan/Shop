<!-- 发起砍价页面 -->
<template>
  <div>
    <div class="cy_mm">
      <div>
        <van-icon name="arrow-left" />
      </div>
      <div>
        <van-icon name="user-circle-o" size="60" />
        <p>我发现一件好货，来帮我砍到最低价吧~</p>
      </div>
      <div>
        <img src alt />
        <div>
          <p></p>
          <div>
            <p>
              低价
              <span>￥</span>
            </p>
            <p>原价￥NaN</p>
          </div>
        </div>
      </div>
      <p class="cy_p">当前价元，已砍<span style="font-size:0.4rem">false</span>元</p>
      <div>
          <van-button type="default" color='#b0a48c'>以当前价格购买</van-button> 
          <van-button type="default">邀请好友砍价</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {},
  components: {}
};
</script>
<style scoped lang='scss'>
.cy_mm {
  height: 8rem;
  width: 100%;
  background: linear-gradient(to right top, #e7d9bf, #b7a47c);
  > div:nth-of-type(1) {
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid white;
    position: fixed;
    top: 0.4rem;
    left: 0.3rem;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 0.5rem;
  }
  > div:nth-of-type(2) {
    padding-top: 1rem;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    color: azure;
    > p {
      margin-top: 0.3rem;
    }
  }
  >div:nth-of-type(3){
      width: 6.56rem;
    height: 2rem;
    border-radius: 0.1rem;
    background: #F6EDDE;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 0.18rem;
    -webkit-box-shadow: 0 0 10px 1px #a7a7a7;
    box-shadow: 0 0 10px 1px #a7a7a7;
    margin-bottom: 0.2rem;
  }
  >div:nth-of-type(4){
      margin-left: 1.6rem;
      margin-top: 0.3rem;
  }
}
.cy_p{
    text-align: center;
    color:white;
}
</style>