<template>
  <div id="app">    
    <router-view/>
     <Loading v-show="this.$store.state.loading"> </Loading>   
  </div>
</template>

<script>
import Loading from '@/common/Loading'
export default {
  name: 'App',
   components: {
    Loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
