<template>
  <div class="login">
      <form @submit.prevent="onSubmit">
          <div>
              <h3 class="text-center mb-5">Login into Palala</h3>
          </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Keep Me SignedIn</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
            <router-link  to="/register" class="btn  btn-block btn-sec">Create an Account</router-link>
            <div class="mt-3">
                <p><small>Forgot Password?<a> Reset</a></small></p>
            </div>
        </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        ...mapActions(['authenticate','getCurrent']),
        onSubmit(e){
            e.preventDefault();
            this.authenticate({email:this.email,password:this.password});
            this.getCurrent();
        }
        
    },
}
</script>

<style scoped>

.login{
    padding: 40px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

form{
    width: 40%;
}

button{
        background: rgba(79,70,229,1);
    }
.btn-sec{
    background-color: white;
    color: rgba(79,70,229,1);
    border: solid 2px rgba(79,70,229,1);
}
p a{
    color: rgba(79,70,229,1) !important;
    cursor: pointer;
}


</style>