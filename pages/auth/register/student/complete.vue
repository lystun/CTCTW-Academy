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
                    type : 'student',
                    link: "/student/dashboard",
                    image : 'student_signup.png',
                    text: 'Your account has been created successfully. Please check your email to verify your email address.',
                    quote: "What we learn with pleasure we never forget.",
                    author: "Alfred Mercer"
                }

            }
        }
    }
</script>

<style>

</style>