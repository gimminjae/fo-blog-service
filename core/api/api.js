import axios from "axios";

export const api = {
  post,
  get,
  put,
  remove,
  head,
};

const initParam = process.client ? {} : { baseURL: "http://localhost:8080" };
const instance = axios.create(initParam);
// const instance = axios.create()
console.log(
  "create axios instance!!! - cookie",
  instance.defaults.headers.Cookie
);

instance.interceptors.request.use();

function post(url, data = {}) {
  return instance.post(url, data).then((response) => response.data);
}

function get(url, data = {}) {
  return instance.get(url, data).then((response) => response.data);
}

function put(url, data = {}) {
  return instance.put(url, data).then((response) => response.data);
}

function remove(url, data = {}) {
  return instance.delete(url, data).then((response) => response.data);
}

function head(url, data = {}) {
  return instance.head(url, data).then((response) => response.data);
}