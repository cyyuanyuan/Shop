<!-- 人气推荐商品 -->
<template>
    <div class="cy_m">
        <img :src="json.pic" alt />
          <p>{{ json.name }}</p>
          <p>{{ json.characteristic }}</p>
          <p>￥{{ json.originalPrice }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },

    mounted(){
        
    },
    methods: {
        
    },
    components: {
        
    },
    props:['json']
}

</script>
<style scoped lang='scss'>
    .cy_m{
         >img{
                width: 5.5rem;
                height: 7rem;
                display: block;
            }
            >p:nth-of-type(1){
                font-size: 0.4rem;
                color: #000000;
                width: 2rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            >p:nth-of-type(2){
                font-size: 0.3rem;
                color: #B2B2B2;
                width: 2rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                margin-top: 0.3rem;
            }
            >p:nth-of-type(3){
                font-size: 0.26rem;
                color: #D00000;
                margin-top: 0.3rem;
            }
    }
    
</style>