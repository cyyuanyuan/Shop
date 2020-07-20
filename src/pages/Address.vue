<!-- 我的地址 -->
<template>
  <div>
    <van-nav-bar title="我的地址" right-text="新建地址" left-arrow  @click-left="onClickLeft"  @click-right="onClickRight"/>
     <div class="main">
        <div class="item" v-for="(item,index) in addressList" :key="index">
            <div>
                <p>{{item.linkMan}} - {{item.mobile}}</p>
                <p>
                    {{item.cityStr}} {{item.address}}
                </p>
            </div>
            <div>
                <van-icon name="delete" size="20" @click="deleteAddress(item.id)"/>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import formData from "@/untils/formdata";
import storage from "@/untils/storage";
export default {
  data() {
    return {
      addressList:[]
    };
  },

  mounted() {
    this.getAddressList()
  },
  methods: {
    onClickRight(){
      this.$router.push('/newadd')
    },
      onClickLeft() {
      this.$router.go(-1);
    },
    //订单列表
     getAddressList(){
          let user = storage.get("YanShop",true);
          let data = formData.set({token:user.token});
          this.$axios.post("https://api.it120.cc/small4/user/shipping-address/list",data)
          .then(res=>{
              console.log(res);
              this.addressList = res.data;
          })
      },
      //删除列表
       deleteAddress(id){
          let user = storage.get("YanShop",true);
          let data = formData.set({
              id:id,
              token: user.token
          });
          this.$axios.post("https://api.it120.cc/small4/user/shipping-address/delete",data)
          .then(res=>{
            if(res.code == 0){
                this.addressList.forEach((item,index)=>{
                    if(item.id == id){
                        this.addressList.splice(index,1);
                    }
                })
                this.$toast.success("删除成功");
                //this.getAddressList();
            }
          })
      }
  },
  components: {}
};
</script>
<style scoped lang='scss'>
.item{
    width: 100%;
    border-bottom: #dddddd 1px solid;
    padding: .2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    div:nth-of-type(1){
        width: 80%;
        p{
            line-height: .66rem;
            text-indent: .2rem;
        }
    }
}
</style>