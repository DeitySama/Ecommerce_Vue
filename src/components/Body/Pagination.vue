<template>
 <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" v-on:click="gotoPrev('prev')"><a class="page-link">Previous</a></li>
    <li class="page-item" v-on:click="gotoNext('next')"><a class="page-link">Next</a></li>
  </ul>
</nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {

    methods:{
        ...mapActions(['changePage']),
        gotoNext:function(next){
            console.log(next)
            this.changePage(next);
        },
        gotoPrev:function(prev){
            this.changePage(prev);
        }
        
    }

}
</script>

<style scoped>
    nav{
        width: 100%;
        position: relative;
        height: 100px;
    }
    .pagination{
        position: absolute;
        right: 40px;
    }
    ul li{
        cursor: pointer;
    }
    ul li a{
        color: rgba(79, 70, 229, 1);
        border: solid 1px rgba(79, 70, 229, 1);
    }
</style>