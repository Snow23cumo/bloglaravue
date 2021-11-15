export default {
    state: {
        category: [],
        post: [],
        blogpost: [],
        singleblogpost: []
    },

    getters: {
        getCategory(state) {
            return state.category
        },
        getAllPost(state) {
            return state.post
        },
        getBlogPost(state) {
            return state.blogpost
        },
        getSinglePost(state) {
            return state.singleblogpost
        }
    },
    actions: {
        allCategory(context) {
            axios.get('/all-category').then((response) => {
                context.commit('categoreis', response.data.categories)
            })
        },
        getAllPost(context) {
            axios.get('/all-post').then((response) => {
                console.log(response.data)
                context.commit('allpost', response.data.posts)
            });
        },
        // Frontend
        getBlogPost(context) {
            axios.get('/all-blogpost').then((response) => {
                // console.log(response.data)
                context.commit('allblogpost', response.data.posts)
            });
        },
        getPostById(context, payload) {
            axios.get('/get-singleblogpost/' + payload).then((response) => {
                context.commit('singleblogpost', response.data.posts)
            });
        }
    },
    mutations: {
        categoreis(state, data) {
            return state.category = data
        },
        allpost(state, payload) {
            return state.post = payload
        },
        allblogpost(state, payload) {
            return state.blogpost = payload
        },
        singleblogpost(state, payload) {
            return state.singleblogpost = payload
        }
    }
}