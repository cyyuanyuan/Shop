<!--  -->
<template>
  <div>
    <!-- <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft" /> -->
    <Head :title="'订单详情'"></Head>
    <div v-for="(item, index) in obj" :key="index">
      <van-card
        :num="item.number"
        :desc="item.property"
        :thumb="item.pic"
        :title="item.goodsName"
        :price="item.amount"
      >
        <template #footer>
          <van-button size="mini" >确认收货</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import Head from '@/common/Head.vue'
export default {
  data() {
    return {
      obj: []
    };
  },

  mounted() {
    this.obj = this.$route.query.item;
    console.log(this.obj);
    //  this.list.push(obj)
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {
      Head
  }
};
</script>
<style scoped>
</style>