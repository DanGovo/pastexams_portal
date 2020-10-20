<template>
  <div>
    <main>
      <div class="container-fluid">
        <h3 class="mt-4">Admin Panel</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">Exampapers</li>
        </ol>
        <div class="row">
          <div class="col-xl-10 offset-1">
            <div class="card mb-3">
              <div class="card-header d-flex">
                <span>
                  <i class="fas fa-chart-area mr-1"></i>
                  Exampapers Management
                </span>
                <button
                  class="btn btn-primary btn-sm ml-auto"
                  @click="showNewExampaperModal"
                >
                  <span class="fa fa-plus"></span> Add Exampaper
                </button>
              </div>

              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Category</td>
                      <td>Course</td>
                      <td>Description</td>
                      <td>Exam Date</td>
                      <td>Exam Paper</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(exampaper, index) in exampapers" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ findCategory(exampaper.category_id) }}</td>
                      <td>{{ findCourse(exampaper.course_id) }}</td>
                      <td>{{ exampaper.name }}</td>
                      <td>{{ exampaper.year }}</td>
                      <td>{{ exampaper.paper }}</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm"
                          @click="editExampaper(exampaper)"
                        >
                          <span class="fa fa-edit"></span>
                          Edit
                        </button>
                        <button
                          class="btn btn-danger btn-sm"
                          @click="deleteExampaper(exampaper)"
                        >
                          <span class="fa fa-trash"></span>
                          Delete
                        </button>
                        <button class="btn btn-success btn-sm"
                        @click="downloadFile">
                          <span class="fa fa-download"></span>
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <b-modal ref="newExampaperModal" hide-footer title="Add Exam Paper">
          <div class="d-block">
            <form v-on:submit.prevent="createExampaper" enctype="multipart/form-data">
              <div class="form-group">
                <label for="category_id">Category</label>
                <select
                  v-model="exampaperData.category_id"
                  id="category_id"
                  class="form-control"
                >
                  <option value="">Choose Category...</option>
                  <option
                    v-for="(category, index) in categories"
                    :value="category.id"
                    :key="index"
                  >
                    {{ category.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.category_id">
                  {{ errors.category_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="course_id">Course</label>
                <select
                  v-model="exampaperData.course_id"
                  id="course_id"
                  class="form-control"
                >
                  <option value="">Choose Course...</option>
                  <option
                    v-for="(course, index) in courses"
                    :value="course.id"
                    :key="index"
                  >
                    {{ course.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.course_id">
                  {{ errors.course_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Exampaper Name</label>
                <input
                  type="text"
                  v-model="exampaperData.name"
                  class="form-control"
                  id="name"
                  placeholder="Enter exampaper name"
                />
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="year">Exam Date</label>
                <input
                  type="date"
                  v-model="exampaperData.year"
                  class="form-control"
                  id="year"
                  placeholder="Enter exampaper year"
                />
                <div class="invalid-feedback" v-if="errors.year">
                  {{ errors.year[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="paper">Choose exampaper</label>
                <div v-if="exampaperData.paper.name">
                  <img src="" ref="newExamPaperDisplay" class="w-150px" />
                </div>
                <input
                  type="file"
                  @change="attachPaper"
                  ref="newExamPaper"
                  class="form-control"
                  id="paper"
                />
                <div class="invalid-feedback" v-if="errors.paper">
                  {{ errors.paper[0] }}
                </div>
              </div>
              <hr />
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-default"
                  @click="hideNewExampaperModal"
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
        <b-modal ref="editExampaperModal" hide-footer title="Edit Exampaper">
          <div class="d-block">
            <form @submit.prevent="updateExampaper">
              <div class="form-group">
                <label for="course_id">Course</label>
                <select
                  v-model="editExampaperData.course_id"
                  id="course_id"
                  class="form-control"
                >
                  <option value="">Choose Course</option>
                  <option
                    v-for="(course, index) in courses"
                    :value="course.id"
                    :key="index"
                  >
                    {{ course.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.course_id">
                  {{ errors.course_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="code">Exampaper Code</label>
                <input
                  type="text"
                  v-model="editExampaperData.code"
                  class="form-control"
                  id="code"
                />
                <div class="invalid-feedback" v-if="errors.code">
                  {{ errors.code[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="name">Exampaper Name</label>
                <input
                  type="text"
                  v-model="editExampaperData.name"
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
                  @click="hideEditExampaperModal"
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
import * as exampaperService from "../services/exampaper_service.js";
import axios from 'axios';
export default {
  name: "exampaper",
  data() {
    return {
      categories: [],
      courses: [],
      exampapers: [],
      exampaperData: {
        category_id: "",
        course_id: "",
        name: "",
        year: "",
        paper: "",
      },

      editExampaperData: {},
      errors: {},
    };
  },
  mounted() {
    this.loadCategories();
    this.loadCourses();
    this.loadExampapers();
  },
  methods: {
    loadCourses: async function () {
      try {
        const response = await exampaperService.loadCourses();
        this.courses = response.data;
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    loadCategories: async function () {
      try {
        const response = await exampaperService.loadCategories();
        this.categories = response.data;
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    loadExampapers: async function () {
      try {
        const response = await exampaperService.loadExampapers();
        this.exampapers = response.data.data;
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    attachPaper() {
      this.exampaperData.paper = this.$refs.newExamPaper.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newExamPaperDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.exampaperData.paper);
    },
    hideNewExampaperModal() {
      this.$refs.newExampaperModal.hide();
    },

    showNewExampaperModal() {
      this.$refs.newExampaperModal.show();
    },
    createExampaper: async function () {
      let formData = new FormData();
      formData.append("category_id", this.exampaperData.category_id);
      formData.append("course_id", this.exampaperData.course_id);
      formData.append("name", this.exampaperData.name);
      formData.append("year", this.exampaperData.year);
      formData.append("paper", this.exampaperData.paper);

      try {
        const response = await exampaperService.createExampaper(formData);
        this.exampapers.unshift(response.data);
        this.hideNewExampaperModal();
        this.flashMessage.success({
          message: "Exampaper created successfully",
          time: 5000,
        });

        this.exampaperData = {
          category_id: "",
          course_id: "",
          name: "",
          year: "",
          paper: "",
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
    deleteExampaper: async function (exampaper) {
      if (!window.confirm(`Are you sure want to delete ${exampaper.name}?`)) {
        return;
      }
      try {
        await exampaperService.deleteExampaper(exampaper.id);
        this.exampapers = this.exampapers.filter((obj) => {
          return obj.id != exampaper.id;
        });
        this.flashMessage.success({
          message: "Exampaper deleted successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    hideEditExampaperModal() {
      this.$refs.editExampaperModal.hide();
    },
    showEditExampaperModal() {
      this.$refs.editExampaperModal.show();
    },
    editExampaper(exampaper) {
      this.editExampaperData = { ...exampaper };
      this.showEditExampaperModal();
    },
    updateExampaper: async function () {
      try {
        const formData = new formData();
        formData.append("category_id", this.editExampaperData.category_id);
        formData.append("course_id", this.editExampaperData.course_id);
        formData.append("name", this.editExampaperData.name);
        formData.append("year", this.editExampaperData.year);
        formData.append("paper", this.editExampaperData.paper);
        formData.append("_method", "put");

        const response = await exampaperService.updateExampaper(
          this.editExampaperData.id,
          formData
        );
        this.exampapers.map((exampaper) => {
          if (exampaper.id == response.data.id) {
            for (let key in response.data) {
              exampaper[key] = response.data[key];
            }
          }
        });
        this.hideEditExampaperModal();

        this.flashMessage.success({
          message: "Exampaper updated successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    findCourse(course_id) {
      let course_name = "";
      this.courses.forEach((course) => {
        if (course.id == course_id) {
          course_name = course.name;
        }
      });
      return course_name;
    },
    findCategory(category_id) {
      let category_name = "";
      this.categories.forEach((category) => {
        if (category.id == category_id) {
          category_name = category.name;
        }
      });
      return category_name;
    },
    downloadFile(exampaper){
      axios.get('/api/download/'+exampaper, {responseType: 'arraybuffer'}).then(res=>{
        let blob = new Blob([res.data], {type:'application/*'})
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = exampaper
        link.click();
      })
    }
    // getDownload: async function(){
    //     return Storage(downlod(exampaper.paper));
    // }
  },
};
</script>
