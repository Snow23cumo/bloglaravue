<template>
  <section class="content">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Add New Category</h3>
          </div>
          <form role="form" @click.prevent="addCategory()">
            <div class="card-body">
              <div class="form-group">
                <label for="cat_name">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="cat_name"
                  v-model="form.cat_name"
                  placeholder="Enter category name"
                />
                <div class="text-danger"
                  v-if="form.errors.has('cat_name')"
                  v-html="form.errors.get('cat_name')"
                />
              </div>
            </div>

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </section>
</template>

<script>

import Form from "vform";

export default {
  name: "New.vue",

  data() {
    return {
      form: new Form({
        cat_name: "",
      }),
    };
  },
  methods: {
    addCategory() {
      this.form
        .post("/add-category")
        .then((response) => {
          this.$router.push("/category-list");
          Toast.fire({
              icon: 'success',
              title: 'Category Added Successfully'
          });
        })
        .catch(() => {});
    },
  },
};
</script>