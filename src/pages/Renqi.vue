<!-- 人气详情 -->
<template>
  <div class="cy_box">
    <div class="cy_font">
      <van-icon name="arrow-left" size="25" @click="dot" />
    </div>
    <div class="cy_img">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in DetailList.pics" :key="index">
          <img :src="item.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <p>{{ DetailList.basicInfo.name}}</p>
    <div class="cy_two">
      <p>
        低价
        <span>￥{{ DetailList.basicInfo.minPrice}}</span>
      </p>
      <p>原价￥{{ DetailList.basicInfo.originalPrice}}</p>
      <p>库存{{ DetailList.basicInfo.stores }}</p>
    </div>
    <div class="cy_line"></div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="商品介绍">
          <div v-html="DetailList.content"></div>
        </van-tab>
        <van-tab title="商品评价">
          <ul id="renqi">
            <li v-for="(item, index) in list1" :key="index">
              <i class="van-icon van-icon-user-circle-o">
                <!---->
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
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon
        icon="cart-o"
        @click="gotCar"
        text="购物车"
        :badge="this.$store.state.nums"
      />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="add" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      @add-cart="addCar"
      :custom-stepper-config="customStepperConfig"
       @sku-selected="selectedSku"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      DetailList: [],
      active: 2,
      list1: [],
      name: "",
      show: false,
      goodsInfo: [],
      nums: 1,
       propertyIds: "",//选中商品的sku的数据
      cid: 0,
      properties: [],
      //sku的商品规格
      sku: {
        // sku规格类目,颜色，尺寸
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "c1",
            v: [
              { id: 1, name: "白色" },
              { id: 2, name: "红色" },
              { id: 3, name: "蓝色" }
            ]
          }
        ],
        list: [
          { id: 1000, c1: 1, price: 2000, stock_num: 12 },
          { id: 1000, c1: 2, price: 30000, stock_num: 15 },
          { id: 1000, c1: 3, price: 50000, stock_num: 18 }
        ],
        price: "150.00", // 默认价格（单位元）
        stock_num: 227 // 商品总库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: ""
      },
      //自定义步进器
      customStepperConfig: {
        handleStepperChange: currentValue => {
          //点击步进器的值赋给nums
          this.nums = currentValue;
          console.log(currentValue);
        }
      }
    };
  },

  mounted() {
    this.cid = this.$route.query.id;
    this.$axios.get("/shop/goods/detail?id=" + this.cid).then(res => {
      console.log(res);
      this.DetailList = res.data;
      //设置sku的信息
      this.setSku(res.data.properties);
      this.goods.picture = this.DetailList.pics[0].pic;
      //console.log(res.data.properties);
      //设置商品的详细信息
      this.goodsInfo = res.data.basicInfo;
      this.properties = res.data.properties;
      console.log(this.goodsInfo);
    });
    this.$axios.get("/shop/goods/reputation?goodsId=" + this.cid).then(res => {
      //console.log(res);
      this.list1 = res.data;
    });
    //计算商品的总数量
    this.$store.commit("countCar");
  },
  methods: {
    //返回按钮
    dot() {
      this.$router.go(-1);
    },
    // 点击计入购物车弹框显示
    add() {
      this.show = true;
    },
    
    // 渲染加入购物车里的规格
    setSku(property) {
      if (property == undefined) {
        return false;
      }
      let tree = [];
      let list = [];
      property.forEach(item => {
        let object = new Object();
        object.k = item.name;
        object.k_s = `c_${item.id}`;
        object.v = item.childsCurGoods;
        tree.push(object);
      });
  //组装sku组合的数据
      tree.forEach(item => {
        item.v.forEach(element => {
          console.log(element);
          let obj = new Object();
          obj.id = item.k_s.split("_")[1]; //截取数据，提取sku的ID信息
          obj[item.k_s] = element.id;
          obj.price = 1000;
          obj.stock_num = 120;
          list.push(obj);
        });
      });
      this.sku.tree = tree;
      this.sku.list = list;
    },
    gotCar() {
      this.$router.push("/car");
    },
     //切换规格的时候触发
    selectedSku(data){
      this.propertyIds = `${data.skuValue.propertyId}:${data.skuValue.id}`;
    },
    //点击加入购物车
    addCar() {
      let data = localStorage.getItem("YanShop");
      //判断用户是否登录
      if (data == null) {
        this.$toast.faile("请先登录");
        this.$router.push("/login");
        return false;
      }

      //用户已经登陆的信息,添加购物车信息
      let cartList = this.$store.state.cartList; //购物车的列表数据
      let index = cartList.findIndex(item => {
        return item.goods_id == this.cid;
      });
      if (index == -1) {
        //添加购物车对象信息
        let obj = new Object();
        obj.good_id = this.cid;
        obj.name = this.goodsInfo.name;
        obj.price = this.goodsInfo.originalPrice;
        obj.nums = this.nums;
        obj.properties = this.propertyIds;
        obj.pic = this.goodsInfo.pic;
        // obj.miaoshu=this.properties.name;
        obj.checked = true;
        cartList.push(obj);
        this.show = false;
      } else {
        cartList[index].nums += this.nums;
      }
      this.$store.commit("addCart", cartList);
      this.$store.commit("countCar");
      this.$toast.success("加入购物车成功");
      
    },
    
  },
  components: {}
};
</script>
<style scoped lang='scss'>
.cy_box {
  position: relative;
  > .cy_img {
    img {
      width: 100%;
      height: 8rem;
    }
  }

  > p:nth-of-type(1) {
    font-size: 0.4rem;
    margin: 0.2rem 0.2rem;
  }
}
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
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
</style>