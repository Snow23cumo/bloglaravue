// Importar componentes
import AdminHome from './components/admin/adminHome.vue';
import List from './components/admin/category/List.vue';
import New from './components/admin/category/New.vue';
import Edit from './components/admin/category/Edit.vue';
// Post
import ListPost from './components/admin/post/List.vue';
import NewPost from './components/admin/post/New.vue';
import EditPost from './components/admin/post/Edit.vue';


export const routes = [
    {
        path: '/home',
        component:AdminHome
    },
    {
        path: '/category-list',
        component:List
    },
    {
        path: '/add-category',
        component:New
    },
    {
        path: '/edit-category/:categoryid',
        component:Edit
    },
    // Post
    {
        path: '/post-list',
        component:ListPost
    },
    {
        path: '/add-post',
        component:NewPost
    },
    {
        path: '/edit-post/:postid',
        component:EditPost
    }
]
