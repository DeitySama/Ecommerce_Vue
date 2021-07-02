<template>
    <div class="row">
        <div class="col-md-7">
        <div>
            <h3>Cart</h3>
        </div>
        <div v-if="allItems.length == 0">
           <p class="text-center text-secondary"> No Items in Cart</p>
        </div>
        <div v-else>
            <div class="row item" v-for="item in allItems" :key="item.product._id">
               <div class="col-md-3">
                   <img :src="item.product.image">
               </div>
               <div class="col-md-3">
                   <p class="m-0" ><small>Name</small></p>
                   <p class="name">{{item.product.name}}</p>
               </div>
               <div class="col-md-2">
                    <p class="m-0"><small>Price</small></p>
                    <p>GHs {{item.product.price*item.quantity}}.00</p>
               </div>
                <div class="col-md-2">
                    <p class="m-0"><small>Quantity</small></p>
                    <p>{{item.quantity}}</p>
               </div>
                    <span class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span>

            </div>
        </div>
        </div>
        <div class="col-md-5">
                        <h3 class="text-right">Total</h3>
                        <div class="text-right">
                            <p class="price"><small>GHs </small>{{getTotal}}</p>
                        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"Cart",
    computed: mapGetters(['allItems','getTotal'])
}
</script>

<style scoped>
    .item{
        background: #eee;
        padding: 10px 0px;
        margin-top: 20px;
        border-radius: 10px;
        position: relative;
    }
    .item img{
        height: 60px;
        background: white;
        padding: 10px;
        border-radius:10px;
    }
    .remove{
        position: absolute;
        top: -10%;
        right: -1%;
        background: rgba(79,70,229,1);
        height: 20px !important;
        width: 20px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 5px;
    }
    .name{
        width: 100%;
        overflow:hidden  !important;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
    }
    small{
        opacity: 0.5;
    }

    .price{
        font-size: 2rem;
    }
    .price small{
        font-size: 1.2rem;
    }
</style>