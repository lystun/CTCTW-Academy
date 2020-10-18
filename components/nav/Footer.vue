<template>
    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-5 footer__logo">
                    <img class="footer__logo--img" src="~assets/images/ctctw_logo-1.png" alt="">
                    <p class="footer__logo--text">Learn from the comfort of your home. Interactions between classmates and teachers are seamless.</p>
                    <p class="footer__logo--year"> &copy; {{ year }} CTCTW Academy </p>
                </div>
                <div class="col-md-8 col-lg-7 footer__links">
                    <div class="row">
                        <div class="col-md-4 footer__links--quick">
                            <h5>Quick Links</h5>
                            <ul>
                                <li><nuxt-link to="/faqs">FAQs</nuxt-link></li>
                                <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer__links--social">
                            <h5>Social Media</h5>
                            <ul>
                                <li><a target="blank" href="https://twitter.com/ctctworg">Twitter</a></li>
                                <li><a target="blank" href="https://anchor.fm/ctctw">Anchor</a></li>
                                <li><a target="blank" href="https://medium.com/@CTCTW/">Medium</a></li>
                                <li><a target="blank" href="https://www.linkedin.com/company/children-that-change-the-world">Linkedin</a></li>
                                <li><a target="blank" href="https://www.facebook.com/CTCTWORG/">Facebook</a></li>
                                <li><a target="blank" href="https://instagram.com/ctctworg?igshid=1fmum42hladij">Instagram</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer__links--privacy">
                            <h5>Advance</h5>
                            <ul>
                                <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
                                <li><nuxt-link to="/">Terms of Service</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 footer__made">
                    <p> Made with <span class="fas fa-heart"></span> by <a href="https://qeola.com" target="blank">Qeola</a></p> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                year: new Date().getFullYear(),
            }
        },


    }
</script>

<style lang="scss" scoped>

    @mixin footer-links {
        h5{
            color: $white;
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        ul{
            
            padding-left: 0;
            margin-bottom: 3rem;

            li {
                list-style: none;
                margin-bottom: 1rem;

                a {
                    color: lightgray;
                    font-size: .9rem;
                    text-decoration: none;

                    &:hover {
                        color: $primary;
                    }
                }
            }
        }
    }

    .footer {

        background: $dark;
        padding: 3rem .5rem 2rem;

        &__logo{

            margin-bottom: 3rem;

            &--img {
                width: 110px;
                margin-bottom: 2rem;
            }

            &--text {
                margin-bottom: 2rem;
                font-size: 1rem;
            }

            &--year {
                font-size: 1rem;
            }
        }

        &__links{
            @include footer-links();
        }

        &__made {
            text-align: center;

            p{
                color: $white;
                font-size: .8rem;
            }

            span {
                color: red;
                padding: 0 .2rem;
            }
        }

    }


    @media (min-width: 768px) {
        @mixin footer-links {
            ul{
                margin-bottom: 0rem;
            }
        }

        .footer {

            &__logo{

                margin-bottom: 3rem;

                &--img {
                    width: 120px;
                    margin-bottom: 2rem;
                }

            }

            &__links{
                @include footer-links();
            }

            &__made {

                text-align: center;

                p{
                    color: $white;
                    font-size: .8rem;
                }

                span {
                    color: red;
                    padding: 0 .2rem;
                }
            }

        }
    }

    @media (min-width: 992px) {
        
        .footer {
            padding: 5rem .5rem 2rem;
            
            &__logo{

                padding-right: 2rem;

            }

            &__made {
                margin-top: 2rem;
            }

        }
    }

    @media (min-width: 1200px) {
        @mixin footer-links {
            
            ul{
                padding-left: 0;
                margin-bottom: 0;
            }
        }

        .footer {

            padding: 5rem .5rem 2rem;

            &__logo{

                padding-right: 2rem;

                &--img {
                    width: 150px;
                    margin-bottom: 2rem;
                }

                &--text {
                    margin-bottom: 3rem;
                    font-size: 1rem;
                }
            }

            &__links{
                @include footer-links();
            }

            &__made {
                margin-top: 2rem;
            }

        }
    }
    

</style>