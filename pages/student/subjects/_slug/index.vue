<template>
    <div class="container">
        <h1 class="h3 mb-5 text-gray-800">{{ subject | capitalize }}</h1>

        <div class="row subject">
            <div class="col-md-12 col-lg-8 subject__details">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card shadow subject__details--list">
                            <div class="card-body">
                                <div class="header">
                                    <h5 class="card-title">Number Bases and Log</h5>
                                    <p class="card-text"><small class="text-muted"> Topic One : 2/3 Completed </small></p>
                                </div>

                                <div class="lessons">
                                    <nuxt-link :to="{ name: 'student-subjects-slug-topic-lesson-lesson', params: { slug: 'mathematics', topic: 'number-bases-and-log', lesson : 'introduction' } }" >
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        
                                        <span class="title"> 
                                            Introduction to number bases and logarithms
                                            <br> 
                                            <small class="d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link :to="{name: 'student-subjects-slug-topic-lesson-lesson',  params: { slug: 'mathematics', topic: 'number-bases-and-log', lesson : 'number-bases' } }">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Multiplication of number in base two
                                            <br> <small class="text-muted d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link :to="{name: 'student-subjects-slug-topic-lesson-lesson',  params: { slug: 'mathematics', topic: 'number-bases-and-log', lesson : 'from-youtube' } }">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            History of Number bases
                                            <br> <small class="d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link :to="{ name: 'student-subjects-slug-topic-exercise-exercise', params: { slug: 'mathematics', topic: 'number-bases-and-log' , exercise : 'exercise-01' } }" >
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Exercise
                                            <br> <small class="d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow subject__details--list">
                            <div class="card-body">
                                <div class="header">
                                    <h5 class="card-title">Angles and Shapes</h5>
                                    <p class="card-text"><small class="text-muted"> Topic Two : 1/5 Completed </small></p>
                                </div>

                                <div class="lessons">
                                    <nuxt-link to="/">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Introduction to angles and shapes
                                            <br> 
                                            <small class="d-inline-block"><span class="fas fa-clock time"></span> 7 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: true }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Calculating area of solid shape
                                            <br> <small class="d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: true }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Calculating angles of tight spot 
                                            <br> <small class="d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                </div>
                            </div>
                        </div>

                        <div class="card shadow subject__details--list">
                            <div class="card-body">
                                <div class="header">
                                    <h5 class="card-title">Logarithms</h5>
                                    <p class="card-text"><small class="text-muted"> Topic Three : 2/5 Completed </small></p>
                                </div>

                                <div class="lessons">
                                    <nuxt-link to="/">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle hide"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Introduction to number bases and logarithms
                                            <br> 
                                            <small class="d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: true }" ><span class="fas fa-check-circle hide"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Multiplication of number in base two
                                            <br> <small class="text-muted d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-lg-4 subject__teacher">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="personal">
                            <img src="~assets/images/avatars/2.png" alt=""> 
                            <div class="info">
                                <h6 class="name">Lystun Test</h6>
                                <small class="role">Instructor</small>
                            </div>
                        </div>
                        <div class="contact">
                            <p><span class="fas fa-phone"></span> 0123456789 </p>
                            <p><span class="fas fa-envelope"></span> lystuntest@gmail.com </p>
                        </div>
                        <div class="bio">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum nesciunt eos non beatae distinctio quo quibusdam adipisci cum laudantium quaerat, asperiores eligendi deleniti, modi, architecto aliquid reiciendis incidunt neque?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
        layout : 'dashboard',

        data(){
            return {
                subject: {},
                    
            }
        },

        head() {
            return {
                title: this.subject +' | Children That Change the World',
                meta: [
                    { hid: 'description', name: 'ctctw', content: 'CTCTW equips students in underserved university communities like Ogbomoso with 21st-century relevant skills that will inspire innovation, creativity and invention.' }
                ]
            }
        },

        created(){
            this.subject = this.$route.params.slug
        },

        filters: {
            capitalize: (value) => {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },

        methods : {
            
        }



	}
</script>

<style lang="scss" scoped>
	.container {
        padding: 1rem;

        .subject {
            margin-top: 1rem;

            &__details {

                &--list {
                    border: none;
                    margin-bottom: 1.5rem;

                    .header {
                        display: flex;
                        justify-content: space-between;
                    }

                    .lessons {
                        margin-top: 2rem;

                        a {

                            display: flex;
                            color: gray;
                            margin-bottom: 1rem;
                            align-items: flex-start;
                            text-decoration: none;

                            &:hover {
                                color: $primary;
                            }

                            .fas.time {
                                margin-right: .1rem;
                            }

                            .icon {
                                
                                margin-right: 1rem;
                                position: relative;

                                .fas.video {
                                    font-size: 1.4rem;
                                    line-height: 1.5;
                                }

                                .bckg {
                                    background-color: transparent;
                                    color: $white;
                                    border-radius: 5rem;
                                    position: absolute;
                                    top: -.1rem;
                                    left: 1rem;

                                    span {
                                        font-size: 1rem;
                                        color: $primary;
                                        background-color: #fff;
                                        border-radius: 5rem;
                                    }
                                }
                            }

                            

                            .title {
                                font-size: 1rem;
                                margin-right: 1rem;

                                small {
                                    font-size: .8rem;
                                    color: lightgray;
                                }
                            }


                        }
                    }
                }
            }

            &__teacher {

                .card {
                    border: none;

                    &-body {
                        .personal {

                            display: flex;
                            align-items: center;
                            margin-bottom: 2rem;

                            img {
                                width: 60px;
                            }

                            .info {
                                .name {
                                    font-size: 1rem;
                                    margin-bottom: 0rem;
                                }

                                .role {
                                    font-size: .8rem;
                                }
                            }
                        }

                        .contact {
                            .fas {
                                color: $primary;
                                margin-right: .5rem;
                            }

                            p {
                                font-size: .9rem;
                            }
                        }
                        .bio {
                            p {
                                font-size: .9rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.98px) { 
        .container {
            padding: 1rem;

            .subject {

                &__details {

                    margin-bottom: 3rem;

                    &--list {
                        margin-bottom: 1rem;

                        .header {
                            display: block;

                            .card-title {
                                margin-bottom: .1rem;
                            }
                        }

                        .lessons {

                            a {

                                display: flex;
                                margin-bottom: 1rem;

                                .fas.time {
                                    margin-right: .1rem;
                                }

                                .icon {
                                    
                                    margin-right: 1rem;
                                    position: relative;

                                    .fas.video {
                                        font-size: 1.2rem;
                                    }

                                    .bckg {
                                        background-color: transparent;
                                        position: absolute;
                                        top: -.3rem;
                                        left: 1rem;

                                        span {
                                            font-size: 1rem;
                                        }
                                    }
                                }

                                .title {
                                    font-size: 1rem;
                                    margin-bottom: 0rem;

                                    small {
                                        font-size: .8rem;
                                    }
                                }


                            }
                        }
                    }
                }

                &__teacher {

                    margin-bottom: 2rem;

                    .card {

                        &-body {
                            .personal {

                                margin-bottom: 2rem;

                                img {
                                    width: 60px;
                                }

                                .info {
                                    .name {
                                        font-size: .9rem;
                                        margin-bottom: 0;
                                    }

                                    .role {
                                        font-size: .7rem;
                                    }
                                }
                            }

                            .contact {
                                .fas {
                                    margin-right: .5rem;
                                }

                                p {
                                    font-size: .9rem;
                                }
                            }
                            .bio {
                                p {
                                    font-size: .9rem;
                                }
                            }
                        }
                    }
                }
            }

        }
    }

    @media (max-width: 767.98px) {  }

    @media (max-width: 991.98px) {  }

    @media (max-width: 1199.98px) {  }

</style>