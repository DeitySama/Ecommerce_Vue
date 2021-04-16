<template>
  <div class="login">
      <form @submit.prevent="login">
          <div>
              <h3 class="text-center mb-5">Login into Palala</h3>
          </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
        </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        login:function(){
            //do validation
            axios.post('https://palala.herokuapp.com/api/v1/users/login',{email:this.email,password:this.password}).then(res=>{
                if(res.data.success == true){
                     
                }
            })
        }
    }
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

</style>