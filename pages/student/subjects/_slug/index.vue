<template>
    <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">{{ subject | capitalize }}</h1>

        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card shadow">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">Number Bases and Log</h5>
                                    <p class="card-text"><small class="text-muted"> Module One : 2/3 Completed </small></p>
                                </div>

                                <div class="courses">
                                    <nuxt-link :to="{ name: 'student-subjects-slug-lesson', params: { lesson : 'from-youtube' } }" >
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

                                    <nuxt-link to="/">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            Multiplication of number in base two
                                            <br> <small class="text-muted d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <span class="icon">
                                            <span class="fas fa-photo-video video"></span>
                                            <span class="bckg" :class="{ invisible: false }" ><span class="fas fa-check-circle"></span> </span>
                                        </span>
                                        <span class="title"> 
                                            History of Number bases
                                            <br> <small class="d-inline-block"><span class="fas fa-clock time"></span> 5 Minutes</small>
                                        </span>
                                    </nuxt-link>

                                    <nuxt-link to="/">
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

                        <div class="card shadow ">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">Angles and Shapes</h5>
                                    <p class="card-text"><small class="text-muted"> Module Two : 1/5 Completed </small></p>
                                </div>

                                <div class="courses">
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

                        <div class="card shadow">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">Logarithms</h5>
                                    <p class="card-text"><small class="text-muted"> Module Three : 2/5 Completed </small></p>
                                </div>

                                <div class="courses">
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
            <div class="col-md-4">
                <div class="card">

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
                title : 'Subjects | Children That Change the World',
                subject: {},
                    
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

        created(){
            this.subject = this.$route.params.slug
        },

        filters: {
            capitalize: (value) => {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }



	}
</script>

<style lang="scss" scoped>
	.container-fluid {
        padding: 1rem 1.5rem;

        .row {
            margin-top: 1rem;
        }

        .card {

            border: none;
            margin-bottom: 1.5rem;

            &-body {

                padding: 2rem;

                .courses {
                    margin-top: 2rem;

                    a {

                        display: flex;
                        color: gray;
                        margin-bottom: 1rem;
                        align-items: flex-start;

                        &:hover {
                            color: $primary;
                        }

                        .fas.time {
                            margin-right: .1rem;
                        }

                        .icon {
                            
                            margin-right: .6rem;

                            .fas.video {
                                font-size: 1.4rem;
                                line-height: 1.5;
                            }

                            .bckg {
                                background-color: transparent;
                                color: $white;
                                border-radius: 5rem;
                                position: relative;
                                top: -.6rem;
                                left: -.7rem;

                                span {
                                    font-size: 1.1rem;
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

    }

</style>