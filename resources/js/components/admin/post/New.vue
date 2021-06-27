<template>
  <section class="content">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Add New Post</h3>
          </div>
          <form
            role="form"
            enctype="multipart/form-data"
            @submit.prevent="addNewPost()"
          >
            <div class="card-body">
              <div class="form-group">
                <label for="postId">Post Title</label>
                <input
                  type="text"
                  id="postId"
                  class="form-control"
                  name="title"
                  v-model="form.title"
                  placeholder="Enter category name"
                />
                <div
                  class="text-danger"
                  v-if="form.errors.has('title')"
                  v-html="form.errors.get('title')"
                />
              </div>
              <div class="form-group">
                <label for="postId">Post Description</label>
                <markdown-editor v-model="form.description"></markdown-editor>
                <div
                  class="text-danger"
                  v-if="form.errors.has('description')"
                  v-html="form.errors.get('description')"
                />
              </div>

              <div class="form-group">
                <label for="postId">Category Select</label>
                <select
                  class="form-control"
                  name="cat_id"
                  v-model="form.cat_id"
                >
                  <option disabled value="">Select One</option>
                  <option
                    v-for="category in getallCategory"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.cat_name }}
                  </option>
                </select>
              </div>
              <div
                class="text-danger"
                v-if="form.errors.has('cat_id')"
                v-html="form.errors.get('cat_id')"
              />
              <div class="form-group">
                <input type="file" name="photo" @change="changePhoto($event)" />
                <img :src="form.photo" alt="" width="100" height="100" />
                <div
                  class="text-danger"
                  v-if="form.errors.has('photo')"
                  v-html="form.errors.get('photo')"
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
        title: "",
        cat_id: "",
        description: "",
        photo: "",
      }),
    };
  },

  mounted() {
    this.$store.dispatch("allCategory");
  },

  computed: {
    getallCategory() {
      return this.$store.getters.getCategory;
    },
  },
  methods: {
    changePhoto(event) {
      let file = event.target.files[0];

      if (file.size > 1048576) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.photo = event.target.result;
          console.log(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    addNewPost() {
      this.form
        .post("/save-post")
        .then((response) => {
          this.$router.push("/post-list");
          Toast.fire({
            icon: "success",
            title: "Post Added Successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>