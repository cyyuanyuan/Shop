<!-- 新建地址 -->
<template>
  <div>
    <van-nav-bar title="新增地址" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.linkMan"
        name="联系人"
        label="联系人"
        placeholder="联系人"
        :rules="[{ required: true, message: '姓名' }]"
      />
      <van-field
        v-model="form.mobile"
        type="手机号码"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '11位手机号' }]"
      />
      <van-field
        v-model="form.area"
        name="选择地区"
        label="选择地区"
        placeholder="选择地区"
        @click="areaShow=true"
        :rules="[{ required: true, message: ' ' }]"
      />
      <!-- 城市列表，底部弹出层 -->
      <van-popup v-model="areaShow" position="bottom">
        <van-area
          title="选择城市"
          :area-list="aresList"
          @cancel="areaShow=false"
          @confirm="selectedArea"
        />
      </van-popup>
      <van-field
        v-model="form.address"
        name="详细地址"
        label="详细地址"
        placeholder="街道门派信息"
        :rules="[{ required: true, message: '街道门派信息' }]"
      />
      <van-field
        v-model="form.code"
        name="邮政编码"
        label="邮政编码"
        placeholder="邮政编码"
        :rules="[{ required: true, message: '邮政编码' }]"
      />
      <div style="margin: 20px;">
        <van-button type="primary" block @click="addressAdd">保存</van-button>
      </div>
      <div style="margin: 20px;">
        <van-button type="primary" block color="#4bb0ff">从微信读取</van-button>
      </div>
      <div style="margin: 20px;">
        <van-button type="primary" block color="#ddd">取消</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import AreaList from "@/untils/area";
import formData from "@/untils/formdata";
import storage from "@/untils/storage";
export default {
  data() {
    return {
      form: {
        linkMan: "",
        mobile: "",
        address: "",
        cityId: 0,
        provinceId: 0,
        code: 0,
        area: "",
        province: "",
        city: ""
      },
      area:'',
      areaShow: true,
      aresList: AreaList //城市列表数据
    };
  },

  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    addressAdd() {
      let user = storage.get("YanShop", true);
      this.form.token = user.token;
      let data = formData.set(this.form);
      this.$axios
        .post("https://api.it120.cc/small4/user/shipping-address/add", data)
        .then(res => {
          console.log(res);
          if (res.code == 0) {
            this.$toast.success("添加地址成功");
            this.$router.push("/address");
          } else {
            this.$toast.fail(res.msg);
          }
        });
    },
    //选择城市函数
    selectedArea(arr) {
      this.areaShow = false;
      //去除数组中的name值
      let tmp = arr.map(item => {
        console.log(item)
        return item.name;
      });
      //处理省份和市
      this.form.province = tmp[0];
      this.form.city = tmp[1];
      //数组转换程字符串
      this.form.area = tmp.join(" ");
    }
  },
  components: {}
};
</script>
<style scoped>
</style>