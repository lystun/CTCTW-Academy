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
                    type : 'teacher',
                    link: "/auth/register",
                    image : 'teacher_signup.png',
                    step : 1,
                    quote: "Teach the children so it will not be necessary to teach the adults.",
                    author: "Abraham Lincoln"
                }

            }
        }
    }
</script>

<style>

</style>