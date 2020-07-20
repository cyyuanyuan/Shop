<!--  -->
<template>
  <div class="cy_box">
      <div class="cy_main" v-for="(item, index) in goodsList" :key="index">
          <img :src="item.pic" alt="">
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },

  mounted() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          console.log(res);
          this.goodsList = res.data;
        });
    },
    
  },
  components: {}
};
</script>
<style scoped>
</style>