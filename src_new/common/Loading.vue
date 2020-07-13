<!--  -->
<template>
  <div>
    <van-overlay :show="true" >
      <div class="wrapper" >
        <van-loading size="54px" vertical>加载中...</van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
      console.log(this.$store.state.num)
  },
  methods: {},
  components: {}
};
</script>
<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>