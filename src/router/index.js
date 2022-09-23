import { createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        name : "HomePage",
        path : "/",
        component: () => import("@/views/HomePage.vue")
    },
    {
        name : "LoginPage",
        path : "/Login",
        component: () => import("@/views/LoginPage.vue")
    },
    {
        name : "RegisterPage",
        path : "/Register",
        component: () => import("@/views/RegisterPage.vue")
    } 
];

export default createRouter ({
    routes,
    history : createWebHashHistory()
});