<!-- 购物车 -->
<template>
  <div>
    <van-nav-bar title="我的购物车" left-arrow @click-left="goBack" />
    <!-- 购物车的列表组装件 -->
    <div class="item" v-for="(item,index) in cartList" :key="index">
      <van-checkbox v-model="item.checked" />
      <van-card class="card" :price="item.price" :title="item.name" :thumb="item.pic">
        <template #num>
          <van-stepper v-model="item.nums" />
        </template>
      </van-card>
    </div>
    <div class="cy_tijiao">
      <van-submit-bar :price="totalAmounts" button-text="提交订单" @submit="submitOrder">
        <van-checkbox v-model="check" @click="all">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "",
  mounted() {
    this.cartList = this.$store.state.cartList;
    console.log(this.checked);
  },
  data() {
    return {
      cartList: [],
      checked: true
    };
  },
  computed: {
    totalAmounts() {
      let amounts = 0;
      this.cartList.forEach(item => {
        if (item.checked == true) {
          amounts += item.nums * item.price;
        }
      });
      return amounts * 100;
    },
    ...mapState(['check']),
  },
  watch: {
    cartList: {
      handler(value) {
        this.$store.commit("addCart", value);
        this.$store.commit("countCar");
        let arr = value.filter(item => {
          return item.checked == true;
        });
        if (value.length == arr.length) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      },
      deep: true
    }
  },
  methods: {
     ...mapMutations(['shopAll']),
    goBack() {
      this.$router.go(-1);
    },
    //提交订单的数据
    submitOrder() {
      this.$toast.loading({
        duration: 3000, // 持续展示 toast
        message: "商品准备中",
        overlay: true
      });
      //获取订单的数据信息
      this.$store.commit("setOrderList");
      setTimeout(() => {
        this.$router.push("/confirm");
      }, 3000);
    },
    all() {
      this.shopAll();
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  .card {
    flex: 1;
  }
}
</style>
<style lang="scss">
.cy_tijiao {
  .van-submit-bar {
    bottom: 1.6rem;
    border-top: 0.3rem;
  }
}
</style>