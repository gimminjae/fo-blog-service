import axios from "axios";
import commonUtil from "~/composables/common";
import cookieUtil from "~/composables/cookie";

export const api = {
  post,
  get,
  put,
  remove,
  head,
};
const instance = axios.create(process.client ? {} : { baseURL: 'http://localhost:8080' });
instance.interceptors.request.use(
    async (config) => {
        let accessToken = cookieUtil.getAccessToken()
        if (!accessToken) {
            try {
                const { data } = await axios.get(`/api/member/access-token?refreshToken=${cookieUtil.getRefreshToken()}`)
                cookieUtil.setAccessToken(data)
                accessToken = data
            } catch (error) {

            }
        }
        config.headers.Authorization = accessToken
        return config
    },
    (error) => {
        alert('error 발생')
    }
);

function post(url, data = {}) {
  return instance.post(url, data).then((response) => response.data);
}

function get(url, data = {}) {
  return instance.get(`${url}${commonUtil.makeSearchParam(data)}`).then((response) => response.data);
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