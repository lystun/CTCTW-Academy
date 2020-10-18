<template>
    <div class="col-md-12 col-lg-4 card shadow lesson__list">
        <h5 class="mb-4 lesson__list--header">Subject Content</h5>
    
        <div class="accordion" id="subject">
            <div class="card shadow-sm lesson__list--topic">
                <a class="btn btn-link btn-block text-left card-header" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h6 class="title">Topic Two: Angles and Shapes </h6>
                    <small class="time">2/4 | 25 Minutes </small>
                </a>
                <div id="collapseOne" class="collapse lessons show" data-parent="#subject">
                    <div class="card-body lessons__lesson">
                        <ul class="list-group">
                            <li>
                                <label class="wrap">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>1. </span> Introduction to angles and shapes</nuxt-link>
                            </li>
                            <li>
                                <label class="wrap">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>2. </span>Calculating area of solid shape</nuxt-link>
                            </li>
                            <li>
                                <label class="wrap">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>3. </span> Calculating angles of tight spot</nuxt-link>
                            </li>
                            <li>
                                <label class="wrap">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>4. </span> Calculating angles of tight spot</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm lesson__list--topic">
                <a class="btn btn-link btn-block text-left card-header" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <h6 class="title">Topic Two: Angles and Shapes </h6>
                    <small class="time">1/3 | 15 Minutes </small>
                </a>
                <div id="collapseTwo" class="collapse lessons" data-parent="#subject">
                    <div class="card-body lessons__lesson">
                        <ul class="list-group">
                            <li>
                                <label class="wrap">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>1. </span> Introduction to angles and shapes</nuxt-link>
                            </li>
                            <li>
                                <label class="wrap">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>2. </span>Calculating area of solid shape</nuxt-link>
                            </li>
                            <li>
                                <label class="wrap">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>3. </span> Calculating angles of tight spot</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm lesson__list--topic">
                <a class="btn btn-link btn-block text-left card-header" type="button" data-toggle="collapse" data-target="#three" aria-expanded="false" aria-controls="three">
                    <h6 class="title">Topic Three: Logarithms </h6>
                    <small class="time">2/2 | 10 Minutes </small>
                </a>
                <div id="three" class="collapse lessons" data-parent="#subject">
                    <div class="card-body lessons__lesson">
                        <ul class="list-group">
                            <li>
                                <label class="wrap">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>1. </span> Introduction to number bases and logarithms </nuxt-link>
                            </li>
                            <li>
                                <label class="wrap">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>2. </span>Multiplication of number in base two</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm  lesson__list--topic">
                <a class="btn btn-link btn-block text-left card-header" type="button" data-toggle="collapse" data-target="#four" aria-expanded="false" aria-controls="four">
                    <h6 class="m-0 font-weight-bold">Topic Four: Conditionals and All </h6>
                    <small>2/2 | 10 Minutes </small>
                </a>
                <div id="four" class="collapse lessons" data-parent="#subject">
                    <div class="card-body lessons__lesson">
                        <ul class="list-group">
                            <li>
                                <label class="wrap">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>1. </span> Introduction to number bases and logarithms </nuxt-link>
                            </li>
                            <li>
                                <label class="wrap">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <nuxt-link to="#" class=""><span>2. </span>Multiplication of number in base two</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .lesson {

        &__list{

            padding: 1rem;
            overflow: auto;
            border: none;

            /* width */
            &::-webkit-scrollbar {
                width: .4rem;

                &-track{
                    box-shadow: inset 0 0 5px gray; 
                    border-radius: 10px;
                }

                &-thumb{
                    background: gray; 
                    border-radius: .8rem;

                    &:hover {
                        background: $primary; 
                    }
                }
            }
    
            &--header {
                font-size: 1.3rem;
            }

            &--topic {

                margin-bottom: .5rem;
                border: none;

                .card-header {

                    .title{
                        margin: 0;
                        font-weight: 500;

                        &:hover, &:active {
                            color: $primary;
                        }
                    }

                    .time {
                        font-size: .7rem;
                    }

                }

                .lessons {

                    &__lesson {
                        ul.list-group {
                            li {
                                display: block;
                                margin-bottom: .5rem;

                                a {
                                    color: $dark;
                                    text-decoration: none;
                                    font-size: .9rem;
                                    position: relative;
                                    left: 2rem;
                                    bottom: .2rem;

                                    &:hover {
                                        color: $primary;
                                    }
                                }
                                
                                .wrap {
                                    
                                    display: block;
                                    position: relative;
                                    margin-bottom: 0;
                                    cursor: pointer;
                                    font-size: 1rem;
                                    user-select: none;
                                
                                    /* Hide the browser's default checkbox */
                                    input {
                                        cursor: pointer;
                                        position: absolute;
                                        opacity: 0;
                                        height: 0;
                                        width: 0;
                                    }

                                    /* Create a custom checkbox */
                                    .checkmark {
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        bottom: 0;
                                        height: 1.1rem;
                                        width: 1.2rem;
                                        border-radius: .2rem;
                                        background-color: lightgray;
                                    }

                                    /* On mouse-over, add a grey background color */
                                    &:hover input ~ .checkmark {
                                        background-color: #ccc;
                                    }

                                    /* When the checkbox is checked, add a blue background */
                                    input:checked ~ .checkmark {
                                        background-color: $primary;
                                    }

                                    /* Create the checkmark/indicator (hidden when not checked) */
                                    .checkmark:after {
                                        content: "";
                                        position: absolute;
                                        display: none;
                                    }

                                    /* Show the checkmark when checked */
                                    input:checked ~ .checkmark:after {
                                        display: block;
                                    }

                                    /* Style the checkmark/indicator */
                                    .checkmark:after {
                                        left: 5.5px;
                                        top: 1.2px;
                                        width: 7px;
                                        height: 12px;
                                        border: solid white;
                                        border-width: 0 3px 3px 0;
                                        -webkit-transform: rotate(45deg);
                                        -ms-transform: rotate(45deg);
                                        transform: rotate(45deg);
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
    }

    @media (max-width: 575.98px) { 
        .lesson {

            &__list{

                padding: 1rem;
                margin: 0 .8rem;
        
                &--header {
                    font-size: 1.2rem;
                }

                &--topic {

                    margin-bottom: .5rem;

                    .card-header {

                        .title{
                            margin: 0;
                        }

                        .time {
                            font-size: .7rem;
                        }

                    }

                    .lessons {

                        &__lesson {
                            ul.list-group {
                                li {
                                    
                                    margin-bottom: .5rem;
                                    
                                    .wrap {
                                        
                                        display: block;
                                        position: relative;
                                        margin-bottom: 0;
                                        cursor: pointer;
                                        font-size: 1rem;
                                        user-select: none;
                                

                                        /* Create a custom checkbox */
                                        .checkmark {
                                            height: 1rem;
                                            width: 1.1rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }

    @media (max-width: 1199.98px) { 
        
    }

</style>