<template>
    <div class="container-fluid login">
        <div class="row">
            <div class="col-md-4 login__quote bg-danger">
                <div class="login__quote--img">
                    <nuxt-link to="/">
                        <img src="~assets/images/ctctw_logo-1.png" alt=""> 
                    </nuxt-link>
                </div>
                <div class="login__quote--quote">
                    <span class="fas fa-quote-left"></span>
                    <p>Education is what remains after one has forgotten what one has learned in school. </p>
                    <span class="author">Albert Einstien</span>
                </div>
                <div>
                    <span class="dots"></span>
                </div>
            </div>
            <div class="col-md-8 login__actual">
                <div class="login__actual--header">
                    <h1 class="title">Login</h1>
                    <p class="subtitle">Enter your credentials to login into your account.</p>
                </div>

                <form @submit.prevent="submit">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input v-model="form.email" type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp">
                        <!-- <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="form.password" type="password" class="form-control form-control-lg" id="password">
                        <span class="password" :class="icon" @click="showPassword"></span>
                    </div>

                    <div>
                        <button type="submit" class="btn" :class="{ disabled : loading }" >Login</button>
                    </div>
                    
                    <div class="forgot">
                        <nuxt-link to="/auth/forgot-password" class="float-right">Forgot Password?</nuxt-link>
                    </div>
                </form>

                <div class="login__actual--footer">
                    <p class="text">Don't have an account? <nuxt-link to="/auth/register"> Register </nuxt-link> </p>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        layout : 'auth',

        data(){
            return {
                title: 'Login | Children That Change the World',

                form : {
                    email: '',
                    password: ''
                },

                icon : 'fas fa-eye',
                loading : false,
            }
        },

        head() {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'ctctw', content: 'CTCTW equips students in underserved university communities like Ogbomoso with 21st-century relevant skills that will inspire innovation, creativity and invention.' }
                ]
            }
        },

        computed:{
            
        },

        methods : {
            showPassword(){
                var x = document.getElementById("password");

                if (x.type === "password") {
                    x.type = "text";
                    this.icon = "fas fa-eye-slash"
                } else {
                    x.type = "password";
                    this.icon = "fas fa-eye"
                }
            },

            submit(){
                this.loading = true
            }
        }

        

    }
</script>

<style lang="scss" scoped>

    .login {
        @include auth
    }
    

</style>
