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
export default {
  data() {
    return {
      path:'/zhuce',
       phone:"",
        password:""
    };
  },

  mounted() {},
  methods: {
     login(){
          this.$axios({
              url:"https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
              method:"post",
              params:{
                  mobile:this.phone,
                  pwd:this.password
              }
          }).then((msg)=>{                
                console.log(msg)
                if(msg.data.msg == "success"){
                    localStorage.setItem("token",msg.data.data.token);
                    this.$router.push("/person")

                }
          })
      }
  },
  components: {}
};
</script>
<style scoped lang='scss'>
#join{
    padding: 0.26rem;
    >div:nth-of-type(1){
        width: 3.8rem;
        padding: 0 0.44rem;
        height: 8rem;
        border: 0.02rem solid #F5F5F5;
        border-radius: 0.06rem;
        >p:nth-of-type(1){
            font-size: 0.3rem;
            color: #666;
            margin-top: 0.44rem;
        }
        >p:nth-of-type(2){
            font-size: 0.2rem;
            color: #909090;
            margin-top: 0.36rem;
        }
        >p:nth-of-type(3){
            width: 3.72rem;
            height: 0.66rem;
            border-radius: 0.08rem;
            background: #F5F5F5;
            margin-top: 0.44rem;
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
                font-size: 0.2rem;
                color: #BFBFBF;
            }
            >span{
                font-size: 0.18rem;
                color: #e12c1e;
            }
            i{
                font-size: 0.22rem;
                color: #D1CFCE;
                // margin-left: 0.1rem;
                position: absolute;
                left: 3.3rem;
                top: 0.24rem;
            }
        }
        >p:nth-of-type(4){
            width: 3.72rem;
            height: 0.66rem;
            border-radius: 0.08rem;
            background: #F5F5F5;
            margin-top: 0.24rem;
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
                font-size: 0.2rem;
            }
            >span{
                font-size: 0.18rem;
                color: #e12c1e;
            }
            i{
                font-size: 0.22rem;
                color: #D1CFCE;
                // margin-left: 0.1rem;
                position: absolute;
                left: 3.3rem;
                top: 0.24rem;
            }
        }
        >p:nth-of-type(5){
            font-size: 0.16rem;
            color: #989898;
            width: 100%;
            text-align: center;
            margin-top: 0.36rem;
        }
        >p:nth-of-type(6){
            color: #549ff9;
            font-size: 0.2rem;
            width: 100%;
            text-align: center;
            margin-top: 0.38rem;
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
    margin-left: 0.46rem;
    font-size: 0.2rem;
    margin-top: 0.3rem;
    button{
        background: linear-gradient(135deg, #e570e7 0%,#79f1fc 100%);
        height: 100%;
	width: 2.9rem;
    display: block;
    color: #fff;
    }
}




</style>