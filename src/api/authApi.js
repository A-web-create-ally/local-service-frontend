import api from "./axios";

export const loginApi = (email, password) => 
    api.post("/user/loginUser", {email, password});

export const logoutApi = () => 
    api.post("/user/logoutUser");
