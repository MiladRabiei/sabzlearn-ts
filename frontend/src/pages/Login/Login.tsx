import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Form/Button";
import Navbar from "../../Components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import "./Login.css";
import { dataType } from "../../Components/types/all.types";
import apiRequests from "../../services/axios/configs/configs";
import { useMutation } from "@tanstack/react-query";
import authContext from "../../Components/Context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<dataType>({
    mode: "all",
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  const postMutation = useMutation({
    mutationFn: (data: dataType) => {
      console.log(data);
      return apiRequests.post("/auth/login", data);
    },
    onSuccess: (res) => {
      console.log(res.data);
      auth.login(null, res.data.accessToken);
      console.log(res);
      Swal.fire({
        title: "وارد شدید",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "text-xl",
          icon: "text-sm",
        },
      });
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const userLogin = (data: dataType) => {
    console.log("User Login");
    postMutation.mutate(data);
  };
  console.log(errors.identifier);
  return (
    <>
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form
            action="#"
            className="login-form"
            onSubmit={handleSubmit(userLogin)}
          >
            <div className="login-form__username">
              <input
                className={`login-form__username-input ${
                  errors.identifier !== undefined
                    ? !errors.identifier
                      ? "input-valid"
                      : "input-invalid"
                    : "input-default"
                }`}
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                {...register("identifier", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "",
                  },
                  maxLength: {
                    value: 35,
                    message: "",
                  },
                  // pattern:{
                  //   value:/^\w+((\.)*\w)*@\w{2,5}\.\w{2,5}$/,
                  //   message:""
                  // }
                })}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <input
                id="password"
                type="password"
                className={`login-form__password-input ${
                  errors.password !== undefined
                    ? !errors.password
                      ? "input-valid"
                      : "input-invalid"
                    : "input-default"
                }`}
                placeholder="رمز عبور"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "",
                  },
                  maxLength: {
                    value: 20,
                    message: "",
                  },
                })}
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              className={`login-form__btn ${
                isValid ? "login-form__btn-success" : "login-form__btn-error"
              }`}
              type="submit"
              disabled={!isValid}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
