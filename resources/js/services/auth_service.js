import { http, httpFile } from "./http_services";
import jwt from "jsonwebtoken";
import store from "../store";

export function register(user) {
    return http().post("/auth/register", user);
}

export function login(user) {
    return http()
        .post("/auth/login", user)
        .then(response => {
            if (response.status === 200) {
                setToken(response.data);
            }

            return response.data;
        });
}

function setToken(user) {
    const token = jwt.sign({ user: user }, "pastexampaperaabfjshsshtu2020");
    localStorage.setItem("past-exam-paper-token", token);
    store.dispatch("authenticate", user.user);
}

export function isLoggedIn() {
    const token = localStorage.getItem("past-exam-paper-token");
    return token != null;
}

export function logout() {
    http().get("/auth/logout");
    localStorage.removeItem("past-exam-paper-token");
}

export function getAccessToken() {
    const token = localStorage.getItem("past-exam-paper-token");
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

export function getProfile() {
    return http().get("auth/profile");
}

export function resetPasswordRequest() {
    return http().get("auth/profile");
}
