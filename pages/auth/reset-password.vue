<template>
    <div class="container-fluid reset">
        <div class="row">
            <div class="col-md-4 reset__quote">
                <div class="reset__quote--img">
                    <nuxt-link to="/">
                        <img src="~assets/images/ctctw_logo-1.png" alt=""> 
                    </nuxt-link>
                </div>
                <div class="reset__quote--quote">
                    <span class="fas fa-quote-left"></span>
                    <p>Education is what remains after one has forgotten what one has learned in school. </p>
                    <span class="author">Albert Einstien</span>
                </div>
                <div>
                    <span class="dots"></span>
                </div>
            </div>
            <div class="col-md-8 reset__actual">
                
                <div class="reset__actual--header">
                    <h1 class="title">Reset Password</h1>
                    <p class="subtitle">Choose a new and secure password you can easily remember</p>
                </div> 
               

                <form @submit.prevent="submit">
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="form.password" type="password" class="form-control form-control-lg" id="password">
                        <span class="password" :class="icon" @click="showPassword('password')"></span>
                        <!-- <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                    <div class="form-group">
                        <label for="confirm_password"> Confirm Password</label>
                        <input v-model="form.confirm_password" type="password" class="form-control form-control-lg" id="confirm_password">
                        <span hidden class="password" :class="icon" @click="showPassword('confirm_password')"></span>
                    </div>

                    <div>
                        <button type="submit" class="btn" :class="{ disabled : loading }" >Send Reset Link</button>
                    </div>
                
                </form>

                <div class="reset__actual--footer">
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
                title: 'Reset Password | Children That Change the World',

                form : {
                    password: '',
                    confirm_password: '',
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
            showPassword(elem){
                var x = document.getElementById(elem);

                if (x.type === "password") {
                    x.type = "text";
                    this.icon = "fas fa-eye-slash"
                } else {
                    x.type = "password";
                    this.icon = "fas fa-eye"
                }
            },

            changePasswordIcon(){

            },

            submit(){
                this.loading = true
            }
        }

        

    }
</script>

<style lang="scss" scoped>

    .reset {

        @include auth;
    }

</style>
