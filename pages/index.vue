<template>
    <div class="home">
        <section class="home__banner">
            <div class="container">
                <div class="row banner">
                    <div class="col-md-6 banner__text" data-aos="fade-right">
                        <h1>Remote &amp; Interactive Learning </h1>
                        <p>Learn from the comfort of your home and interact with classmates and teachers from all parts of the country and beyond.</p>
                        <nuxt-link to="/auth/register" class="btn">Get Started </nuxt-link>
                    </div>
                    <div class="col-md-6 banner__img" data-aos="fade-left">
                        <img src="~assets/images/home/banner_img-1.jpg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="home__features">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 home__features--header">
                        <h1>Why Choose Us</h1>
                    </div>
                </div>
                <div class="row">                    
                    <div class="col-md-6 home__features--feature">
                        <div class="card" data-aos="fade-right" data-aos-duration="2000">
                            <div class="card-body">
                                <span class="fas fa-book-reader icon"></span>
                                <div class="text">
                                    <h4>Course Variety</h4>
                                    <p>Our course variety affords students the opportunity to learn vital things that the conventional school system does not teach. </p>
                                </div>
                            </div>
                        </div>

                        <div class="card" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                            <div class="card-body">
                                <span class="fas fa-layer-group icon"></span>
                                <div class="text">
                                    <h4>Standardized Progressive Learning</h4>
                                    <p>All course content is in line with government approved curriculum, and the standardized tests and exams help prepare students for WAEC, JAMB and NECO.</p>
                                </div>
                            </div>
                        </div>

                        <div class="card" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
                            <div class="card-body">
                                <span class="fas fa-certificate icon"></span>
                                <div class="text">
                                    <h4>e-Certificates</h4>
                                    <p>Earn certification for each progress made.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 home__features--img">
                        <img src="~assets/images/home/features.png" data-aos="fade-left" alt="" >
                    </div>
                </div>
            </div>
        </section>

        <section class="home__about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 home__about--img ">
                        <img src="~assets/images/home/about-us.png" data-aos="fade-right" alt="">
                    </div>
                    <div class="col-lg-5 col-md-6 offset-lg-1 home__about--text" data-aos="fade-left">
                        <h2>Know More About Us</h2>
                        <p>The academy is a response to mitigate the effect of the closure of schools due to the global pandemic of the year 2020. Please, add further details about the academy. And be very succinct </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="home__explore">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 home__explore--text" data-aos="fade-right">
                        <h4>The Academy gives student access to textbooks and subjects taught by verified teachers.</h4>
                        <p>Explore some of the subjects available for you.</p>
                        <nuxt-link to="/" class="btn">Explore</nuxt-link>
                    </div>

                    <div class="col-md-7 home__explore--img" data-aos="fade-left">
                        <img src="~assets/images/home/explore-1.jpg" alt="">
                        <img src="~assets/images/home/explore-2.jpg" alt="">
                        <img src="~assets/images/home/explore-3.jpg" alt="">
                        <!-- <img src="~assets/images/home/explore-4.jpg" alt=""> -->
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                title : 'Home Page | Children That Change The World'
            }
        },

        head(){
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

    .home {

        margin-top: 5rem;

        &__banner {
            
            background: $secondary;
            padding: 3rem 1rem;

            .banner {

                &__text{

                    margin-bottom: 3rem;
                    
                    h1{
                        font-size: 2rem;
                        font-weight: bolder;
                        color: $primary;
                        margin-bottom: 1rem;
                    }

                    p {
                        margin-bottom: 2rem;
                        font-size: 1rem;
                    }

                    .btn {
                        background: $primary;
                        color: $white;
                        padding: .6rem 2rem;
                        border-radius: 5rem 5rem 0 5rem;

                        &:hover{
                            background: $dark;
                        }
                    }
                }

                &__img{
                    img {
                        border-radius: 7rem 0 0 0;
                    }
                }
            }
        }

        &__features{

            padding: 3rem 1rem;
            align-items: center;

            &--header {
                margin-bottom: 1rem;

                h1 {
                    font-size: 1.2rem;
                    font-weight: 600;
                }
            }
            
            &--feature {

                .card {

                    border: none;
                    margin-bottom: .5rem;

                    &-body {
                        display: flex;
                        padding: 2rem .5rem .5rem .5rem;
                        align-items: flex-start;
                
                        .icon {
                            display: block;
                            color: $white;
                            margin-right: .5rem;
                            background: $primary;
                            padding: 1rem 1rem;
                            border-radius: 5rem;
                            font-size: 1rem;
                        }

                        .text {

                            margin-left: 1rem;

                            h4 {
                                font-size: 1rem;
                                font-weight: 600;
                            }

                            p{
                                font-size: .9rem;
                            }
                        }
                    }
                }
            }

            &--img {
                
                display: none;

                img {
                    max-width: 65%;
                }
            }

        }

        &__about {

            padding: 3rem 1rem;

            &--img{
                
                margin-bottom: 1rem;
                text-align: center;

                img {
                    width: 90%;
                }
            }

            &--text{

                background: $secondary;
                border-radius: 5rem 0 0 0;
                padding: 4rem 2.5rem;

                h2 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: $primary;
                    margin-bottom: 1.5rem;
                }

                p {
                    font-size: 1rem;
                    color: $dark;
                }

            }   
        }

        &__explore {

            padding: 3rem 1rem;
            background: url('~assets/images/home/explore_bg.png');

            &--text{

                color: $white;
                padding: 3rem 1rem;

                h4 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 1rem;
                    margin-bottom: 2rem;
                }

                .btn {
                    background: $white;
                    color: $primary;
                    padding: .75rem 2.5rem;
                    border-radius: 5rem 5rem 0 5rem;

                    &:hover{
                        background: $dark;
                    }
                }

            }   

            &--img{

                display: grid;
                grid-gap: 2rem;
                grid-template-columns: auto auto auto auto auto auto;
                grid-template-rows: auto auto auto auto auto auto;
                display: none;
                
                img {

                    &:nth-child(1){
                        grid-area: 2/1/4/3;
                        width: 100%;
                    }
                    &:nth-child(2){
                        grid-area: 1/4/3/6;
                        width: 100%;
                    }
                    &:nth-child(3){
                        grid-area: 3/3/6/6;
                        width: 100%;
                    }
                    &:nth-child(4){
                        grid-area: 3/2/7/4;
                        width: 100%;
                    }
                }

            }

        }

    }
    

    @media (min-width: 576px) {
        
        .home {
            &__banner {
                padding: 4rem 1rem;

                .banner {

                    &__text{
                        margin-bottom: 4rem;
                      
                        .btn {
                            padding: .7rem 2rem;
                        }
                    }

                    &__img{
                        
                        text-align: center;

                        img {
                            width: 70%;
                        }
                    }
                }
            }


        }

    }

    @media (min-width: 768px) {
        .home {
            &__banner {
                
                display: flex;
                height: 60vh;
                align-items: center;
                padding: 4rem 1rem;

                .banner {
                    
                    display: flex;
                    align-items: center;

                    &__text{

                        margin-bottom: 1rem;
                      
                        .btn {
                            padding: .7rem 2rem;
                        }
                    }

                    &__img{
                        
                        text-align: center;

                        img {
                            width: 100%;
                        }
                    }
                }
            }

            &__features{

                display: flex;
                align-items: center;

                .row{
                    display: flex;
                    align-items: center;
                }

                &--header {
                    margin-bottom: 2rem;

                    h1 {
                        font-size: 1.2rem;
                        font-weight: 600;
                    }
                }
                
                &--feature {

                    .card {

                        margin-bottom: .5rem;

                        &-body {
                            padding: .5rem .5rem .5rem .5rem;
                    
                            .icon {
                                display: block;
                                color: $white;
                                margin-right: .5rem;
                                background: $primary;
                                padding: 1rem 1rem;
                                border-radius: 5rem;
                                font-size: 1rem;
                            }

                            .text {

                                margin-left: 1rem;

                                h4 {
                                    font-size: 1rem;
                                    font-weight: 600;
                                }

                                p{
                                    font-size: .9rem;
                                }
                            }
                        }
                    }
                }

                &--img {
                    
                    display: block;
                    text-align: right;

                    img {
                        max-width: 80%;
                    }
                }

            }

            &__about {

                padding: 3rem 1rem;

                .row {
                    align-items: center;
                }

                &--img{
                    
                    margin-bottom: 1rem;

                    img {
                        width: 100%;
                    }
                }

                &--text{

                    padding: 3rem 2rem 1rem 3rem;

                    h2 {
                        font-size: 1.3rem;
                        margin-bottom: 1.3rem;
                    }

                    p {
                        font-size: .9rem;
                    }

                }   
            }

            &__explore {

                padding: 3rem 1rem;

                .row {
                    align-items: center;
                }

                &--text{

                    padding: 3rem 1rem;

                    h4 {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }

                    p {
                        font-size: 1rem;
                        margin-bottom: 2rem;
                    }

                }   

                &--img{

                    display: block;
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: auto auto auto auto auto auto;
                    grid-template-rows: auto auto auto auto auto auto;
                    
                    img {

                        &:nth-child(1){
                            grid-area: 2/1/4/3;
                            width: 100%;
                        }
                        &:nth-child(2){
                            grid-area: 1/4/3/6;
                            width: 100%;
                        }
                        &:nth-child(3){
                            grid-area: 3/3/6/6;
                            width: 100%;
                        }
                        &:nth-child(4){
                            grid-area: 3/2/7/4;
                            width: 100%;
                        }
                    }

                }

            }

        }
    }

    @media (min-width: 992px) {
        .home {
            &__banner {
                
                display: flex;
                height: 80vh;
                align-items: center;
                padding: 4rem 1rem;

                .banner {
                    
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &__text{

                        margin-bottom: 1rem;

                        h1{
                            font-size: 2.7rem;
                            margin-bottom: 1rem;
                        }

                        p {
                            margin-bottom: 3rem;
                            font-size: 1rem;
                        }
                      
                        .btn {
                            padding: .75rem 2.5rem;
                        }
                    }

                    &__img{
                        
                        text-align: right;

                        img {
                            width: 90%;
                        }
                    }
                }
            }

            &__features{

                padding: 5rem .5rem;
                align-items: center;

                &--header {
                    margin-bottom: 2rem;

                    h1 {
                        font-size: 1.5rem;
                    }
                }
                
                &--feature {

                    .card {

                        &-body {
                            display: flex;
                            padding: 1rem 1rem 1rem 0rem;
                            align-items: flex-start;
                    
                            .icon {
                                padding: 1rem 1rem;
                                font-size: 1.5rem;
                            }

                            .text {

                                margin-left: 1.5rem;

                                h4 {
                                    font-size: 1.2rem;
                                    font-weight: 600;
                                }

                                p{
                                    font-size: 1rem;
                                }
                            }
                        }
                    }
                }

                &--img {
                    
                    img {
                        max-width: 70%;
                    }
                }

            }

            &__about {

                padding: 3rem 1rem;

                &--img{
                    
                    margin-bottom: 1rem;

                    img {
                        width: 90%;
                    }
                }

                &--text{

                    padding: 5rem 2rem 3rem 3rem;

                    h2 {
                        font-size: 1.5rem;
                        margin-bottom: 1.5rem;
                    }

                    p {
                        font-size: 1rem;
                    }

                }   
            }

            &__explore {

                padding: 4rem .5rem;

                &--text{
                    
                    padding: 3rem 2rem;

                    h4 {
                        font-size: 1.5rem;
                    }

                    p {
                        font-size: 1rem;
                        margin-bottom: 3rem;
                    }

                }   


            }


        }
    }

    @media (min-width: 1200px) {
        .home {
            margin-top: 6rem;

            &__banner {
                
                display: flex;
                align-items: center;
                background: $secondary;
                height: 90vh;

                .banner {

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &__text{

                        padding-right: 3rem;
                        
                        h1{
                            font-size: 3.5rem;
                            font-weight: bolder;
                            color: $primary;
                            margin-bottom: 1rem;
                        }

                        p {
                            margin-bottom: 3rem;
                            font-size: 1.2rem;
                        }

                        .btn {
                            background: $primary;
                            color: $white;
                            padding: 1rem 3.5rem;
                            border-radius: 5rem 5rem 0 5rem;

                            &:hover{
                                background: $dark;
                            }
                        }
                    }

                    &__img{
                        img {
                            border-radius: 15rem 0 0;
                        }
                    }
                }
            }

            &__features{

                padding: 5rem .5rem;
                align-items: center;

                .row{
                    display: flex;
                    align-items: center;
                }
        
                &--header {
                    margin-bottom: 2rem;

                    h1 {
                        font-size: 2rem;
                        font-weight: 600;
                    }
                }
                
                &--feature {

                    .card {

                        border: none;
                        margin-bottom: 1rem;

                        &-body {
                            display: flex;
                            padding: 2rem 3rem 1rem 0rem;
                            align-items: flex-start;
                    
                            .icon {
                                display: block;
                                color: $white;
                                margin-right: 1.5rem;
                                background: $primary;
                                padding: 1.2rem 1.2rem;
                                border-radius: 5rem;
                                font-size: 2rem;
                            }

                            .text {

                                margin-left: 1.5rem;
                                text-align: left;

                                h4 {
                                    font-size: 1.2rem;
                                    font-weight: 600;
                                }

                                p{
                                    font-size: 1rem;
                                }
                            }
                        }
                    }
                }

                &--img {
                    
                    text-align: center;

                    img {
                        max-width: 65%;
                    }
                }

            }

            &__about {

                padding: 5rem .5rem;

                &--img{
                    img {
                        width: 100%;
                    }
                }

                &--text{

                    padding: 6rem 5rem;

                    h2 {
                        font-size: 2.5rem;
                        font-weight: 600;
                        margin-bottom: 2rem;
                    }

                    p {
                        font-size: 1rem;
                    }

                }   
            }

            &__explore {

                padding: 5rem .5rem;

                &--text{

                    padding: 3rem 2rem;

                    h4 {
                        font-size: 1.7rem;
                        margin-bottom: 1rem;
                    }

                    p {
                        font-size: 1rem;
                        margin-bottom: 3rem;
                    }

                }   

                &--img{

                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: auto auto auto auto auto auto;
                    grid-template-rows: auto auto auto auto auto auto;
                    
                    img {

                        &:nth-child(1){
                            grid-area: 2/1/4/3;
                            width: 100%;
                        }
                        &:nth-child(2){
                            grid-area: 1/4/3/6;
                            width: 100%;
                        }
                        &:nth-child(3){
                            grid-area: 3/3/6/6;
                            width: 100%;
                        }
                        &:nth-child(4){
                            grid-area: 3/2/7/4;
                            width: 100%;
                        }
                    }

                }

            }

        }
    }

</style>