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
                    <nuxt-link :to="passedInfo.link+'/personal-info'" class="dot"> &nbsp; </nuxt-link>
                    <nuxt-link :to="passedInfo.link+'/residency-info'" class="dot active"> &nbsp; </nuxt-link>
                    <nuxt-link :to="info.link" class="dot"> &nbsp; </nuxt-link>
                </div>
            </div>

            <div class="col-md-8 register__actual">
                <div class="register__actual--nav">
                    <nuxt-link :to="passedInfo.link+'/personal-info'">
                        <span class="fas fa-angle-left"></span> 
                        <span>Back</span>
                    </nuxt-link>
                    <div>
                        <span class="">Step {{info.step}}/2 </span>
                        <span> Residency Info </span>
                    </div>
                </div>

                <div class="register__actual--header">
                    <h1 class="title">Complete your registration</h1>   
                    <p class="subtitle">To personalize your learning experience, please supply the following details.</p>             
                </div>

                <div class="register__actual--content">
                    <form @submit.prevent="submit">
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input v-model="form.phone" type="tel" class="form-control form-control-lg" id="phone" placeholder="+234">
                            <span class="password" @click="showPassword('password')"></span>
                        </div>

                        <div class="form-group mb-4">
                            <label for="level">Currrent Class</label>
                            <select id="level" class="form-control custom-select custom-select-lg">
                                <option disabled>Choose Class</option>
                                <option class="jss1">JSS1</option>
                                <option class="jss1">JSS2</option>
                            </select>
                            <!-- <small id="name" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>

                        <div class="form-group mb-4">
                            <label for="state">State of Residency</label>
                            <select id="state" class="form-control custom-select custom-select-lg">
                                <option disabled>Choose State</option>
                                <option class="jss1">Oyo</option>
                                <option class="jss1">Lagos</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit" class="btn" :class="{ disabled : loading }"> Register </button>
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
                title: 'Residency Info | Children That Change the World',

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

        props : ['info'],

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

                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    /* Firefox */
                    input[type=number] {
                        -moz-appearance: textfield;
                    }
                }
            }
        }

    }

</style>
