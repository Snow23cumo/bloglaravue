// Importar componentes
// Category
import AdminHome from './components/admin/adminHome.vue';
import List from './components/admin/category/List.vue';
import New from './components/admin/category/New.vue';
import Edit from './components/admin/category/Edit.vue';
// Post
import ListPost from './components/admin/post/List.vue';
import NewPost from './components/admin/post/New.vue';
import EditPost from './components/admin/post/Edit.vue';

// Frontend Components
import PublicHome from './components/public/PublicHome.vue';
import BlogPost from './components/public/blog/BlogPost.vue';
import SinglePost from './components/public/blog/SinglePost.vue';

export const routes = [{
        path: '/home',
        component: AdminHome
    },
    {
        path: '/category-list',
        component: List
    },
    {
        path: '/add-category',
        component: New
    },
    {
        path: '/edit-category/:categoryid',
        component: Edit
    },
    // Post
    {
        path: '/post-list',
        component: ListPost
    },
    {
        path: '/add-post',
        component: NewPost
    },
    {
        path: '/edit-post/:postid',
        component: EditPost
    },
    // Frontend Routes
    {
        path: '/',
        component: PublicHome
    },
    {
        path: '/blogpost',
        component: BlogPost
    },
    {
        path: '/blogpostsingle/:id',
        component: SinglePost
    }

]