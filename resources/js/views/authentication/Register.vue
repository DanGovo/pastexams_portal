<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="card shadow-lg border-0 rounded-lg mt-5">
          <div class="card-header">
            <h3 class="text-center font-weight-light my-4">Create Account</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="small mb-1" for="firstname">First Name</label>
                    <input
                      class="form-control py-4"
                      id="firstname"
                      type="text"
                      v-model="user.firstname"
                      placeholder="Enter first name"
                      autofocus="autofocus"
                    />
                    <div class="invalid-feedback" v-if="errors.firstname">
                      {{ errors.firstname[0] }}
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="small mb-1" for="lastname">Last Name</label>
                    <input
                      class="form-control py-4"
                      id="lastname"
                      type="text"
                      v-model="user.lastname"
                      placeholder="Enter last name"
                    />
                    <div class="invalid-feedback" v-if="errors.lastname">
                      {{ errors.lastname[0] }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="small mb-1" for="regnumber">Reg Number</label>
                    <input
                      class="form-control py-4"
                      id="regnumber"
                      type="text"
                      placeholder="Enter student reg number"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="small mb-1" for="email">Email</label>
                    <input
                      class="form-control py-4"
                      id="email"
                      type="email"
                      v-model="user.email"
                      placeholder="Enter school email"
                    />
                    <div class="invalid-feedback" v-if="errors.email">
                      {{ errors.email[0] }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="small mb-1" for="password">Password</label>
                    <input
                      class="form-control py-4"
                      id="password"
                      type="password"
                      v-model="user.password"
                      placeholder="Enter password"
                    />
                    <div class="invalid-feedback" v-if="errors.password">
                      {{ errors.password[0] }}
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="small mb-1" for="password_confirmation"
                      >Confirm Password</label
                    >
                    <input
                      class="form-control py-4"
                      id="password_confirmation"
                      type="password"
                      v-model="user.password_confirmation"
                      placeholder="Confirm password"
                    />
                    <div
                      class="invalid-feedback"
                      v-if="errors.password_confirmation"
                    >
                      {{ errors.password_confirmation[0] }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group mt-4 mb-0">
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer text-center">
            <div class="small">
              <router-link to="/login"
                >Have an account? Go to login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as auth from "../../services/auth_service";
export default {
  name: "Register",
  created() {
    document.querySelector("body").style.backgroundColor = "#0c4d0b";
  },
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    register: async function () {
      try {
        await auth.register(this.user);
        this.error = {};
        this.$router.push("/login");
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 500:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000,
            });
            break;
          default:
            this.flashMessage.error({
              message: "Some error occured. Please try again!",
              time: 5000,
            });
            break;
        }
      }
    },
  },
};
</script>
