<template>
  <div>
    <main>
      <div class="container-fluid">
        <h3 class="mt-4">Admin Panel</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">Courses</li>
        </ol>
        <div class="row">
          <div class="col-xl-10 offset-1">
            <div class="card mb-3">
              <div class="card-header d-flex">
                <span>
                  <i class="fas fa-chart-area mr-1"></i>
                  Courses Management
                </span>
                <button
                  class="btn btn-primary btn-sm ml-auto"
                  @click="showNewCourseModal"
                >
                  <span class="fa fa-plus"></span> Add Course
                </button>
              </div>

              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Department</td>
                      <td>Course Code</td>
                      <td>Course Name</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(course, index) in courses" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ findDepartment(course.department_id) }}</td>
                      <td>{{ course.code }}</td>
                      <td>{{ course.name }}</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm"
                          @click="editCourse(course)"
                        >
                          <span class="fa fa-edit"></span>
                          Edit
                        </button>
                        <button
                          class="btn btn-danger btn-sm"
                          @click="deleteCourse(course)"
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
        <b-modal ref="newCourseModal" hide-footer title="Add New Course">
          <div class="d-block">
            <form v-on:submit.prevent="createCourse">
              <div class="form-group">
                <label for="department_id">Department</label>
                <select
                  v-model="courseData.department_id"
                  id="department_id"
                  class="form-control"
                >
                  <option value="">Choose Department</option>
                  <option
                    v-for="(department, index) in departments"
                    :value="department.id"
                    :key="index"
                  >
                    {{ department.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.department_id">
                  {{ errors.department_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="code">Course Code</label>
                <input
                  type="text"
                  v-model="courseData.code"
                  class="form-control"
                  id="code"
                  placeholder="Enter course code"
                />
                <div class="invalid-feedback" v-if="errors.code">
                  {{ errors.code[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Course Name</label>
                <input
                  type="text"
                  v-model="courseData.name"
                  class="form-control"
                  id="name"
                  placeholder="Enter course name"
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
                  @click="hideNewCourseModal"
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
        <b-modal ref="editCourseModal" hide-footer title="Edit Course">
          <div class="d-block">
            <form @submit.prevent="updateCourse">
              <div class="form-group">
                <label for="department_id">Department</label>
                <select
                  v-model="editCourseData.department_id"
                  id="department_id"
                  class="form-control"
                >
                  <option value="">Choose Department</option>
                  <option
                    v-for="(department, index) in departments"
                    :value="department.id"
                    :key="index"
                  >
                    {{ department.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.department_id">
                  {{ errors.department_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="code">Course Code</label>
                <input
                  type="text"
                  v-model="editCourseData.code"
                  class="form-control"
                  id="code"
                />
                <div class="invalid-feedback" v-if="errors.code">
                  {{ errors.code[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Course Name</label>
                <input
                  type="text"
                  v-model="editCourseData.name"
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
                  @click="hideEditCourseModal"
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
import * as courseService from "../services/course_service.js";
export default {
  name: "course",
  data() {
    return {
      departments: [],
      courses: [],
      courseData: {
        department_id: "",
        code: "",
        name: "",
      },

      editCourseData: {},
      errors: {},
    };
  },
  mounted() {
    this.loadDepartments();
    this.loadCourses();
  },
  methods: {
    loadDepartments: async function () {
      try {
        const response = await courseService.loadDepartments();
        this.departments = response.data;
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    loadCourses: async function () {
      try {
        const response = await courseService.loadCourses();
        this.courses = response.data.data;
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    hideNewCourseModal() {
      this.$refs.newCourseModal.hide();
    },

    showNewCourseModal() {
      this.$refs.newCourseModal.show();
    },

    createCourse: async function () {
      let formData = new FormData();
      formData.append("department_id", this.courseData.department_id);
      formData.append("code", this.courseData.code);
      formData.append("name", this.courseData.name);

      try {
        const response = await courseService.createCourse(formData);
        this.courses.unshift(response.data);
        this.hideNewCourseModal();
        this.flashMessage.success({
          message: "Course created successfully",
          time: 5000,
        });

        this.courseData = {
          department_id: "",
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
    deleteCourse: async function (course) {
      if (!window.confirm(`Are you sure want to delete ${course.name}?`)) {
        return;
      }
      try {
        await courseService.deleteCourse(course.id);
        this.courses = this.courses.filter((obj) => {
          return obj.id != course.id;
        });
        this.flashMessage.success({
          message: "Course deleted successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    hideEditCourseModal() {
      this.$refs.editCourseModal.hide();
    },
    showEditCourseModal() {
      this.$refs.editCourseModal.show();
    },
    editCourse(course) {
      this.editCourseData = { ...course };
      this.showEditCourseModal();
    },
    updateCourse: async function () {
      try {
        const formData = new formData();
        formData.append("department_id", this.editCourseData.department_id);
        formData.append("code", this.editCourseData.code);
        formData.append("name", this.editCourseData.name);
        formData.append("_method", "put");

        const response = await courseService.updateCourse(
          this.editCourseData.id,
          formData
        );
        this.courses.map((course) => {
          if (course.id == response.data.id) {
            for (let key in response.data) {
              course[key] = response.data[key];
            }
          }
        });
        this.hideEditCourseModal();

        this.flashMessage.success({
          message: "Course updated successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    findDepartment(department_id) {
      let department_name = "";
      this.departments.forEach((department) => {
        if (department.id == department_id) {
          department_name = department.name;
        }
      });
      return department_name;
    },
  },
};
</script>
