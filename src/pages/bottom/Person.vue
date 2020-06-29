<!-- 个人页面 -->
<template>
  <div>
    <div class="cy_first">
      <div>
        <img src="/static/img/9.png" alt />
        <i class="van-icon van-icon-clear van-uploader__preview-delete"></i>
      </div>
      <div class="cy_login">
        <p v-jump='path'>立即登录</p>
        <p>积分: 0</p>
      </div>
    </div>
    <div>
      <van-notice-bar text="新上线更稳定的付费快递查询接口" left-icon="volume-o" :scrollable="true"/>
    </div>
    <div>
      <div class="cy_size">
        <i style="font-size:0.3rem" class="van-icon van-icon-notes-o">
          <!---->
        </i>
        <p>我的订单</p>
        <i class="van-icon van-icon-arrow">
          <!---->
        </i>
      </div>
      <div class="cy_four">
        <div>
          <i class="van-icon van-icon-paid">
            <!---->
          </i>
          <p>待付款</p>
        </div>
        <div>
          <i class="van-icon van-icon-send-gift-o">
            <!---->
          </i>
          <p>待发货</p>
        </div>
        <div>
          <i class="van-icon van-icon-logistics">
            <!---->
          </i>
          <p>待收货</p>
        </div>
        <div>
          <i class="van-icon van-icon-comment-o">
            <!---->
          </i>
          <p>待评价</p>
        </div>
      </div>
      <div id="user">
        <div>
          <i class="van-icon van-icon-gold-coin-o" style="color: #F86650;">
            <!---->
          </i>
          <p>我的余额</p>
        </div>
        <div>
          <i class="van-icon van-icon-edit" style="color: #F86650;">
            <!---->
          </i>
          <p>我的砍价</p>
        </div>
        <div>
          <i class="van-icon van-icon-coupon-o" style=" color: #EDB449;">
            <!---->
          </i>
          <p>我的礼券</p>
        </div>
        <div>
          <i class="van-icon van-icon-star-o" style=" color: #EDB449;">
            <!---->
          </i>
          <p>我的收藏</p>
        </div>
        <div>
          <van-icon name="location-o" style="color: #5A9FEC;" />
          <p>我的地址</p>
        </div>
        <div>
          <i class="van-icon van-icon-service-o" style="color: #5A9FEC;">
            <!---->
          </i>
          <p>联系客服</p>
        </div>
      </div>
    </div>
    <div class="cy_font">The work of liu tao</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path:'/login'
    };
  },

  mounted() {},
  methods: {},
  components: {}
};
</script>
<style scoped lang='scss'>
.cy_first {
  width: 100%;
  height: 2.3rem;
  display: block;
  background: #c1b18f;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  display: flex;
}
.cy_first > div:nth-of-type(1) {
  display: flex;
}
.cy_login > p:nth-of-type(1) {
  font-size: 0.3rem;
  color: white;
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
}
.cy_login > p:nth-of-type(2) {
  width: 1.24rem;
  padding: 0.1rem;
  color: #fff;
  background: #b3a078;
  border-radius: 0.0694444444rem;
  position: absolute;
  left: 1.5rem;
  top: 1.1rem;
  opacity: 0.8;
  font-size: 0.14rem;
}
div > img {
  width: 1.06rem !important;
  height: 1.06rem !important;
  border-radius: 50% !important;
}
#user {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
}
#user > div {
  width: 33%;
  height: 1.6rem;
  text-align: center;
  font-size: 0.6rem;
  padding: 0.2rem 0;
}
#user p {
  font-size: 0.2rem;
}
.cy_font {
  height: 0.6rem;
  background: #f5f5f5;
  text-align: center;
  line-height: 0.6rem;
  color: #6d6d6d;
  font-size: 0.3rem;
}
.cy_size {
  font-size: 0.4rem;
  height: 1.4rem;
  display: flex;
  border-bottom: 0.3rem solid #f5f5f5;
  justify-content: space-around;
  align-items: center;
  
  background: #ffffff;
}
.cy_four{
  height: 1.8rem;
        display: flex;
        border-bottom: 0.16rem solid #F5F5F5;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        background: #FFFFFF;
         >div{
           margin-top:-0.2rem;
            p{
                font-size: 0.3rem;
                color: #6D6D6D;
                margin-top: 0.2rem;
            }
        }
        i{
            font-size: 0.4rem;
            color: #6D6D6D;
           
        }
}
</style>