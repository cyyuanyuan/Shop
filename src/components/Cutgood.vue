<!-- 砍价商品 -->
<template>
  <div id="product">
      <div>
        <img :src="good.pic" alt />
        <div>
          <p>{{ good.name }}</p>
          <p>仿羊绒内里，却有真实安全感</p>
          <ol>
            <li>
              <p>￥1</p>
              <p>低价</p>
            </li>
            <li>
              <p>￥429</p>
              <p>原价</p>
            </li>
            <li>
              <p>100件</p>
              <p>限量</p>
            </li>
          </ol>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {},
  components: {},
 props:['good']
};
</script>
<style scoped lang='scss'>
#product{
    width: 100%;
    border-bottom: 0.14rem solid #F5F5F5;       
            >div:nth-of-type(1){
                display: flex;
                padding: 0.1rem;
                border-bottom: 0.01rem solid #E9E9E9;
                >img{
                    width: 3.8rem;
                    height: 3.8rem;
                    border-radius: 0.06rem;
                    display: block;
                }
                >div{
                    margin-left: 0.3rem;
                    >p:nth-of-type(1){
                        font-size: .5rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    >p:nth-of-type(2){
                        font-size: .4rem;
                        color: #b2b2b2;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-top: 0.2rem;
                    }
                    >ol{
                        display: flex;
                        align-items: center;
                        li{
                            text-align: center;
                            margin-left: 0.6rem;
                            margin-top: 0.46rem;
                            >p:nth-of-type(1){
                                color: #B2B2B2;
                                font-size: 0.4rem;
                            }
                            >p:nth-of-type(2){
                                color: #B2B2B2;
                                font-size: 0.4rem;
                                margin-top: 0.06rem;
                            }
                        }
                        >li:nth-of-type(1){
                            margin-left: 0;
                            >p:nth-of-type(1){
                                color: #d00000;
                            font-weight: 700;
                            }
                            >p:nth-of-type(2){
                                color: #000000;
                            }
                        }
                    }
                }
            }
        }
    


</style>