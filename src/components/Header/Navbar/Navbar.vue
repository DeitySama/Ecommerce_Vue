<template>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><img src="https://res.cloudinary.com/palala/image/upload/v1619451649/workflow-mark-indigo-600_f6o867.svg" height="20px" class="mr-3">Palala</router-link>
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
                <router-link class="nav-link" to="/login" v-if="!user">Login or SignUp</router-link>
                <a class="nav-link" v-else>{{user.user.firstname}}</a>
                </li>
                <li class="nav-item pl-3">
                  <div class="dropdown">
                      <button class="btn cart-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="count">{{getCount}}</span>
                              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" @click="stopProp">
                        <div class="nav-item dropdown ">
                          <cart></cart>
                        </div>
                      </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </nav>
      

</template>

<script>
import Cart from '../../Body/Cart';
import {mapGetters,mapActions} from 'vuex'


export default {
  components:{
    'cart':Cart
  },
  data(){
    return{
      title:'Commerce',
    }
  },
  
  methods:{
    stopProp:function(e){
        e.stopPropagation();
    },
    ...mapActions(['getCurrent'])
  },
  computed:mapGetters(['user','getCount']),
  created(){
    this.getCurrent();
  }
}
</script>

<style scoped>
    nav{
        position: fixed;
        width: 100%;
        top:0;
        z-index: 2;
        padding:10px 40px;
        backdrop-filter: blur(10px);
    }
    .cart-btn{
      border: none;
      margin-top: 3px;
      padding: 5px 10px;
      border-radius: 10px;
      color: white;
      background-color:rgba(79,70,229,1);
      position: relative;
    }

    .dropdown {
      position:static !important;
    }
    .dropdown-menu {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, .15)!important;
    margin-top:0px !important;
    width:100% !important;
    height: 60vh;
    border-radius: 0;
    border: none;
    border-bottom: 4px solid rgba(79,70,229,1);
    padding: 40px;
    overflow-y: scroll;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
.dropdown-menu::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.dropdown-menu {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

    .count{
      position: absolute;
      top: -15%;
      right: -20%;
      background: red;
      display: flex;
      height: 20px;
      width: 20px;
      align-items: center;
      justify-content:center;
      border-radius: 100%;
    }
</style>
