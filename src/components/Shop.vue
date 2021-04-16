<template>
  <section>
      <div class="searchBar">
        <searchbar></searchbar>
      </div>
      <div class="products">
          <products v-bind:products="products"></products>
      </div>
      <div>
          <pagination v-bind:next="next" v-bind:previous="previous" v-on:nextPage="nextP($event)" v-on:prevPage="nextP($event)"></pagination>
      </div>
  </section>
</template>

<script>
import Searchbar from './Header/Searchbar';
import Products from './Body/Products';
import Pagination from './Body/Pagination'
import axios from 'axios'


export default {
    data(){
        return {
            products:[],
            next:0,
            previous:0
        }
    },
    components:{
        'searchbar':Searchbar,
        'products' :Products,
        'pagination':Pagination
     },
     methods:{
         nextP:function(nextpn){
         axios.get(`https://palala.herokuapp.com/api/v1/products?page=${nextpn}`).then(res=>{
         this.products = res.data.item;
        //  this.next = res.data.pagination.next.page;
         if(!res.data.pagination.previous){
             this.previous = 0;
         }
         else{
             this.previous = res.data.pagination.previous.page;
         }
      });
         }
     },
  created(){
      axios.get(`https://palala.herokuapp.com/api/v1/products?page=${this.page}`).then(res=>{
         this.products = res.data.item;
         this.next = res.data.pagination.next.page;
         if(!res.data.pagination.previous){
             this.previous = 0;
         }
         else{
             this.previous = res.data.pagination.previous.page;
         }
         console.log(res.data);
      });
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