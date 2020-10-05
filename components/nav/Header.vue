<template>
    <nav class="navbar navbar-expand-md navbar-light shadow bg-white fixed-top nav-menu">
        <div class="container">
            <nuxt-link to="/" class="navbar-brand">
                <img src="~assets/images/ctctw_logo.png" class="img-fluid" alt="">
            </nuxt-link>
            
            <span class="navbar-toggler border-0" data-target="#myNavbar" data-toggle="collapse">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-filter-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
                </svg>
            </span>

            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><nuxt-link to="/auth/login" class="nav-link" nuxt-link-active exact>Login</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="/auth/register" class="nav-link" nuxt-link-active exact>Sign Up</nuxt-link></li>
                    <li class="nav-item">
                        <nuxt-link to="/donate" class="nav-link btn" nuxt-link-active exact>Donate</nuxt-link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

    .navbar {
        padding: 0 1rem;

        &-brand {
            padding: 1.2rem 0;

            img {
                width: 150px;
            }
        }

        .nav-link {

            margin-right: 2rem;
            // padding: 1rem .3rem;

            @include button;
            
            &.btn {

                color: $white;
                background: $primary;
                border: 1px solid $primary;
                padding: .5rem 1.5rem;
                margin-right: 0;

                &:hover {
                    color: $white;
                    border: 1px solid $dark;
                    background: $dark;
                }
                
            }

            &.nuxt-link-exact-active{
                color: $primary;
            }
        }
    }

    @media only screen and (max-width: 576px) {
        .navbar {
            padding: 0 1rem;

            &-brand {

                padding: 1rem 0;

                img {
                    width: 120px;
                }
            }

            &-nav{
                padding-bottom: 1rem;
            }

            .nav-link {
                margin-right: 2rem;
                padding: 1rem .3rem;
            } 
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .navbar {
            padding: 0 1rem;

            &-brand {

                padding: 1rem 0;

                img {
                    width: 120px;
                }
            }

            .nav-link {
                margin-right: 2rem;
                padding: 1rem .3rem;
            } 
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        .navbar {

            padding: 0 1rem;

            &-brand {

                padding: 1rem 0;

                img {
                    width: 130px;
                }
            }

            &-nav{
                align-items: center;
            }

            .nav-link {
                margin-right: 2rem;
                padding: 1rem .3rem;
            } 
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        .navbar {
            padding: 0 1rem;

            &-brand {

                padding: 1rem 0;

                img {
                    width: 140px;
                }
            }

            .nav-link {
                margin-right: 2rem;
                padding: 1rem .3rem;
            } 
        }
    }
    

</style>