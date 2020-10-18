<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>

    import Header from '@/components/nav/Header'
    import Footer from '@/components/nav/Footer'

    export default {
        data(){
            return {

            }
        },
        
        components : { Header, Footer },

        created(){
            // AOS.init();

        },

        methods : {
        }
    }
</script>

<style lang="scss">
    * {
        font-family: 'Rubik', sans-serif;
    }
</style>
