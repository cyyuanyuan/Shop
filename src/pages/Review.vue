<!-- 我的评价 -->
<template>
    <div>
         <van-nav-bar title="我的评价" left-arrow @click-left="goBack" />
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
        goBack(){
            this.$router.go(-1)
        }
    },
    components: {
        
    },
}

</script>
<style scoped>
    
</style>