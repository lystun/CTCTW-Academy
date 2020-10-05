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
                    <nuxt-link :to="passedInfo.link+'/residency-info'" class="dot"> &nbsp; </nuxt-link>
                    <nuxt-link :to="info.link" class="dot active"> &nbsp; </nuxt-link>
                </div>
            </div>

            <div class="col-md-8 register__actual">
                <div class="register__actual--content">
                    <div class="card shadow">
                        <img src="~/assets/images/auth/icons/success.png" alt="">
                        <h5>You're now on the CTCTW Academy</h5>
                        <p> {{ info.text }} </p>
                        
                        <nuxt-link :to="info.link" class="btn">Go to Dashboard</nuxt-link>
                    </div>
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
                title: 'Complete Registration | Children That Change the World',

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
                .card {

                    display: flex;
                    padding: 4rem 2rem;
                    text-align: center;

                    img {
                        width: 7rem;
                        margin: 2rem auto;
                    }

                    h5 {
                        margin-bottom: 1rem;
                    }

                    p {
                        font-size: .9rem;
                        margin-bottom: 1.5rem;
                    }
                }
            }
        }

    }

</style>
