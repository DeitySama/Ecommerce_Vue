<template>
  <section class="categories">
    <div class="row">
        <div class="col-md-3">
            <div class="catCard">
                <p>Category Title</p>
                <img src="https://via.placeholder.com/150x150" class="d-block w-100">
                <a>Explore Now  <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="col-md-3">
            <div class="catCard">
                <p>Category Title</p>
                <img src="https://via.placeholder.com/150x150" class="d-block w-100">
                <a>Explore Now <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
        </div>
                <div class="col-md-3">
            <div class="catCard">
                <p>Category Title</p>
                <img src="https://via.placeholder.com/150x150" class="d-block w-100">
                <a>Explore Now <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
        </div>
                <div class="col-md-3">
            <div class="catCard">
                <p>Category Title</p>
                <img src="https://via.placeholder.com/150x150" class="d-block w-100">
                <div class="expn">
                    <a>Explore Now <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
        
            </div>
        </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .categories{
        margin-top:20px;
        padding: 40px;
    }
    .catCard{
        background-color: white;
        box-shadow: 0px 20px 40px rgba(0,0,0,0.05);
        padding: 20px;
        border-radius: 10px;
        margin-top: 40px;
    }

    .catCard a{
        display: inline-block;
        margin-top:20px;
        margin-left: auto;
    }

    .catCard p{
        font-weight: bold;
    }
    .expn{
        width: 100%;
    }
    .expn a{
        display: inline-block;
       margin-left: auto; 
    }
</style>