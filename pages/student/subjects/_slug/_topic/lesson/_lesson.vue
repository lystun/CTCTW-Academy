<template>
    <div class="container">
        <h3 class="mb-4 text-gray-800 header">Lesson - {{ this.topic }}</h3>

        <div class="row lesson">
            <div class="col-md-12 col-lg-8 lesson__content">
                <div class="lesson__content--video">
                    <video controls width="100%" height="auto">
                        <source src="~assets/videos/formulas.mp4" type="video/mp4">
                    </video>
                </div>

                <div class="lesson__content--questions" v-show="false">
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quod, molestiae deserunt, maxime eaque tempora aspernatur enim in sunt autem repudiandae, cupiditate exercitationem cum ex eos at officia qui aliquam?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quod, molestiae deserunt, maxime eaque tempora aspernatur enim in sunt autem repudiandae, cupiditate exercitationem cum ex eos at officia qui aliquam?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quod, molestiae deserunt, maxime eaque tempora aspernatur enim in sunt autem repudiandae, cupiditate exercitationem cum ex eos at officia qui aliquam?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quod, molestiae deserunt, maxime eaque tempora aspernatur enim in sunt autem repudiandae, cupiditate exercitationem cum ex eos at officia qui aliquam?</p>
                    </div>
                </div>
            </div>

            <SubjectContent />
        </div>

	</div>
</template>

<script>
    import SubjectContent from '@/components/subject/SubjectContent';
    
	export default {
        layout : 'dashboard',

        components : {
            SubjectContent,
        },

        data(){
            return {
                topic : ''
                    
            }
        },

        head() {
            return {
                title: this.topic +' | Children That Change the World',
                meta: [
                    { hid: 'description', name: 'ctctw', content: 'CTCTW equips students in underserved university communities like Ogbomoso with 21st-century relevant skills that will inspire innovation, creativity and invention.' }
                ]
            }
        },

        created(){
            this.topic = this.$route.params.slug+' | '+this.$route.params.lesson
        }
	}
</script>

<style lang="scss" scoped>
	.container {

        padding: 1rem;

        .lesson {

            display: flex;
            align-items: flex-start;
            margin-top: 2rem;

            &__content{
                
                margin-bottom: 2rem;

                &--video {

                }
            }            
        }

    }

    @media (max-width: 575.98px) { 
        .container {
            
            .header {
                font-size: 1.2rem;
            }

            .lesson {

                margin-top: 1rem;

                &__content{
                
                }            
            }

        }
    }

    @media (max-width: 767.98px) {  }

    @media (max-width: 991.98px) {  }

    @media (max-width: 1199.98px) {  }

</style>