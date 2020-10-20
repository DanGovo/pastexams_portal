<template>
  <div>
    <main>
      <div class="container-fluid">
        <h3 class="mt-4">Admin Panel</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">Faculties</li>
        </ol>
        <div class="row">
          <div class="col-xl-10 offset-1">
            <div class="card mb-3">
              <div class="card-header d-flex">
                <span>
                  <i class="fas fa-chart-area mr-1"></i>
                  Faculties Management
                </span>
                <button
                  class="btn btn-primary btn-sm ml-auto"
                  @click="showNewFacultyModal"
                >
                  <span class="fa fa-plus"></span> Add Faculty
                </button>
              </div>

              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Code</td>
                      <td>Name</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(faculty, index) in faculties" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ faculty.code }}</td>
                      <td>{{ faculty.name }}</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm"
                          @click="editFaculty(faculty)"
                        >
                          <span class="fa fa-edit"></span>
                          Edit
                        </button>
                        <button
                          class="btn btn-danger btn-sm"
                          @click="deleteFaculty(faculty)"
                        >
                          <span class="fa fa-trash"></span>
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <b-modal ref="newFacultyModal" hide-footer title="Add New Faculty">
          <div class="d-block">
            <form v-on:submit.prevent="createFaculty">
              <div class="form-group">
                <label for="code">Faculty Code</label>
                <input
                  type="text"
                  v-model="facultyData.code"
                  class="form-control"
                  id="code"
                  placeholder="Enter faculty code"
                />
                <div class="invalid-feedback" v-if="errors.code">
                  {{ errors.code[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Faculty Name</label>

                <input
                  v-model="facultyData.name"
                  class="form-control"
                  id="name"
                  placeholder="Enter faculty name"
                />
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
              </div>
              <hr />
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-default"
                  @click="hideNewFacultyModal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  <span class="fa fa-check"></span> Save
                </button>
              </div>
            </form>
          </div>
        </b-modal>
        <b-modal ref="editFacultyModal" hide-footer title="Edit Faculty">
          <div class="d-block">
            <form @submit.prevent="updateFaculty">
              <div class="form-group">
                <label for="code">Faculty Code</label>
                <input
                  type="text"
                  v-model="editFacultyData.code"
                  class="form-control"
                  id="code"
                />
                <div class="invalid-feedback" v-if="errors.code">
                  {{ errors.code[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Faculty Name</label>

                <input
                  v-model="editFacultyData.name"
                  class="form-control"
                  id="name"
                  rows="2"
                />
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
              </div>
              <hr />
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-default"
                  @click="hideEditFacultyModal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  <span class="fa fa-check"></span> Update
                </button>
              </div>
            </form>
          </div>
        </b-modal>
      </div>
    </main>
  </div>
</template>

<script>
import * as facultyService from "/home/dan/Sites/pastexams/resources/js/services/faculty_service.js";
export default {
  name: "faculty",
  data() {
    return {
      faculties: [],
      facultyData: {
        code: "",
        name: "",
      },

      editFacultyData: {},
      errors: {},
    };
  },
  mounted() {
    this.loadFaculties();
  },
  methods: {
    loadFaculties: async function () {
      try {
        const response = await facultyService.loadFaculties();
        this.faculties = response.data.data;
        //console.log(this.faculties);
        //console.log(this.response);
      } catch (error) {
          console.log(''+error)
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    hideNewFacultyModal() {
      this.$refs.newFacultyModal.hide();
    },

    showNewFacultyModal() {
      this.$refs.newFacultyModal.show();
    },

    createFaculty: async function () {
      let formData = new FormData();
      formData.append("code", this.facultyData.code);
      formData.append("name", this.facultyData.name);

      try {
        const response = await facultyService.createFaculty(formData);
        this.faculties.unshift(response.data);
        this.hideNewFacultyModal();
        this.flashMessage.success({
          message: "Faculty created successfully",
          time: 5000,
        });

        this.facultyData = {
          code: "",
          name: "",
        };
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
      }
    },
    deleteFaculty: async function (faculty) {
      if (!window.confirm(`Are you sure want to delete ${faculty.name}?`)) {
        return;
      }
      try {
        await facultyService.deleteFaculty(faculty.id);
        this.faculties = this.faculties.filter((obj) => {
          return obj.id != faculty.id;
        });
        this.flashMessage.success({
          message: "Faculty deleted successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    hideEditFacultyModal() {
      this.$refs.editFacultyModal.hide();
    },
    showEditFacultyModal() {
      this.$refs.editFacultyModal.show();
    },
    editFaculty(faculty) {
      this.editFacultyData = { ...faculty };
      this.showEditFacultyModal();
    },
    updateFaculty: async function () {
      try {
        const formData = new formData();
        formData.append("code", this.editFacultyData.code);
        formData.append("name", this.editFacultyData.name);
        formData.append("_method", "put");

        const response = await facultyService.updateFaculty(
          this.editFacultyData.id,
          formData
        );
        this.faculties.map((faculty) => {
          if (faculty.id == response.data.id) {
            for (let key in response.data) {
              faculty[key] = response.data[key];
            }
          }
        });
        this.hideEditFacultyModal();

        this.flashMessage.success({
          message: "Faculty updated successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
  },
};
</script>
