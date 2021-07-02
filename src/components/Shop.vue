<template>
  <section>



     <div class="searchBar">
        <searchbar></searchbar>
     </div>

    <div>
      <filters></filters>
    </div>

      <div class="products">
          <products v-bind:products="allProducts"></products>
      </div>
      <div>
          <pagination></pagination>
      </div>



  </section>
</template>

<script>
import Searchbar from './Header/Searchbar';
import Products from './Body/Products';
import Pagination from './Body/Pagination';
import Filter from './Body/Filter'
import { mapActions, mapGetters } from 'vuex';



export default {
    components:{
        'searchbar':Searchbar,
        'products' :Products,
        'pagination':Pagination,
        'filters': Filter

     },
     methods:{
       ...mapActions(["fetchProducts"])
     },
     computed:mapGetters(["allProducts","previousPage","nextPage"]),

  created(){
     this.fetchProducts();
  }
}
</script>

<style scoped>
section{
    margin-top: 50px;
}

.searchBar{
     padding: 40px;
}
.products{
    margin:  20px 0px;
}

</style>