<!-- 首页 -->
<template>
  <div>
    <div class="cy_img">
      <img src="/static/img/mm_01.jpg" alt />
    </div>
    <ul class="cy_ul">
      <li>菜单</li>
      <li>评价</li>
      <li>商家</li>
    </ul>
    <van-tree-select
      height="80vw"
      :items="items"
      :main-active-index.sync="active"
      @click-nav="Leftclick"
    >
      <template #content>
        <ul class="cy_ul2">
          <li v-for="(item, index) in  $store.state.cartlist" :key="index" v-show="item.cate==cate">
            <div>
              <img :src="item.pic" alt="">
            </div>
            <div>
              <p>{{ item.name }}</p>
              <p>{{ item.sou }}</p>
              <p>￥{{ item.price }}</p>
              <p></p>
            </div>
            <div>
              <van-icon name="plus"  @click="add(item)" />
            </div>
          </li>
        </ul>
      </template>
    </van-tree-select>
    <van-goods-action>
  <van-goods-action-button color="#be99ff" type="warning" icon="cart-o" />
  <van-goods-action-button color="#7232dd" type="danger" text="去结算" />
</van-goods-action>
  </div>
</template>

<script>
import { mapActions,mapState,mapMutations,mapGetters } from 'vuex'
export default {
  data() {
    return {
      active: 0,
      cate:'',
      items: [
        { text: "热卖" },
        { text: "折扣" },
        { text: "特价优惠" },
        { text: "酱油酱辣" }
      ]
    };
  },

  mounted() {
    console.log(this.$store.state.cartlist)
    this.$axios.get("/static/json/good.json").then(res => {
     this.$store.commit('changeList',res)
    });
  },
  methods: {
    //点击切换左侧
    Leftclick(index) {
    if(index==0){
      this.cate='hot'
    }else if(index==1){
      this.cate='sale'
    }
    },
    // add(item){
    //  console.log(item)
    // }
  },
  components: {},
  computed: {
   ...mapMutations(['add']),
  }
};
</script>
<style scoped lang='scss'>
.cy_img {
  width: 100%;
  height: 3.6rem;
  img {
    width: 100%;
    height: 3.6rem;
  }
}
.cy_ul {
  display: flex;
  li {
    width: 33%;
    padding: 0.2rem 0.1rem;
    text-align: center;
  }
}
.cy_ul2>li{
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.1rem;
  >div{
    >img{
      width: 1rem;
      height: 1rem;;
    }
  }
}
</style>