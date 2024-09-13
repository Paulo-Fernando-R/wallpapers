/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_PROXY_URL + import.meta.env.VITE_BASE_URL,
});
axios.get("", {});

const reqInterceptor = async (config: InternalAxiosRequestConfig<AxiosResponse>) => {
    config.validateStatus = () => true;
    return config;
};

const resInterceptor = (response: AxiosResponse) => {
    if (response.status === 401) {
        //todo
    }
    return response;
};

const errInterceptor = async (error: AxiosError) => {
  //  const {  } = error;
    //todo
    return Promise.reject(error);
};
instance.interceptors.response.use(resInterceptor);
instance.interceptors.request.use(reqInterceptor, errInterceptor);

const axiosInstance = instance;
export default axiosInstance;

// export default function Axios(instance: AxiosInstance): AxiosInstance {
//     instance.interceptors.response.use(resInterceptor);
//     instance.interceptors.request.use(reqInterceptor, errInterceptor);
//     return instance;
// }
