<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <div class="card shadow-lg border-0 rounded-lg mt-5">
          <div class="card-header">
            <h3 class="text-center font-weight-light my-4">
              Password Recovery
            </h3>
          </div>
          <div class="card-body">
            <div class="small mb-3 text-muted">
              Enter your email address and we will send you a link to reset your
              password.
            </div>
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label class="small mb-1" for="email">Email</label>
                <input
                  class="form-control py-4"
                  id="email"
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email address"
                />
                <div class="invalid-feedback" v-if="errors.email">
                  {{ errors.email[0] }}
                </div>
              </div>
              <div
                class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"
              >
                <router-link to="/login">Return to login</router-link>
                <button type="submit" class="btn btn-primary" ref="btnSubmit">Reset Password</button>
              </div>
            </form>
          </div>
          <div class="card-footer text-center">
            <div class="small">
              <router-link to="/register"
                >Need an account? Sign up!</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as auth from '../../services/auth_service';

export default {
  name: 'ResetPasswordRequest',
  data() {
    return {
      user:{
        email: ''
      },
      errors: {},
    }
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#0c4d0b";
  },
  methods: {
    onSubmit: async function(){
      try {
          this.disableSubmission(this.$refs.btnSubmit);
          this.errors = {};
        const response = await auth.resetPasswordRequest(this.user);
        this.flashMessage.success({
              message: response.data.message,
              time: 5000,
            });
            this.$router.push({name: 'reset-password', params:{email:this.user.email}});
      } catch (error) {
          switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          default:
            this.flashMessage.error({
              message: "Some error occured. Please try again!",
              time: 5000,
            });
            break;
        }
          this.enableSubmission(this.$refs.btnSubmit);
      }
    },
    disableSubmission(btn){
        btn.setAttribute('disabled', 'disbaled');
        this.btnOldHtml = btn.innerHtml;
        btn.innerHtml = '<span class="fa fa-spin"></span> Please wait...';
    },
    enableSubmission(btn){
        btn.removeAttribute('disabled');
        btn.innerHtml = this.btnOldHtml;
    },
  }
};
</script>
