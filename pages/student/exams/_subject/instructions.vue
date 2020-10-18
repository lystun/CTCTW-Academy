<template>
    <div class="container">
        <h1 class="h3 mb-4 text-gray-800">Examination: Mathematics </h1>

        <div class="row examination">
            <div class="col-md-12 col-lg-8 examination__instructions">
                <div class="card shadow">
                    <div class="examination__instructions--head">
                        <h4 class="title"> 40 Questions | <span class="fas fa-stopwatch"></span> 60 Minutes </h4>
                        <h4 class="author"> Instructor: Lystun Test  </h4>
                    </div>

                    <div class="examination__instructions--ins">
                        <div class="head">
                            <h4 class="title">Instructions</h4>
                            <p class="text">Please, read the instructions carefully</p>
                        </div>

                        <ol class="list">
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</li>
                            <li>By injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything </li>
                        </ol>

                        <div class="start">
                            <nuxt-link :to="{ name: 'student-exams-subject-examination', params: { subject : 'mathematics' } }" class="btn">Start Exam</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

            <ExamAid />
            
        </div>
	</div>
</template>

<script>
    import ExamAid from '@/components/exam/ExamAid';
    
	export default {
        layout : 'dashboard',

        components : {
            ExamAid,
        },

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

        .examination {

            &__instructions {

                .card {
                    padding: 2rem 3rem;
                    border: none;
                }

                &--head {
                    margin-bottom: 3rem;

                    .title, .author {
                        font-size: 1rem;
                    }

                    .author {
                        font-size: .9rem;
                    }
                }

                &--ins {
                    .head {
                        margin-bottom: 2rem;

                        .title {
                            font-size: 1.1rem;
                            font-weight: bold;
                        }
                    }

                    .list {
                        margin-bottom: 3rem;

                        li {
                            margin-bottom: 1rem;
                        }
                    }

                    .start {
                        .btn {
                            background: $primary;
                            color: $white;

                            &:hover {
                                background: $dark;
                            }
                        }
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