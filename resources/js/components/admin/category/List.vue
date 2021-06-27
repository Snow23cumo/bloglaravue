<template>
  <section class="content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Category List</h3>
            <div class="text-right">
              <button class="btn btn-success">
                <router-link to="/add-category" class="text-light">Add Category</router-link>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table id="example2" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(category, index) in getallCategory"
                  :key="category.id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ category.cat_name }}</td>
                  <td>{{ category.created_at | timeformat }}</td>
                  <td>
                    <router-link class="btn btn-primary" :to="`/edit-category/${category.id}`">Edit</router-link>
                    <a
                      class="btn btn-danger"
                      @click="deleteCategory(category.id)"
                      >Delete</a
                    >
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Rendering engine</th>
                  <th>Browser</th>
                  <th>Platform(s)</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </section>
</template>

<script>
export default {
  name: "List.vue",

  mounted() {
    this.$store.dispatch("allCategory");
  },
  computed: {
    getallCategory() {
      return this.$store.getters.getCategory;
    },
  },
  methods: {
    deleteCategory(id) {
      axios.get("/delete-category/" + id).then(() => {
        this.$store.dispatch("allCategory");
        Toast.fire({
          icon: "success",
          title: "Category Deleted Successfully",
        });
      }).catch(() => {});
      
    },
  },
};
</script>