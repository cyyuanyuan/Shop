<!-- 专栏页面详情 -->
<template>
    <div>
        <div class="cy_title">
     <div class="cy_title">
      <van-nav-bar title="专栏 详情" left-arrow @click-left="onClickLeft" />
    </div>
      <div class="cy_main">
          <h3>{{ detail_list.title }}</h3>
          <img :src="detail_list.pic" alt="">
          <div v-html='detail_list.content' class="cy_m1">
          </div>
      </div>
    </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            aid:'',
            detail_list:[]
        }
    },

    mounted(){
        console.log(this.$route.params.id)
        this.aid=this.$route.params.id
        this.getAjax()
    },
    methods: {
        getAjax(){
            this.$axios({
                url:'https://api.it120.cc/small4/cms/news/detail',
                methods:'post',
                params:{
                    id:this.aid
                }
            }).then((res)=>{
                console.log(res)
                this.detail_list=res.data
            })
                
             
        },
         onClickLeft() {
      this.$router.go(-1);
    },
    },
    components: {
        
    },
}

</script>
<style scoped lang='scss'> 
    .cy_title {
  font-size: 0.6rem;
  .right {
    color: black;
  }
}
.cy_main{
    h3{
        text-align: center
    }
    img{
        width: 80%;
        height: 6rem;
        margin-top: 0.2rem;
        margin-left: 0.9rem;
    }
    .cy_m1{
font-size: 0.4rem;
margin-top: 0.2rem;
    }
}
</style>