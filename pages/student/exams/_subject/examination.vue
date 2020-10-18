<template>
    <div class="container">
        <h1 class="h3 mb-4 text-gray-800">Examination: Mathematics </h1>

        <div class="row examination">
            <div class="col-md-12 col-lg-8 examination__questions" v-if="true">
                <div class="card shadow">
                    <div class="examination__questions--progress">
                        <div class="current">
                            <small>Your Progress</small>
                            <small>3 question(s) answered out of 10</small>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                {{ 25 }}%
                            </div>
                        </div>
                    </div>

                    <div class="examination__questions--questions">
                        <div class="question">
                            <h4 class="num">Question 1:</h4>
                            <h1 class="que">What is the summation of the sum of angles in a triangle and angle on a straight line?</h1>

                            <div class="options">
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">One</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Two</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Three</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Four</span>
                                </label>
                            </div>
                        </div>

                        <div class="question">
                            <h4 class="num">Question 2:</h4>
                            <h1 class="que">What is lorem kfgkkgg gkgog g gk  g  gj ividfidfjifnsjdujtkdufguef the summation of the sum of angles in a triangle and angle on a straight line?</h1>

                            <div class="options">
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">One</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Two</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Three</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Four</span>
                                </label>
                            </div>
                        </div>

                        <div class="question">
                            <h4 class="num">Question 3:</h4>
                            <h1 class="que">What is the summation of the sum of angles in a triangle and angle on a straight line?</h1>

                            <div class="options">
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">One</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Two</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Three</span>
                                </label>
                                <label class="option">
                                    <input type="radio" name="option">
                                    <span class="checkmark"></span>
                                    <span class="choice">Four</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="examination__questions--submit">
                        <div class="ml-auto">
                            <button class="btn">Submit</button>
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
                title : ''    
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
            this.getTitle();
        },

        methods : {
            getTitle(){
                this.title = this.$route.params.subject+' | Children That Change The World'
            },

        }
	}
</script>

<style lang="scss" scoped>
    .container {
        padding: 1rem;

        .examination {
            display: flex;
            align-items: flex-start;
            margin-top: 3rem;

            &__questions {
                
                margin-bottom: 2rem;

                .card {
                    padding: 2rem 3rem;
                    border: none;
                }

                &--progress {
                    
                    margin-bottom: 5rem;

                    .current{
                        display: flex;
                        margin-bottom: .5rem;
                        justify-content: space-between;
                    }

                    .progress{
                        &-bar {
                            background-color: $primary;
                        }
                    }
                }

                &--questions {
                    
                    .question {
                        margin-bottom: 2rem;

                        .num{
                            font-size: .8rem;
                        }
                        .que{
                            font-size: 1.2rem;
                        }
                        .options {
                            padding: 1rem;

                            .option {                                        
                                display: block;
                                position: relative;
                                margin-bottom: 1rem;
                                cursor: pointer;
                                font-size: 1rem;
                                user-select: none;

                                .choice {
                                    position: relative;
                                    margin-left: 2rem;
                                    font-size: 1rem;
                                    bottom: .2rem;
                                }
                            
                                input {
                                    cursor: pointer;
                                    position: absolute;
                                    opacity: 0;
                                    height: 0;
                                    width: 0;
                                }

                                .checkmark {
                                    position: absolute;
                                    // top: .9rem;
                                    height: 1rem;
                                    width: 1.05rem;
                                    border-radius: 50%;
                                    background-color: lightgray;
                                }

                                &:hover input ~ .checkmark {
                                    background-color: #ccc;
                                }

                                input:checked ~ .checkmark {
                                    background-color: $primary;
                                }

                                .checkmark:after {
                                    content: "";
                                    position: absolute;
                                    display: none;
                                }

                                input:checked ~ .checkmark:after {
                                    display: block;
                                }

                                .checkmark:after {
                                    top: .25rem;
                                    left: .3rem;
                                    width: .5rem;
                                    height: .5rem;
                                    border-radius: 50%;
                                    background: #fff;
                                }
                            }
                        }
                    }
                }

                &--submit {
                    .btn {
                        background-color: $primary;
                        color: $white;
                        
                        &:hover {
                            background-color: $dark;
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