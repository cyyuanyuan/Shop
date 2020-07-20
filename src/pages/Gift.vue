<!-- 我的礼券 -->
<template>
  <div>
    <van-nav-bar title="我的礼券" left-arrow @click-left="onClickLeft" />
    <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>
<style scoped>
</style>