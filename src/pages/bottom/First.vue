<!-- 首页 -->
<template>
  <div>
    <Banner></Banner>
    <Cut></Cut>
    <Middle></Middle>
    <Hot></Hot>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Cut from "@/components/Cut";
import Middle from "@/pages/Middle";
import Hot from "@/pages/Hot";
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {},
  components: {
    Banner,
    Cut,
    Middle,
    Hot
  }
};
</script>
<style scoped lang='scss'>
.cy_title {
  border-bottom: 2px solid #dddd;
  font-size: 0.6rem;
  .right {
    color: black;
  }
}
</style>