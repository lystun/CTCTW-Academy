<template>
    <div class="container">
        <h1 class="h3 mb-4 text-gray-800">Subjects</h1>

        <div class="row">
            <div class="col-md-6 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'mathematics' } }">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">Mathematics</h5>
                        </div>
                        <div class="module__content--body">
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 40%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text">40% Completed</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-6 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'english' } }">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">English Language</h5>
                        </div>
                        <div class="module__content--body">
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text">70% Completed</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-6 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'english' } }">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">English Language</h5>
                        </div>
                        <div class="module__content--body">
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text">70% Completed</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-6 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'english' } }">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">Financial Intelligence</h5>
                        </div>
                        <div class="module__content--body">
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text">10% Completed</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-6 col-lg-3 module">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'english' } }">
                    <div class="card module__content shadow-sm">
                        <div class="module__content--head">
                            <h5 class="title">Financial Intelligence</h5>
                        </div>
                        <div class="module__content--body">
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text">10% Completed</p>
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
                title : 'Subjects | Children That Change the World',
                    
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
                margin-bottom: 1.5rem;

                &:hover {
                    background: $primary;

                    &:hover .title, &:hover .text {
                        color: $white;
                    }
                }

                &--head {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1.2rem;

                    .title {
                        font-size: 1.1rem;
                        color: gray;
                        margin-bottom: 0;
                    }
                }

                &--body {
                    .text {
                        font-size: .7rem;
                        margin-bottom: 0;
                        color: gray;
                        margin-top: .3rem;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) { 

        .container {
            padding: 1rem;

            .module {
                &__content {

                    &--head {
                        .title {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }
    }

</style>