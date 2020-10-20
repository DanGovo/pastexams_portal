<template>
  <div>
    <main>
      <div class="container-fluid">
        <h3 class="mt-4">Admin Panel</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">Departments</li>
        </ol>
        <div class="row">
          <div class="col-xl-10 offset-1">
            <div class="card mb-3">
              <div class="card-header d-flex">
                <span>
                  <i class="fas fa-chart-area mr-1"></i>
                  Departments Management
                </span>
                <button
                  class="btn btn-primary btn-sm ml-auto"
                  @click="showNewDepartmentModal"
                >
                  <span class="fa fa-plus"></span> Add Department
                </button>
              </div>

              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Faculty</td>
                      <td>Department Code</td>
                      <td>Department Name</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(department, index) in departments" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ findFaculty(department.faculty_id) }}</td>
                      <td>{{ department.code }}</td>
                      <td>{{ department.name }}</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm"
                          @click="editDepartment(department)"
                        >
                          <span class="fa fa-edit"></span>
                          Edit
                        </button>
                        <button
                          class="btn btn-danger btn-sm"
                          @click="deleteDepartment(department)"
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
        <b-modal
          ref="newDepartmentModal"
          hide-footer
          title="Add New Department"
        >
          <div class="d-block">
            <form v-on:submit.prevent="createDepartment">
              <div class="form-group">
                <label for="faculty_id">Faculty</label>
                <select
                  v-model="departmentData.faculty_id"
                  id="faculty_id"
                  class="form-control"
                >
                  <option value="">Choose Faculty</option>
                  <option
                    v-for="(faculty, index) in faculties"
                    :value="faculty.id"
                    :key="index"
                  >
                    {{ faculty.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.faculty_id">
                  {{ errors.faculty_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="code">Department Code</label>
                <input
                  type="text"
                  v-model="departmentData.code"
                  class="form-control"
                  id="code"
                  placeholder="Enter department code"
                />
                <div class="invalid-feedback" v-if="errors.code">
                  {{ errors.code[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Department Name</label>
                <input
                  type="text"
                  v-model="departmentData.name"
                  class="form-control"
                  id="name"
                  placeholder="Enter department name"
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
                  @click="hideNewDepartmentModal"
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
        <b-modal ref="editDepartmentModal" hide-footer title="Edit Department">
          <div class="d-block">
            <form @submit.prevent="updateDepartment">
              <div class="form-group">
                <label for="faculty_id">Faculty</label>
                <select
                  v-model="editDepartmentData.faculty_id"
                  id="faculty_id"
                  class="form-control"
                >
                  <option value="">Choose Faculty</option>
                  <option
                    v-for="(faculty, index) in faculties"
                    :value="faculty.id"
                    :key="index"
                  >
                    {{ faculty.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.faculty_id">
                  {{ errors.faculty_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="code">Department Code</label>
                <input
                  type="text"
                  v-model="editDepartmentData.code"
                  class="form-control"
                  id="code"
                />
                <div class="invalid-feedback" v-if="errors.code">
                  {{ errors.code[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Department Name</label>
                <input
                  type="text"
                  v-model="editDepartmentData.name"
                  class="form-control"
                  id="name"
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
                  @click="hideEditDepartmentModal"
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
import * as departmentService from "../services/department_service.js";
export default {
  name: "department",
  data() {
    return {
      faculties: [],
      departments: [],
      departmentData: {
        faculty_id: "",
        code: "",
        name: "",
      },

      editDepartmentData: {},
      errors: {},
    };
  },
  mounted() {
    this.loadFaculties();
    this.loadDepartments();
  },
  methods: {
    loadFaculties: async function () {
      try {
        const response = await departmentService.loadFaculties();
        this.faculties = response.data;
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    loadDepartments: async function () {
      try {
        const response = await departmentService.loadDepartments();
        this.departments = response.data.data;
      } catch (error) {
        //console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    hideNewDepartmentModal() {
      this.$refs.newDepartmentModal.hide();
    },

    showNewDepartmentModal() {
      this.$refs.newDepartmentModal.show();
    },

    createDepartment: async function () {
      let formData = new FormData();
      formData.append("faculty_id", this.departmentData.faculty_id);
      formData.append("code", this.departmentData.code);
      formData.append("name", this.departmentData.name);

      try {
        const response = await departmentService.createDepartment(formData);
        this.departments.unshift(response.data);
        this.hideNewDepartmentModal();
        this.flashMessage.success({
          message: "Department created successfully",
          time: 5000,
        });

        this.departmentData = {
          faculty_id: "",
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
    deleteDepartment: async function (department) {
      if (!window.confirm(`Are you sure want to delete ${department.name}?`)) {
        return;
      }
      try {
        await departmentService.deleteDepartment(department.id);
        this.departments = this.departments.filter((obj) => {
          return obj.id != department.id;
        });
        this.flashMessage.success({
          message: "Department deleted successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    hideEditDepartmentModal() {
      this.$refs.editDepartmentModal.hide();
    },
    showEditDepartmentModal() {
      this.$refs.editDepartmentModal.show();
    },
    editDepartment(department) {
      this.editDepartmentData = { ...department };
      this.showEditDepartmentModal();
    },
    updateDepartment: async function () {
      try {
        const formData = new formData();
        formData.append("faculty_id", this.editDepartmentData.faculty_id);
        formData.append("code", this.editDepartmentData.code);
        formData.append("name", this.editDepartmentData.name);
        formData.append("_method", "put");

        const response = await departmentService.updateDepartment(
          this.editDepartmentData.id,
          formData
        );
        this.departments.map((department) => {
          if (department.id == response.data.id) {
            for (let key in response.data) {
              department[key] = response.data[key];
            }
          }
        });
        this.hideEditDepartmentModal();

        this.flashMessage.success({
          message: "Department updated successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    findFaculty(faculty_id) {
      let faculty_name = "";
      this.faculties.forEach((faculty) => {
        if (faculty.id == faculty_id) {
          faculty_name = faculty.name;
        }
      });
      return faculty_name;
    },
  },
};
</script>
