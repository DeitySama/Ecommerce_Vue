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
  font-family: 'Inter', sans-serif;                                               
}
body{
  overflow-x: hidden;
}

a,  router-link{
  color: black;
  text-decoration: none !important;
  transition: 0.2s;
}
  router-link:hover,a:hover{
  color:rgba(79,70,229,1);
}

</style> 


