<template>
 <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" v-on:click="gotoPrev"><a class="page-link">Previous</a></li>
    <li class="page-item" v-on:click="gotoNext"><a class="page-link">Next</a></li>
  </ul>
</nav>
</template>

<script>
export default {
    props:{
        next:{
            type:Number,
            required:true,
        },
        previous:{
            type:Number,
            required:true,
        }
    },
    data(){
        return{
        }
    },
    methods:{
        gotoNext:function(){
            if(this.next>=0){
                this.$emit('nextPage',this.next);
            }
        },
        gotoPrev:function(){
            if(this.next>=0){
                this.$emit('prevPage',this.previous);
            }
        }
        
    }

}
</script>

<style scoped>
    nav{
        padding: 40px;
        width: 100%;
    }
    ul{
        width: 20%;
        margin-left:auto;
    }
    ul li{
        cursor: pointer;
    }
</style>