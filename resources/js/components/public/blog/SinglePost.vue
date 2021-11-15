<template>
    <span id="singlepost">
   <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article>
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#">{{singlepost.title}}</a></h3>
                    </div>
                    <img :src="`uploadimage/${singlepost.photo}`" alt="" width="300px" height="200px"/>
                  </div>
                  <p>
                   {{ singlepost.description }}
                  </p>
                 
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li v-if="singlepost.user"><i class="icon-user"></i><a href="#">{{singlepost.user.name}}</a></li>
                      <li v-if="singlepost.category"><i class="icon-folder-open"></i><a href="#">{{singlepost.category.cat_name}}</a></li>
                      
                    </ul>
                  </div>
                </div>
                
              </div>
            </article>
        </div>
        <blog-sidebar></blog-sidebar>
      </div>
      </div>
    </section>

    </span>
</template>
<script>
import BlogSidebar from "./BlogSidebar.vue";
export default {
  name: "SinglePost.vue",
  components: {
      BlogSidebar
  },
  mounted() {
        // Actions
        this.$store.dispatch('getPostById', this.$route.params.id);
    },
    computed: {
        // getters
        singlepost(){
            return this.$store.getters.getSinglePost
        }
    },
  methods: {

  }
};
</script>