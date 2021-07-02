<template>
    <div class="cc">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

                <div class="carousel-item" v-for="(carousel, i) in carousels" v-bind:key="i" :class="{active:i==0}">
                    <img v-bind:src="carousel.path" class="d-block w-100" alt="...">
                </div>


            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {

        data() {
            return {
                carousels: {},
                active:false,
                index:0,
            }
        },
        created() {
            axios.get('https://palala.herokuapp.com/api/v1/slide/img').then(res => {
                this.carousels = res.data.data;
            });
        }

    }
</script>

<style scoped>
    .cc {
        margin-top: 60px;
    }
</style>