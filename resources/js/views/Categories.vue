<template>
  <div>
    <main>
      <div class="container-fluid">
        <h3 class="mt-4">Admin Panel</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">Categories</li>
        </ol>
        <div class="row">
          <div class="col-xl-10 offset-1">
            <div class="card mb-3">
              <div class="card-header d-flex">
                <span>
                  <i class="fas fa-chart-area mr-1"></i>
                  Categories Management
                </span>
                <button
                  class="btn btn-primary btn-sm ml-auto"
                  @click="showNewCategoryModal"
                >
                  <span class="fa fa-plus"></span> Add Category
                </button>
              </div>

              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Name</td>
                      <td>Description</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(category, index) in categories" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ category.name }}</td>
                      <td>{{ category.description }}</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm"
                          @click="editCategory(category)"
                        >
                          <span class="fa fa-edit"></span>
                          Edit
                        </button>
                        <button
                          class="btn btn-danger btn-sm"
                          @click="deleteCategory(category)"
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
        <b-modal ref="newCategoryModal" hide-footer title="Add New Category">
          <div class="d-block">
            <form v-on:submit.prevent="createCategory">
              <div class="form-group">
                <label for="name">Category Name</label>
                <input
                  type="text"
                  v-model="categoryData.name"
                  class="form-control"
                  id="name"
                  placeholder="Enter category name"
                />
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="description">Category Description</label>

                <textarea
                  v-model="categoryData.description"
                  class="form-control"
                  id="description"
                  rows="2"
                  placeholder="Enter category description"
                />
                <div class="invalid-feedback" v-if="errors.description">
                  {{ errors.description[0] }}
                </div>
              </div>
              <hr />
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-default"
                  @click="hideNewCategoryModal"
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
        <b-modal ref="editCategoryModal" hide-footer title="Edit Category">
          <div class="d-block">
            <form @submit.prevent="updateCategory">
              <div class="form-group">
                <label for="name">Category Name</label>
                <input
                  type="text"
                  v-model="editCategoryData.name"
                  class="form-control"
                  id="name"
                />
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="description">Category Description</label>

                <textarea
                  v-model="editCategoryData.description"
                  class="form-control"
                  id="description"
                  rows="2"
                />
                <div class="invalid-feedback" v-if="errors.description">
                  {{ errors.description[0] }}
                </div>
              </div>
              <hr />
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-default"
                  @click="hideEditCategoryModal"
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
import * as categoryService from "/home/dan/Sites/pastexams/resources/js/services/category_service.js";
export default {
  name: "category",
  data() {
    return {
      categories: [],
      categoryData: {
        name: "",
        description: "",
      },

      editCategoryData: {},
      errors: {},
    };
  },
  mounted() {
    this.loadCategories();
  },
  methods: {
    loadCategories: async function () {
      try {
        const response = await categoryService.loadCategories();
        this.categories = response.data.data;
        //console.log(this.categories);
        //console.log(this.response);
      } catch (error) {
          console.log(''+error)
        this.flashMessage.error({
          message: "Some error occured. Please refresh your browser!",
          time: 5000,
        });
      }
    },
    hideNewCategoryModal() {
      this.$refs.newCategoryModal.hide();
    },

    showNewCategoryModal() {
      this.$refs.newCategoryModal.show();
    },

    createCategory: async function () {
      let formData = new FormData();
      formData.append("name", this.categoryData.name);
      formData.append("description", this.categoryData.description);

      try {
        const response = await categoryService.createCategory(formData);
        this.categories.unshift(response.data);
        this.hideNewCategoryModal();
        this.flashMessage.success({
          message: "Category created successfully",
          time: 5000,
        });

        this.categoryData = {
          name: "",
          description: "",
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
    deleteCategory: async function (category) {
      if (!window.confirm(`Are you sure want to delete ${category.name}?`)) {
        return;
      }
      try {
        await categoryService.deleteCategory(category.id);
        this.categories = this.categories.filter((obj) => {
          return obj.id != category.id;
        });
        this.flashMessage.success({
          message: "Category deleted successfully.",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    hideEditCategoryModal() {
      this.$refs.editCategoryModal.hide();
    },
    showEditCategoryModal() {
      this.$refs.editCategoryModal.show();
    },
    editCategory(category) {
      this.editCategoryData = { ...category };
      this.showEditCategoryModal();
    },
    updateCategory: async function () {
      try {
        const formData = new formData();
        formData.append("name", this.editCategoryData.name);
        formData.append("description", this.editCategoryData.description);
        formData.append("_method", "put");

        const response = await categoryService.updateCategory(
          this.editCategoryData.id,
          formData
        );
        this.categories.map((category) => {
          if (category.id == response.data.id) {
            for (let key in response.data) {
              category[key] = response.data[key];
            }
          }
        });
        this.hideEditCategoryModal();

        this.flashMessage.success({
          message: "Category updated successfully.",
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
