<template>
    <div>
        <PersonalInfo :info="info"  />
    </div>    
</template>

<script>

    import PersonalInfo from '@/components/auth/PersonalInfo'
    export default {
        layout : 'auth',
        components : { PersonalInfo },

        data(){
            return {
                info : {
                    type : 'student',
                    link: "/auth/register",
                    image : 'student_signup.png',
                    step : 1,
                    quote: "May the next few months be a period of magnificent transformation.",
                    author: "Anonymous"
                }

            }
        }
    }
</script>

<style>

</style>