<template>
    <div>
        <Completed :info="info"  />
    </div>    
</template>

<script>

    import Completed from '@/components/auth/Completed'

    export default {

        layout : 'auth',
        components : { Completed },

        data(){
            return {
                info : {
                    type : 'teacher',
                    link: "/teacher/dashboard",
                    text : "Please check your email, you'll be contacted for further processing",
                    image : 'teacher_signup.png',
                    quote: "Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.",
                    author: "Walter Cronkite"
                }

            }
        }
    }
</script>

<style>

</style>