<template>
  <div>
      <hero></hero>
      <categories></categories>
      <discovery></discovery>

    
  </div>
</template>

<script>

import Hero  from './Header/Hero'
import Categories from './Header/Categories'
import Discovery from './Header/Discovery'



export default {
  components:{
    'hero':Hero, 
    'categories':Categories,
    'discovery':Discovery,
},
  data(){
    return{
      title:'Commerce'
    }
  }
}
</script>

<style>
body{
  overflow-x: hidden;
}
</style>


