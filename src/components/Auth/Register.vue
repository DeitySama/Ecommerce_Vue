<template>
    <div class="login">
        <form @submit.prevent="login" v-if="!pass">
            <div>
                <h3 class="text-center mb-5">Create an Account</h3>
            </div>
            <div class="form-row">
                <div class="col">
           <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" v-model="fname">
            </div>
                </div>
                <div class="col">
           <div class="form-group">
                <label>Lastname</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" v-model="lname">
            </div>
                </div>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" v-model="cpassword">
            </div>

            <button type="submit" class="btn btn-primary btn-block">Create an Account</button>
            <router-link to="/login" class="btn  btn-block btn-sec">Login</router-link>
        </form>

        <div class="m-auto col-md-5 text-justify" v-else>
                <h2>A verification link has been sent to your email account <br>({{email}})</h2>
                <p>Please click on the that has been sent to your email to verify your account</p>
                <router-link to="/shop" class="btn btn-block">Keep Shopping</router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {
        bus
    } from '../../main';
    export default {
        data() {
            return {
                fname:"",
                lname:"",
                email: "",
                password: "",
                cpassword:"",
                pass:false
            }
        },
        methods: {
            login: function () {
                //do validation
                axios.post('http://localhost:8080/api/v1/users/register',
                     {
                        firstname:this.fname,
                        secondname:this.lname,
                        email: this.email,
                        password: this.password,
                        password2:this.cpassword
                    },{withCredentials:true}).then(res => {
                    if (res.data.success == true) {
                        console.log(res);
                        this.pass = true;
                        bus.$emit('authstatechanged', res.data.token);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        margin-top: 40px;
        padding: 40px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        width: 40%;
    }

    .btn {
        background: rgba(79, 70, 229, 1);
        color: white;
    }

    .btn-sec {
        background-color: white;
        color: rgba(79, 70, 229, 1);
        border: solid 2px rgba(79, 70, 229, 1);
    }

    p a {
        color: rgba(79, 70, 229, 1) !important;
        cursor: pointer;
    }
</style>