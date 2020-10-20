import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Register from "./views/authentication/Register.vue";
import Login from "./views/authentication/Login.vue";
import ResetPassword from "./views/authentication/ResetPassword.vue";
import ResetPasswordRequest from "./views/authentication/ResetPasswordRequest.vue";
import * as auth from "./services/auth_service";

Vue.use(Router);

const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        children: [
            {
                path: "",
                name: "welcome",
                component: () => import("./views/Welcome.vue")
            },
            {
                path: "categories",
                name: "categories",
                component: () => import("./views/Categories.vue")
            },
            {
                path: "faculties",
                name: "faculties",
                component: () => import("./views/Faculties.vue")
            },
            {
                path: "departments",
                name: "departments",
                component: () => import("./views/Departments.vue")
            },
            {
                path: "courses",
                name: "courses",
                component: () => import("./views/Courses.vue")
            },
            {
                path: "exampapers",
                name: "exampapers",
                component: () => import("./views/ExamPapers.vue")
            }
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next("/login");
            } else {
                next();
            }
        }
    },

    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next("/dashboard");
            }
        }
    },
    {
        path: "/reset-password-request",
        name: "reset-password-request",
        component: ResetPasswordRequest,
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next("/dashboard");
            }
        }
    },
    {
        path: "/reset-password/:email",
        name: "reset-password",
        component: ResetPassword,
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next("/dashboard");
            }
        }
    }
];

const router = new Router({
    mode: "history",
    routes: routes,
    linkActiveClass: "active"
});

export default router;
