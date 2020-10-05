<template>
    <div class="container-fluid forgot">
        <div class="row">
            <div class="col-md-4 forgot__quote">
                <div class="forgot__quote--img">
                    <nuxt-link to="/">
                        <img src="~assets/images/ctctw_logo-1.png" alt=""> 
                    </nuxt-link>
                </div>
                <div class="forgot__quote--quote">
                    <span class="fas fa-quote-left"></span>
                    <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.</p>
                    <span class="author">Kofi Annan</span>
                </div>
                <div>
                    <span class="dots"></span>
                </div>
            </div>
            <div class="col-md-8 forgot__actual">
                <div class="forgot__actual--header">
                    <h1 class="title">Forgot Password</h1>
                    <p class="subtitle">Please enter your email and we will send you a reset link.</p>
                
                </div>

                <form @submit.prevent="submit">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input v-model="form.email" type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp">
                        <!-- <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>

                    <div>
                        <button type="submit" class="btn" :class="{ disabled : loading }" >Reset Password</button>
                    </div>
                </form>

                <div class="forgot__actual--footer">
                    <p class="register">Don't have an account? <nuxt-link to="/auth/register"> Register </nuxt-link> </p>
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
                title: 'Forgot Password | Children That Change the World',

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

    .forgot {
        @include auth;
    }

</style>
