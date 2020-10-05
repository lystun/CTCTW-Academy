<template>
    <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Subjects</h1>

        <div class="row">
            <div class="col-md-4 col-lg-3">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'mathematics' } }">
                    <div class="card shadow mb-3">
                        <img src="~assets/images/subjects/subject.png" class="card-img-top" alt="/">
                        <div class="card-body">
                            <h5 class="card-title">Mathematics</h5>
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="card-text"><small class="text-muted"> 50% Completed </small></p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-4 col-lg-3">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'english' } }">
                    <div class="card shadow mb-3">
                        <img src="~assets/images/subjects/english.png" class="card-img-top" alt="/">
                        <div class="card-body">
                            <h5 class="card-title">Englsh Language</h5>
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 40%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="card-text"><small class="text-muted"> 40% Completed </small></p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-4 col-lg-3">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'finance' } }">
                    <div class="card shadow mb-3">
                        <img src="~assets/images/subjects/finance.png" class="card-img-top" alt="/">
                        <div class="card-body">
                            <h5 class="card-title">Financial Intelligence</h5>
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="card-text"><small class="text-muted"> 90% Completed </small></p>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <div class="col-md-4 col-lg-3">
                <nuxt-link :to="{ name: 'student-subjects-slug', params: { slug : 'none' } }">
                    <div class="card shadow mb-3">
                        <img src="~assets/images/subjects/subject1.png" class="card-img-top" alt="/">
                        <div class="card-body">
                            <h5 class="card-title">None</h5>
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 10%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="card-text"><small class="text-muted"> 10% Completed </small></p>
                        </div>
                    </div>
                </nuxt-link>
            </div>


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

    .card {
        border: none;
    }

</style>