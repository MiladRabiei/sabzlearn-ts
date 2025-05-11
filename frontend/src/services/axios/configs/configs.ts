import axios from "axios";
import Swal from "sweetalert2";
const apiRequests = axios.create({
  baseURL: "http://localhost:4000/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiRequests.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
apiRequests.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    const status = err.response?.status;
    if (status < 200 || status >= 300) {
      console.log("err:" + status);
      if (status === 409) {
        Swal.fire({
          title: "  نام کاربری یا آدرس ایمیل موجود می باشد!",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: "text-xl",
            icon: "text-sm",
          },
        });
      } else if (status === 401) {
        if (err.response.data.message === "password is not correct") {
          Swal.fire({
            title: "رمز عبور اشتباه است!",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              title: "text-xl",
              icon: "text-sm",
            },
          });
        } else {
          Swal.fire({
            title: "  نام کاربری یا آدرس ایمیل موجود نمی باشد!",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              title: "text-xl",
              icon: "text-sm",
            },
          });
        }
      }
    }
    return Promise.reject(err);
  }
);
export default apiRequests;
