export default {
    state: {
        category: [],
        post: [],
    },

    getters: {
        getCategory(state) {
            return state.category
        },
        getAllPost(state){
            return state.post
        }
    },
    actions: {
        allCategory(context) {
            axios.get('/all-category').then((response) => {
                context.commit('categoreis', response.data.categories)
            })
        },
        getAllPost(context){
            axios.get('/all-post').then((response) => {
                console.log(response.data)
                context.commit('allpost', response.data.posts)
            });
        }
    },
    mutations: {
        categoreis(state, data) 
        {
            return state.category = data
        },
        allpost(state, payload){
            return state.post = payload
        }
    }
}
