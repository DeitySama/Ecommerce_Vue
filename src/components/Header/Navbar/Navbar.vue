<template>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Palala</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/shop">Goto Shop</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="">Careers</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/login">Login or SignUp</router-link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
      

</template>

<script>

export default {
  data(){
    return{
      title:'Commerce'
    }
  }
}
</script>

<style scoped>
    nav{
        position: fixed;
        width: 100%;
        top:0;
        z-index: 2;
        padding:20px 40px;
        backdrop-filter: blur(10px);
    }
</style>
