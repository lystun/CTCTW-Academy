<template>
    <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Dashboard</h1>

        <div class="row">
    
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Subjects Completed</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">5</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-book fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
	</div>
</template>

<script>
	export default {
        layout : 'dashboard',

        data(){
            return {
                title : 'Student Dashboard | Children That Change the World',
                    
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