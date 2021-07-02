<template>
  <div>
    <section class="hero">
      <Carousel/>
      <div class="searchForm">
      <Searchbar/>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from './Carousel'
import Searchbar from './Searchbar'


export default {
  components:{Carousel,Searchbar}
}
</script>

<style scoped>
.hero{
  width: 100%;
  position: relative;
}
.searchForm{
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  }

</style>