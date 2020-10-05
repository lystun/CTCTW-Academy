<template>
    <div class="container-fluid register">
        <div class="row">
            <div class="col-md-4 register__quote">
                <div class="register__quote--img">
                    <nuxt-link to="/">
                        <img src="~assets/images/ctctw_logo-1.png" alt=""> 
                    </nuxt-link>
                </div>

                <div class="register__quote--quote">
                    <span class="fas fa-quote-left"></span>
                    <p>Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.</p>
                    <span class="author">Margaret Mead</span>
                </div>

                <div class="register__quote--dots">
                    <nuxt-link to="/auth/register" class="dot active"> &nbsp; </nuxt-link>
                    <span class="dot"> &nbsp;</span>
                    <span class="dot"> &nbsp;</span>
                    <span class="dot"> &nbsp;</span>
                </div>
            </div>

            <div class="col-md-8 register__actual">
                <div class="register__actual--header">
                    <h1 class="title">Join Us</h1>   
                    <p class="subtitle"> Choose an account type below.</p>             
                </div>

                <div class="register__actual--content">
                    <nuxt-link to="/auth/register/student/personal-info" class="type shadow">
                        <span class="fas fa-user"></span>
                        <div>
                            <h5>Student</h5>
                            <p>Have access to a virtual class room experience. </p>
                        </div>
                        <span class="fas fa-arrow-right"></span>
                    </nuxt-link>

                    <nuxt-link to="/auth/register/teacher/personal-info" class="type shadow">
                        <span class="fas fa-user-graduate"></span>
                        <div>
                            <h5>Teacher</h5>
                            <p>You need not be in a real class room before you do what you love.</p>
                        </div>
                        <span class="fas fa-arrow-right"></span>
                    </nuxt-link>
                </div>

                <div class="register__actual--footer">
                    <p class="register">Already have an account? <nuxt-link to="/auth/login"> Login </nuxt-link> </p>
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
                title: 'Register | Children That Change the World',

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

    .register {

        @include auth;
        
    }

</style>
