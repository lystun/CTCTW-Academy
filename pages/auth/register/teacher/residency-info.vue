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
                    type : 'teacher',
                    link: "/auth/register",
                    image : 'teacher_signup2.png',
                    step : 2,
                    quote: "The greatest sign of a success for a teacher…is to be able to say, “The children are now working as if I did not exist.” ",
                    author: "Maria Montessori"
                }

            }
        }
    }
</script>

<style>

</style>