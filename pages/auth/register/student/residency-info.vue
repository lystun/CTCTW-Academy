<template>
    <div>
        <ResidencyInfo :info="info"  />
    </div>    
</template>

<script>

    import ResidencyInfo from '@/components/auth/ResidencyInfo'

    export default {
        layout : 'auth',
        components : { ResidencyInfo },

        data(){
            return {
                info : {
                    type : 'student',
                    link: "/auth/register",
                    image : 'student_signup2.png',
                    step : 2,
                    quote: "You and I possess within ourselves at every moment of our lives, under all circumstances, the power to transform the quality of our lives.",
                    author: "Werner Erhard"
                }

            }
        }
    }
</script>

<style>

</style>