<template>
    <div class="container">
        <h1 class="h3 mb-4 text-gray-800">Examinations</h1>

        <div class="row">
            <div class="col-md-4 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-exams-subject-instructions', params: { subject : 'mathematics' } }">
                    <div class="card module__content shadow-sm qualified">
                        <div class="module__content--head">
                            <h5 class="title">Mathematics</h5>
                            <span class="icon fas fa-lock-open"></span>
                        </div>
                        <div class="module__content--body">
                            <p class="text">You've qualified to write this exam. Click to begin</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-md-4 col-lg-3 module">
                <nuxt-link to="#">
                    <div class="card module__content shadow-sm completed">
                        <div class="module__content--head">
                            <h5 class="title">Mathematics</h5>
                            <span class="icon fas fa-certificate"></span>
                        </div>
                        <div class="module__content--body">
                            <p class="text">Congratulations! You've completed this examination.</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-4 col-lg-3 module">
                <nuxt-link to="#">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">English Language</h5>
                            <span class="icon fas fa-lock"></span>
                        </div>
                        <div class="module__content--body">
                            <p class="text">Complete 20% of the exercises to take the exam. </p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-md-4 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'mathematics' } }">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">Basic Coding</h5>
                            <span class="icon fas fa-lock"></span>
                        </div>
                        <div class="module__content--body">
                            <p class="text">Complete 50% of the exercises to take the exam. </p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-md-4 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'mathematics' } }">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">Financial Intelligence  </h5>
                            <span class="icon fas fa-lock"></span>
                        </div>
                        <div class="module__content--body">
                            <p class="text">Complete 70% of the exercises to take the exam. </p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
        layout : 'dashboard',
        data(){
            return {
                title : 'Exams | Children That Change the World',
                    
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
	}
</script>

<style lang="scss" scoped>

	.container {
        padding: 1rem;

        .module {
            &__content {
                border: none;
                padding: 1.25rem;
                background-color: gray;
                color: $white;
                transition: transform .1s;
                cursor: not-allowed;
                margin-bottom: 1.5rem;

                &.qualified {
                    cursor: pointer;
                    background-color: $white;
                    color: $primary;

                    &:hover {
                        transform: translate(.1rem, .1rem);
                    }
                }

                &.completed {
                    background-color: $white;
                    color: $primary;
                }

                &--head {

                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1.2rem;

                    .title {
                        font-size: 1.2rem;
                        margin-bottom: 0;
                    }

                    .icon {
                        line-height: 1.5;
                    }
                }

                &--body {
                    .text {
                        font-size: .8rem;
                        margin-bottom: 0;
                        color: lightgray;
                    }
                }

                
            }
        }
    }	
    
    @media (max-width: 575.98px) {  }

    @media (min-width: 576px) and (max-width: 767.98px) {  }

    @media (min-width: 768px) and (max-width: 991.98px) {  }

    @media (min-width: 992px) and (max-width: 1199.98px) {  }

    @media (min-width: 1200px) {  }

</style>
