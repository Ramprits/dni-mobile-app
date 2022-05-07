import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Add a request interceptor
axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api/v1/db";

axios.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem("@access_token");
    if (token) {
      config.headers["xc-auth"] = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, data) => axios.post(url, data).then(responseBody),
  put: (url, data) => axios.put(url, data).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Account = {
  current: () => requests.get("/auth/user/me"),
  login: (user) => requests.post("/auth/user/signin", user),
  register: (user) => requests.post("/auth/user/signup", user),
  passwordForgot: (user) => requests.post("/auth/password/forgot", user),
  passwordChange: (user) => requests.post("/auth/password/change", user),
  passwordReset: (user) => requests.post("/auth/password/reset/{token}", user),
  tokenRefresh: (user) => requests.post("/auth/token/refresh", user),
  passwordResetTokenValidate: (user) =>
    requests.post("/auth/token/validate/{token}", user),
  emailValidate: (user) => requests.post("/auth/email/validate/{email}", user),
};

const agent = {
  Account,
};

export default agent;
