<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Post List</h3>
            <div class="text-right">
              <button class="btn btn-success">
                <router-link to="/add-post" class="text-light">
                Add new post
                </router-link>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table id="example2" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(post, index) in allPost" :key="post.id">
                  <td>{{ index + 1 }}</td>
                  <td v-if="post.user">{{ post.user.name }}</td>
                  <td v-if="post.category">{{ post.category.cat_name }}</td>
                  <td>{{ post.title | sortlength(20, "---") }}</td>
                  <td>{{ post.description | sortlength(40, "....") }}</td>
                  <td>
                    <img
                      :src="ourImage(post.photo)"
                      alt=""
                      width="40"
                      height="50"
                    />
                  </td>
                  <td>
                    <router-link class="btn btn-primary" :to="`/edit-post/${post.id}`"
                      >Edit</router-link>
                  </td>
                  <td>
                     <a
                      @click.prevent="deletePost(post.id)"
                      class="btn btn-danger"
                      >Delete</a
                    >
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Edit</th>
                  <th>Delete</th>
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
    this.$store.dispatch("getAllPost");
  },
  computed: {
    allPost() {
      return this.$store.getters.getAllPost;
    },
  },
  methods: {
    ourImage(img) {
      return "uploadimage/" + img;
    },
    deletePost(id) {
      axios.get("/delete-post/" + id).then((response) => {
        this.$store.dispatch("getAllPost");
        Toast.fire({
          icon: "success",
          title: "Post Deleted Successfully",
        }).catch(() => {});
      });
    },
  },
};
</script>

