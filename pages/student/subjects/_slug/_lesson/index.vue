<template>
    <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Dashboard</h1>

        <div class="row">


        </div>
	</div>
</template>

<script>
	export default {
        layout : 'dashboard',

        data(){
            return {
                title : 'Subjects | Children That Change the World',
                    
            }
        },

        head() {
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
	.container-fluid {
        padding: 1rem 1.5rem;
    }

</style>