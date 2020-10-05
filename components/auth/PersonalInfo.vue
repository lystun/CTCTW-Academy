<template>
    <div class="container-fluid register">
        <div class="row">
            <div class="col-md-4 register__quote" :style="{ backgroundImage : `url(${passedInfo.backgroundImg})`}">
                <div class="register__quote--img">
                    <nuxt-link to="/">
                        <img src="~assets/images/ctctw_logo-1.png" alt=""> 
                    </nuxt-link>
                </div>

                <div class="register__quote--quote">
                    <span class="fas fa-quote-left"></span>
                    <p>{{ info.quote }}</p>
                    <span class="author">{{ info.author }}</span>
                </div>

                <div class="register__quote--dots">
                    <nuxt-link :to="info.link" class="dot"> &nbsp; </nuxt-link>
                    <nuxt-link :to="passedInfo.link+'/personal-info'" class="dot active"> &nbsp; </nuxt-link>
                    <nuxt-link :to="passedInfo.link+'/residency-info'" class="dot"> &nbsp; </nuxt-link>
                    <nuxt-link :to="info.link" class="dot"> &nbsp; </nuxt-link>
                </div>
            </div>

            <div class="col-md-8 register__actual">
                <div class="register__actual--nav">
                    <nuxt-link :to="info.link">
                        <span class="fas fa-angle-left"></span> 
                        <span>Back</span>
                    </nuxt-link>
                    <div>
                        <span class="">Step {{ info.step }}/2 </span>
                        <span>Personal Info </span>
                    </div>
                </div>

                <div class="register__actual--header">
                    <h1 class="title">Register as a {{info.type}}</h1>   
                    <p class="subtitle">You are required to supply the following details.</p>             
                </div>

                <div class="register__actual--content">
                    <form @submit.prevent="submit">
                        
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input v-model="form.name" type="text" class="form-control form-control-lg" id="name" aria-describedby="name">
                            <!-- <small id="name" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>

                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input v-model="form.email" type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp">
                            <!-- <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input v-model="form.password" type="password" class="form-control form-control-lg" id="password">
                            <span class="password" :class="icon" @click="showPassword('password')"></span>
                        </div>

                        <div class="form-group">
                            <label for="confirm_password"> Confirm Password</label>
                            <input v-model="form.confirm_password" type="password" class="form-control form-control-lg" id="confirm_password">
                            <span hidden class="password" :class="icon" @click="showPassword('confirm_password')"></span>
                        </div>

                        <div>
                            <button type="submit" class="btn" :class="{ disabled : loading }" >Save and Continue </button>
                        </div>
                    </form>
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

        data(){
            return {
                title: 'Personal Info | Children That Change the World',

                form : {
                    email: '',
                    password: ''
                },

                icon : 'fas fa-eye',
                loading : false,

                passedInfo : {
                    backgroundImg: require(`~/assets/images/auth/${this.info.image}`),
                    link : `${ this.info.link +'/'+ this.info.type}`
                },
            }
        },

        props : [ 'info' ],

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


        &__actual {

            &--content {

                form {
                    .form-group {
                        margin-bottom: 1rem;
                    }
                }
            }
        }

    }

</style>
