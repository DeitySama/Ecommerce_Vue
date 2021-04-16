<template>
  <div>
      <navbar></navbar>
      <router-view></router-view>
      <fter></fter>
    
  </div>
</template>

<script>
import Navbar from './components/Header/Navbar/Navbar'
import Fter from './components/Footer/Fter'





export default {
  components:{
    'navbar':Navbar, 
    'fter':Fter
    },
  data(){
    return{
      title:'Commerce'
    }
  }
}
</script>

<style>
*{
   font-family: 'Roboto', sans-serif;                                               
}
body{
  overflow-x: hidden;
}
</style>


