<template>
    <div class="body" id="page-top">
        <div id="wrapper">
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <!-- Sidebar - Brand -->
                <nuxt-link id="brand" to="/student/dashboard" class="sidebar-brand d-flex align-items-center justify-content-center">
                    <div class="sidebar-brand-icon">
                        <img src="/favicon.ico" alt="">
                    </div>
                    <div class="sidebar-brand-text mx-3">CTCTW</div>
                </nuxt-link>

                <hr class="sidebar-divider my-0">

                <!-- Nav Item - Dashboard -->
                <li class="nav-item">
                    <nuxt-link to="/student/dashboard" class="nav-link" active-class="active"> 
                        <i class="fas fa-fw fa-tachometer-alt"></i> <span>Dashboard</span>
                    </nuxt-link>
                </li>

                <hr class="sidebar-divider">
                <div class="sidebar-heading">
                    Academics
                </div>

                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/student/subjects" active-class="active" data-toggle="collapse" data-target="#subjects" aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-book-reader"></i> <span>Subjects</span>
                    </nuxt-link>
                    <div id="subjects" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <nuxt-link active-class="active" to="/student/subjects/mathematics" class="collapse-item">Mathematics</nuxt-link>
                            <nuxt-link active-class="active" to="/student/subjects/english-language" class="collapse-item">English Language</nuxt-link>
                            <nuxt-link active-class="active" to="/student/subjects/financial-intelligence" class="collapse-item">Financial Intelligence</nuxt-link>
                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <nuxt-link to="/student/exams" class="nav-link" active-class="active"> 
                        <i class="fas fa-fw fa-graduation-cap"></i> <span>Exam</span>
                    </nuxt-link>
                </li>

                <hr class="sidebar-divider">
                <div class="sidebar-heading">
                    Resources
                </div>
                <li class="nav-item">
                    <nuxt-link to="/student/library/books" class="nav-link" active-class="active"> 
                        <i class="fas fa-fw fa-book-open"></i><span>Books</span>
                    </nuxt-link>
                </li>
                <!-- <li class="nav-item">
                    <nuxt-link to="/subjects" class="nav-link" active-class="active"> 
                        <i class="fas fa-fw fa-archive"></i><span>Podcasts</span>
                    </nuxt-link>
                </li> -->

                <hr class="sidebar-divider">
                <div class="sidebar-heading">
                    Settings
                </div>

                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#settings" aria-expanded="true" aria-controls="settings">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Settings</span>
                    </a>
                    <div id="settings" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">JSS1:</h6>
                            <nuxt-link to="#" class="collapse-item">Profile</nuxt-link>
                        </div>
                    </div>
                </li>

                <hr class="sidebar-divider d-none d-md-block">

                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"> </button>
                </div>

            </ul>

            <div id="content-wrapper" class="d-flex flex-column wrapper">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>

                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown no-arrow mx-1">
                                <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-bell fa-fw"></i>
                                    <!-- Counter - Alerts -->
                                    <span class="badge badge-danger badge-counter">3+</span>
                                </a>
                                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                                    <h6 class="dropdown-header"> Notifications </h6>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="mr-3">
                                            <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="small text-gray-500">September 28, 2020</div>
                                            <span class="font-weight-bold">A response has been mae on your comment</span>
                                        </div>
                                    </a>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="mr-3">
                                            <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="small text-gray-500">September 27, 2020</div>
                                            You've made it to the next class
                                        </div>
                                    </a>
                                    <a class="dropdown-item text-center small text-gray-500" href="#">Show All Notifications</a>
                                </div>
                            </li>

                           <li class="nav-item dropdown no-arrow mx-1">
                                <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-envelope fa-fw"></i>
                                    <!-- Counter - Messages -->
                                    <span class="badge badge-danger badge-counter">2</span>
                                </a>
                                <!-- Dropdown - Messages -->
                                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                                    <h6 class="dropdown-header"> Messages </h6>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="dropdown-list-image mr-3">
                                            <img class="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="">
                                            <div class="status-indicator bg-success"></div>
                                        </div>
                                        <div class="font-weight-bold">
                                            <div class="text-truncate">Could you please accelerate the work?</div>
                                            <div class="small text-gray-500">Olajide Ajibade · 58m</div>
                                        </div>
                                    </a>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="dropdown-list-image mr-3">
                                            <img class="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="">
                                            <div class="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div class="text-truncate">Amazing project manager</div>
                                            <div class="small text-gray-500">Funto Adesola · 1d</div>
                                        </div>
                                    </a>
                                    <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                </div>

                            </li>

                            <div class="topbar-divider d-none d-sm-block"></div>

                            <li class="nav-item dropdown no-arrow">
                                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">Lystun</span>
                                    <img class="img-profile rounded-circle" src="~assets/images/avatars/1.png">
                                </a>
                                <!-- Dropdown - User Information -->
                                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                    <nuxt-link to="/" class="dropdown-item" >
                                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Profile
                                    </nuxt-link>
                                    <nuxt-link to="/" class="dropdown-item">
                                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Settings
                                    </nuxt-link>
                                    <nuxt-link to="/" class="dropdown-item">
                                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Activity Log </nuxt-link>
                                    <div class="dropdown-divider"></div>
                                    <nuxt-link to="/" class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div class="page-content">
                        <Nuxt />
                    </div>
                </div>

                <footer class="sticky-footer">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; CTCTW Academy {{ year }} </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

        <!-- Logout Modal-->
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
    
    export default {

        head () {
            return {
                title: 'Dashboard | Children That Change the World',
                script : [
                    { src : '/js/jquery.js' },
                    { src : '/js/sb-admin.js'},
                ]
                
            }
        },

        data(){
            return {
                year : null
            }
        },

        created(){
            this.year = new Date().getFullYear()
        },

        methods : {

        }
    }

    
</script>

<style lang="scss">

    @import '~assets/css/sb-admin.css';

    #content-wrapper {
        background: $secondary;
    }

    .wrapper {
        background-color: $secondary!important;
    }

    .sidebar {
        background: $primary;

        .nav-item {

            .collapse .collapse-inner {

                .collapse-item.active {
                    color : $primary;
                }
            }   

            .nav-link {
                &.active {
                    color: #fff;
                    font-weight: 700;

                    i {
                        color: #fff;
                    }
                }
            }
        }
    }

    .btn-primary {
        background-color: $primary;
        border: 1px solid $primary;
    }

    .input-group > .form-control {
        box-shadow: none;
        border: none;
        background: rgba(gray, .1);

        &:hover {
            border: none;
        }

    }

    .btn-link {
        color: $primary;

        &:hover {
            color: $primary;
        }
    }

    .topbar .dropdown-list .dropdown-header {
        background-color: $primary;
        border: 1px solid $primary;
    }



   
</style>