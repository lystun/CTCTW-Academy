<template>
    <div class="col-md-12 col-lg-4 examination__aid">
        <div class="card shadow examination__aid--timer">
            <div>
                <button class="btn">
                    <span class="time">90<span>m</span> </span>
                </button>
                <span class="divider">:</span>
                <button class="btn">
                    <span class="time">60<span>s</span> </span>
                </button>
            </div>
            <div>
                <span class="fas fa-stopwatch" :class="{ almost: false }" ></span> 
            </div>                  
        </div>
        <div class="card shadow examination__aid--preview">
            <ul>
                <li><button class="btn answered">1</button></li>
                <li><button class="btn answered">2</button></li>
                <li><button class="btn answered">3</button></li>
                <li><button class="btn answered">44</button></li>
                <li><button class="btn">45</button></li>
                <li><button class="btn">56</button></li>
                <li><button class="btn">58</button></li>
                <li><button class="btn">50</button></li>
                <li><button class="btn">1</button></li>
                <li><button class="btn">2</button></li>
                <li><button class="btn">3</button></li>
                <li><button class="btn">44</button></li>
                <li><button class="btn">45</button></li>
                <li><button class="btn">56</button></li>
                <li><button class="btn">58</button></li>
                <li><button class="btn">50</button></li>
            </ul>
        </div>
    </div>
</template>

<script>


</script>

<style lang="scss" scoped>

    .examination {
        &__aid {

            .card {
                padding: 2rem;
                border: none;
            }

            &--timer {
                margin-bottom: 2rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                .fa-stopwatch {
                    font-size: 3rem;

                    &.almost {

                        animation: blink 1s ease-in-out infinite;

                        @keyframes blink {
                            from {
                                transform: scale(1, 1);
                            }
                            to {
                                transform: scale(1.1, 1.1);
                            }
                        }
                    }
                }

                .divider {
                    margin: 0 .3rem;
                    font-size: 1.5rem;
                }

                .btn {
                    background: $primary;
                    color: $white;

                    .time {
                        font-size: 1.5rem;

                        span {                            
                            font-size: .8rem;
                        }

                    }
                }
            }

            &--preview {                    
                ul {
                    margin-bottom: 0;
                    padding-left: 0;

                    li {
                        display: inline;
                        text-align: justify;

                        .btn {
                            width: 2rem;
                            margin-bottom: .3rem;
                            padding: 0.3rem 0.5rem;
                            background: lightgray;
                            color: $white;
                            font-size: .7rem;

                            &.answered {
                                background: $primary;
                            }
                        }
                    }
                }
            }
        }
    }
</style>