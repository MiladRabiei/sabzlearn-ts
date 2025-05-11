import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Form/Button";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import { dataType } from "../../Components/types/all.types";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import apiRequests from "../../services/axios/configs/configs";
import Swal from "sweetalert2";
import authContext from "../../Components/Context/AuthContext";
export default function Register() {
  const auth=useContext(authContext)
  const postMutation = useMutation({
    mutationFn: (data: dataType) => {
      return apiRequests.post("/auth/register", data); 
    },
    onSuccess: (res) => {
      console.log("successfully registered", res);
      const userInfos=res.data.user
      const token=res.data.accessToken
      auth.login(userInfos,token)
      Swal.fire({
        title: " ثبت شد",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "text-xl",
          icon: "text-sm"
        }
      });
    },
    onError: (err) => {
      console.log("an error occurred when registering new user", err);

    }
  }); 
  

  const{register,handleSubmit,formState:{isValid,errors},reset,watch}=useForm({
    mode:"onChange",
    defaultValues:{
      name:"",
      username:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  })
  const password=watch("password")
  const registerNewUser = (data:dataType) => {
    postMutation.mutate(data)
    reset()
  }

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div className="login__new-member">
            <span className="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form" onSubmit={handleSubmit(registerNewUser)}>
            <div className="login-form__username">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className={`login-form__username-input ${errors.name!==undefined?(!errors.name?"input-valid":"input-invalid"):"input-default"}`}
                {...register("name",{
                  required:true,
                  minLength:{
                    value:8,
                    message:""
                  },
                  maxLength:{
                    value:25,
                    message:""
                  }
                })}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <input
                type="text"
                placeholder="نام کاربری"
                className={`login-form__username-input ${errors.username!==undefined?(!errors.username?"input-valid":"input-invalid"):"input-default"}`}
                {...register("username",{
                  required:true,
                  minLength:{
                    value:8,
                    message:""
                  },
                  maxLength:{
                    value:25,
                    message:""
                  }
                })}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <input
                type="text"
                placeholder="آدرس ایمیل"
                className={`login-form__username-input ${errors.email!==undefined?(!errors.email?"input-valid":"input-invalid"):"input-default"}`}
                {...register("email",{
                  required:true,
                  minLength:{
                    value:10,
                    message:""
                  },
                  maxLength:{
                    value:35,
                    message:""
                  },
                  pattern:{
                    value:/^\w+((\.)*\w)*@\w{2,5}\.\w{2,5}$/,
                    message:""
                  }
                })}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <input
                type="password"
                placeholder="رمز عبور"
                className={`login-form__password-input ${errors.password!==undefined?(!errors.password?"input-valid":"input-invalid"):"input-default"}`}
                {...register("password",{
                  required:true,
                  minLength:{
                    value:8,
                    message:""
                  },
                  maxLength:{
                    value:20,
                    message:""
                  }
                })}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__password">
              <input
                type="password"
                placeholder="تکرار رمز عبور"
                className={`login-form__password-input ${errors.confirmPassword!==undefined?(!errors.confirmPassword?"input-valid":"input-invalid"):"input-default"}`}
                {...register("confirmPassword",{
                  required:true,
                  minLength:{
                    value:8,
                    message:""
                  },
                  maxLength:{
                    value:20,
                    message:""
                  },
                  validate:value=>value===password
                })}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button className={`login-form__btn ${
                isValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`} type="submit" disabled={!isValid}>
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
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
