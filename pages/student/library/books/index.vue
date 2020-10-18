<template>
    <div class="container">
        <h1 class="h3 mb-4 text-gray-800">Library</h1>

        <div class="row">
            <div class="col-md-12"></div>
        </div>
	</div>
</template>

<script>
	export default {
        layout : 'dashboard',

        data(){
            return {
                title : 'Libarary - Books | Children That Change the World',
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
	.container {
        padding: 1rem;
    }

    @media (max-width: 575.98px) {  }

    @media (min-width: 576px) and (max-width: 767.98px) {  }

    @media (min-width: 768px) and (max-width: 991.98px) {  }

    @media (min-width: 992px) and (max-width: 1199.98px) {  }

    @media (min-width: 1200px) {  }

</style>