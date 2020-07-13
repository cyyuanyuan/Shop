<!-- 首页 -->
<template>
    <div>
        <h3>我是首页</h3>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },

    mounted(){
         this.$axios.get("https://api.it120.cc/small4/banner/list").then(res => {
      console.log(res.data);
      this.list=res.data
    });
    },
    methods: {
        
    },
    components: {
        
    },
}

</script>
<style scoped>
    
</style>