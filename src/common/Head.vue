<!--  -->
<template>
    <div>
         <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
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
    props:['title'],
    methods: {
         onClickLeft() {
      this.$router.go(-1);
    }
    },
    components: {
        
    },
}

</script>
<style scoped>
    
</style>