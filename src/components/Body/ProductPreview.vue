<template>
    <div class="preview">
        <div class="back"><a><i class="fa fa-angle-left" aria-hidden="true"></i> Back</a></div>
        <div class="row">
            <div class="col-md-5">
                <div class="img-con">
                    <img v-bind:src="product.image" class="product-image">
                </div>
                <div class="p-imgs">
                    <div class="row">
                        <li v-for="img of product.productImages" v-bind:key="img" class=" col-md-3">
                            <div class="p-img">
                                <img v-bind:src="img" alt="p-img">
                            </div>
                        </li>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="details">
                    <div class="details-h">
                        <p><small>{{product.category}}</small></p>
                        <h2>{{product.name}}</h2>
                        <p class="price">GHs {{product.price}}.00</p>
                    </div>
                    <hr>
                    <div class="details-b">
                        <p><small>Product Details</small></p>
                        <p>{{product.description}}</p>
                        <div class="row">
                            <div class="col-md-3">
                                <p><small>Country Of Origin</small></p>
                                <p>{{product.countryOfOrigin}}</p>
                            </div>
                            <div class="col-md-6">
                                <p><small>Tags</small></p>
                                <p>
                                    <span classs="tag" v-for="tag in product.tags" v-bind:key="tag">{{tag}}</span>
                                </p>
                            </div>
                            <div class="col-md-3"></div>

                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 quantity">
                        <p><small>Quantity</small></p>
                        <button v-on:click="qdec" class="btn-danger">-</button>
                        <input class="quantity" min="0" name="quantity" v-bind:value="quantity" type="number">
                        <button v-on:click="qinc" class="btn-primary">+</button>
                    </div>
                    <div class="col-md-4">
                        <p><small class="text-white">Add To cart</small></p>
                        <button class="btn btn-primary" @click="addTo">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <ul class="nav nav-tabs row" id="myTab" role="tablist">
                <li class="nav-item col" role="presentation">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#specs" role="tab"
                        aria-controls="home" aria-selected="true">Specifications</a>
                </li>
                <li class="nav-item col" role="presentation">
                    <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab"
                        aria-controls="profile" aria-selected="false">Reviews</a>
                </li>
                <li class="nav-item col" role="presentation">
                    <a class="nav-link" id="details-tab" data-toggle="tab" href="#details" role="tab"
                        aria-controls="details" aria-selected="false">More Details</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="specs" role="tabpanel" aria-labelledby="specs-tab">
                   <div class="spec" v-for="(spec,i) in product.specifications" v-bind:key="i">{{spec}}</div>
                </div>
                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">...</div>
                <div class="tab-pane fade" id="details" role="tabpanel" aria-labelledby="details-tab">...</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapActions} from 'vuex'
    export default {
        name: 'Preview',
        data() {
            return {
                id: this.$route.params.id,
                product: {},
                quantity: 1,
                price: 0,
                currentImg:''
            }
        },
        methods: {
            qinc: function () {
                this.quantity += 1;
            },
            qdec: function () {
                if (this.quantity > 1) {
                    this.quantity -= 1;
                }
            },
            ...mapActions(['addToCart']),
            addTo:function(){

                this.addToCart({product:this.product,quantity:this.quantity});
            }
        },
        created() {
            this.id = this.$route.params.id;
            axios.get(`https://palala.herokuapp.com/api/v1/products/${this.id}`, {
                headers: {}
            }).then(res => {
                this.product = res.data.data;
                this.price = res.data.data.price;
            })
        }
    }
</script>

<style scoped>
    .preview {
        margin-top: 60px;
        padding:40px 60px;
    }

    .image-con {
        overflow: hidden;
        background-color: #eee !important;
    }

    .product-image {
        width: 100%;
        display: block;
        margin: 0 auto;
    }

    small {
        color: #bdbdbd;
    }

    p {
        font-size: 16px;
    }

    .quantity button {
        border: none;
        border-radius: 0;
        padding: 5px 15px;
        margin: 2px;


    }

    .quantity input {
        border: solid 1px black;
        width: 70px;
        padding: 5px;
        border-radius: 0;
        margin-top: 2px;
        text-align: center;
    }

    .p-imgs li {
        list-style: none;
        margin-top: 20px;
    }

    .p-img {
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .p-imgs img {
        width: 100%;
    }

    .price{
        font-size: 20px;
        font-weight: 400;
        color: rgba(79,70,229,1);
    }
    button{
        background: rgba(79,70,229,1);
    }
    .spec{
        margin-top:40px;
        font-weight: normal;
    }
    span{
        display: inline-block;
        background: #eee  !important;
        padding: 5px 15px;
        margin: 0 5px ;
        margin-bottom: 10px !important;
        border-radius: 50px;
    }
    .back{
        margin-left: 30px;
        margin-bottom: 40px;
        color:rgba(79,70,229,1);
        cursor: pointer;
    }
</style>