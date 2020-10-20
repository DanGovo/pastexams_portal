<template>
  <div>
      <main>
    <div class="container-fluid">
      <h1 class="mt-4">Dashboard</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
          <li class="breadcrumb-item active">Overview</li>
      </ol>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card bg-primary text-white mb-4">
            <div class="card-body">Primary Card</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <a class="small text-white stretched-link" href="#"
                >View Details</a
              >
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-warning text-white mb-4">
            <div class="card-body">Warning Card</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <a class="small text-white stretched-link" href="#"
                >View Details</a
              >
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-success text-white mb-4">
            <div class="card-body">Success Card</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <a class="small text-white stretched-link" href="#"
                >View Details</a
              >
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-danger text-white mb-4">
            <div class="card-body">Danger Card</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <a class="small text-white stretched-link" href="#"
                >View Details</a
              >
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </main>
  </div>
</template>

<script>
import * as user from '../services/user_service';
export default {
    methods: {
        librarianScope: async function(){
            try {
                const response = await user.librarianScope();
                console.log(response);
            } catch (error) {
                console.log(''+error, error.response.statu);
            }
        },
        adminScope: async function(){
            try {
                const response = await user.adminScope();
                console.log(response);
            } catch (error) {
                console.log(''+error, error.response.statu);
            }
        },
         studentScope: async function(){
            try {
                const response = await user.studentScope();
                console.log(response);
            } catch (error) {
                console.log(''+error, error.response.statu);
            }
        }
    }
}
</script>
