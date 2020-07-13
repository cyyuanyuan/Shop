<!-- 搜索页面 -->
<template>
  <div>
    <header>
      <input
        type="text"
        placeholder="请输入关键字"
        @blur="addHistroy()"
        v-model="keywords"
        @focus="isShow=true"
      />
      <span>取消</span>
    </header>
    <ol v-show="isShow" class="cy_list">
      <li v-for="(item,index) in  searchList" :key="index">
        <img :src="item.pic" alt />
        <p>{{item.title}}</p>
        <p>
          <span>￥{{item.price}}</span>
          <s>￥{{item.old_price}}</s>
        </p>
      </li>
    </ol>

    <div class="cy_box" v-show="!isShow">
      <p>
        <span>历史记录</span>
        <van-icon name="delete"  @click="cleHistroy()"/>
      </p>
      <!-- 历史记录 -->
      <ul>
        <li v-for="(item,index) in histroyList" :key="index">{{item}}</li>
      </ul>
      <div class="cy_box1"></div>
      <p>
        <span>热门搜索</span>
      </p>
      <ul>
        <li>飞行员夹克</li>
        <li>牛仔下身</li>
        <li>新品上新</li>
        <li>飞行员夹克</li>
        <li>牛仔下身</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      keywords: "",
      histroyList: [],
      list1: []
    };
  },

  mounted() {
    this.getHistroy();
    this.$axios.get("/static/list.json").then(res => {
      this.list1 = res.result;
    });
  },
  methods: {
    //获取历史记录列表
    getHistroy() {
      let data = localStorage.getItem("test_histroy");
      if (data == null) {
        this.histroyList = [];
      } else {
        this.histroyList = JSON.parse(data);
      }
    },
    //添加历史记录
    addHistroy() {
      this.isShow = false;
      //如果文本框为空，不添加
      if (this.keywords <= 0) {
        return false;
      }
      this.histroyList.unshift(this.keywords);
      //超过六条执行尾部删除
      if (this.histroyList.length > 6) {
        this.histroyList.pop();
      }
      localStorage.setItem("test_histroy", JSON.stringify(this.histroyList));

      this.keywords = "";
    },
    //删除历史记录
    cleHistroy() {
      localStorage.removeItem("test_histroy"); //删除历史记录
      this.getHistroy();
    }
  },
  components: {},
  computed: {
    //计算属性进行模糊搜索
    searchList() {
      if (this.keywords == "") {
        return [];
      }
      this.isShow = true;
      //进行模糊搜索
      return this.list1.filter(item => {
        return item.title.indexOf(this.keywords) > -1;
      });
    }
  }
};
</script>
<style scoped lang='scss'>
header {
  font-size: 0.4rem;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 70%;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #f2f2f2;
    border: none;
    padding-left: 0.2rem;
    box-sizing: border-box;
    color: #aaaaaa;
  }
}
.cy_box {
  font-size: 0.4rem;
  border-top: 1px solid #f5f5f5;
  p {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.9rem;
    font-weight: 800;
    box-sizing: border-box;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.2rem;
    box-sizing: border-box;
    li {
      padding: 0.1rem;
      background: #f5f5f5;
      color: #9d9d9d;
      margin: 0.1rem;
      border-radius: 4px;
    }
  }
  .cy_box1 {
    font-size: 0.2rem;
    height: 0.2rem;
    background: #f3f3f3;
  }
}
.cy_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.3rem;
}
.cy_list >li {
  width: 46%;
  height: 4rem;
  margin-left: 4px;
  margin-top: 0.1rem;
  text-align: center;
  border: 0.01rem solid #ccc;
}
.cy_list li img {
  width: 100%;
  height: 2.8rem;
}
</style>