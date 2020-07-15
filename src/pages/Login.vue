<!-- 登录页面 -->
<template>
  <div>
    <div id="join">
      <div>
        <p>登录账号</p>
        <p>虾米 - 严选商城欢迎您</p>
        <p>
          <input autofocus="autofocus" type="tel" placeholder="手机号码"  v-model="phone" />
          <span style="display: none;">必填</span>
          <i class="el-icon-mobile-phone"></i>
        </p>
        <p>
          <input type="password" placeholder="密码"  v-model="password"/>
          <input type="text" placeholder="密码" style="display: none;" />
          <i class="van-icon van-icon-closed-eye">
            <!---->
          </i>
          <i class="van-icon van-icon-eye-o" style="display: none;">
            <!---->
          </i>
        </p>
        <div class="pay">
         <button @click="login">登录</button>       
        </div>
        <p class>忘记密码</p>
        <p v-jump='path'>还没有注册？ 立即注册</p>
      </div>
    </div>
  </div>
</template>

<script>
//引入本地存储的方法
import storage from "@/untils/storage.js";
export default {
  data() {
    return {
      path:'/zhuce',
       phone:"",
        password:""
    };
  },
 beforeRouteEnter (to, from, next) {
      //获取用户本地存储的token值，判断是否为空
      let data = storage.get("YanShop",true);
      ///已经登陆过，直接跳转到首页
      if(data != null){
          next("/");
      }else{//没有登陆，继续在当前页面停留
          next();
      }
  },
  mounted() {},
  methods: {
     login(){
         if (
        this.phone == "" ||
        this.password == "" ) {
        //提示错误信息
        this.$toast.fail("手机号,密码不能为空");
        return false;
      }
      //校验手机号的格式是否合法
      var reg = /^1[345678]\d{9}$/;
      if (!reg.test(this.phone)) {
        this.$toast.fail("请输入正确的手机号");
        return false;
      }
      this.Deng()
      },
      Deng(){
          this.$axios({
              url:'https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey',
              params:{
                  mobile:this.phone,
                  pwd:this.password
              }
          }).then(res=>{
              console.log(res)
              if(res.code!=0){
                  this.$toast.fail(res.msg)
                  return false
              }
              let user=new Object();
              user.uid=res.data.uid;
              user.token=res.data.token;
              user.account=this.phone;
               storage.set("YanShop",user,true);
              this.$toast.success('用户登录成功')
              this.$router.go(-1)
             

          })
      }
  },
  components: {}
};
</script>
<style scoped lang='scss'>
#join{
    padding: 0.4rem;
    height: 100%;
    box-sizing: border-box;
    >div:nth-of-type(1){
         box-sizing: border-box;
        width: 100%;
        padding: 0 1rem;
        height: 10rem;
        border: 0.02rem solid #F5F5F5;
        border-radius: 0.06rem;
        >p:nth-of-type(1){
            font-size: 0.4rem;
            color: #666;
            margin-top: 1rem;
        }
        >p:nth-of-type(2){
            font-size: 0.3rem;
            color: #909090;
            margin-top: 0.6rem;
        }
        >p:nth-of-type(3){
            width: 5.6rem;
            height: 0.8rem;
            border-radius: 0.08rem;
            background: #F5F5F5;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            position: relative;
            border: 1px solid #F5F5F5;//e12c1e
            input{
                margin-left: 0.3rem;
                width: 4.6rem;
                height: 0.6rem;
                border: none;
                outline: none;
                background: #F5F5F5;
                font-size: 0.3rem;
                color: #BFBFBF;
            }
            >span{
                font-size: 0.4rem;
                color: #e12c1e;
            }
            i{
                font-size: 0.3rem;
                color: #D1CFCE;
                // margin-left: 0.1rem;
                position: absolute;
                left: 5.1rem;
                top: 0.24rem;
            }
        }
        >p:nth-of-type(4){
            width: 5.6rem;
            height: 0.8rem;
            border-radius: 0.08rem;
            background: #F5F5F5;
            margin-top: 0.6rem;
            display: flex;
            align-items: center;
            position: relative;
            border: 1px solid #F5F5F5;//e12c1e
            input{
                margin-left: 0.2rem;
                width: 2.6rem;
                height: 0.4rem;
                border: none;
                outline: none;
                background: #F5F5F5;
                font-size: 0.3rem;
            }
            >span{
                font-size: 0.4rem;
                color: #e12c1e;
            }
            i{
                font-size: 0.3rem;
                color: #D1CFCE;
                // margin-left: 0.1rem;
                position: absolute;
                left: 5.1rem;
                top: 0.24rem;
            }
        }
        >p:nth-of-type(5){
            font-size: 0.3rem;
            color: #989898;
            width: 100%;
            text-align: center;
            margin-top: 0.36rem;
        }
        >p:nth-of-type(6){
            color: #549ff9;
            font-size: 0.3rem;
            width: 100%;
            text-align: center;
            margin-top: 0.2rem;
        }
        >p:nth-of-type(6):hover{
            text-decoration: underline;
        }
    }
}
.pay {
	height: 50px;
	width: 200px;
	// margin: auto;
    margin-left: 0.16rem;
    font-size: 0.4rem;
    margin-top: 0.8rem;
    button{
        background: linear-gradient(135deg, #e570e7 0%,#79f1fc 100%);
        height: 100%;
	width: 5.6rem;
    display: block;
    color: #fff;
    }
}




</style>