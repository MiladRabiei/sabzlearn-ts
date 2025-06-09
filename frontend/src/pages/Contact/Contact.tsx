import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./Contact.css";
import { useForm } from "react-hook-form";
import { Mutation, useMutation } from "@tanstack/react-query";
import apiRequests from "../../services/axios/configs/configs";
import Swal from "sweetalert2";
export default function Contact() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      body: "",
    },
  });

  const [fieldStatus, setFieldStatus] = useState({
    name: { touched: false, valid: false },
    email: { touched: false, valid: false },
    phone: { touched: false, valid: false },
    body: { touched: false, valid: false },
  });
  const postMutation = useMutation({
    mutationFn: (data) => {
      console.log(data);
      return apiRequests.post("/contact", data);
    },
    onSuccess: (res) => {
      Swal.fire({
        title: "پیغام شما با موفقیت به مدیران ارسال شد",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "text-xl",
          icon: "text-sm",
        },
      });
      reset();
      setFieldStatus({
        name: { touched: false, valid: false },
        email: { touched: false, valid: false },
        phone: { touched: false, valid: false },
        body: { touched: false, valid: false },
      });
    },
    onError: (err) => {
      Swal.fire({
        title: "  مشکلی پیش آمده!",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "text-xl",
          icon: "text-sm",
        },
      });
      console.log(err);
    },
  });
  const addNewContact = (data) => {
    console.log("درخواست شما برای مدیران سایت ارسال شد");
    postMutation.mutate(data);
  };
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ارتباط با ما</span>
          <span className="login__subtitle">
            نظر یا انتقادتو بنویس برامون :)
          </span>
          <form
            action="#"
            className="login-form"
            onSubmit={handleSubmit(addNewContact)}
          >
            <div className="login-form__username login-form__parent">
              <input
                id="name"
                className={`login-form__username-input
                  ${
                    fieldStatus.name.touched &&
                    (fieldStatus.name.valid
                      ? "!ring ring-green-500"
                      : "!ring ring-red-500")
                  }`}
                type="text"
                placeholder="نام و نام خانوادگی"
                {...register("name", {
                  required: true,

                  minLength: {
                    value: 10,
                    message: "",
                  },
                  maxLength: {
                    value: 35,
                    message: "",
                  },
                  onChange: async () => {
                    const isValid = await trigger("name");
                    setFieldStatus((prev) => ({
                      ...prev,
                      name: { touched: true, valid: isValid },
                    }));
                  },
                })}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password login-form__parent">
              <input
                id="email"
                className={`login-form__password-input
                  ${
                    fieldStatus.email.touched &&
                    (fieldStatus.email.valid
                      ? "!ring ring-green-500"
                      : "!ring ring-red-500")
                  }`}
                type="text"
                placeholder="آدرس ایمیل"
                {...register("email", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "",
                  },
                  maxLength: {
                    value: 35,
                    message: "",
                  },
                  pattern: {
                    value: /^\w+((\.)*\w)*@\w{2,5}\.\w{2,5}$/,
                    message: "",
                  },
                  onChange: async () => {
                    const isValid = await trigger("email");
                    setFieldStatus((prev) => ({
                      ...prev,
                      email: { touched: true, valid: isValid },
                    }));
                  },
                })}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__phone-number login-form__parent">
              <input
                id="phone"
                className={`login-form__password-input
                  ${
                    fieldStatus.phone.touched &&
                    (fieldStatus.phone.valid
                      ? "!ring ring-green-500"
                      : "!ring ring-red-500")
                  }`}
                type="tel"
                placeholder="شماره تماس"
                {...register("phone", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "",
                  },
                  maxLength: {
                    value: 11,
                    message: "",
                  },
                  onChange: async () => {
                    const isValid = await trigger("phone");
                    setFieldStatus((prev) => ({
                      ...prev,
                      phone: { touched: true, valid: isValid },
                    }));
                  },
                })}
              />
              <i className="login-form__password-icon fa fa-phone"></i>
            </div>
            <div className="login-form__text login-form__parent">
              <input
                id="body"
                className={`login-form__text-input
                  ${
                    fieldStatus.body.touched &&
                    (fieldStatus.body.valid
                      ? "!ring ring-green-500"
                      : "!ring ring-red-500")
                  }`}
                placeholder="متن خود را وارد کنید"
                {...register("body", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "",
                  },
                  maxLength: {
                    value: 60,
                    message: "",
                  },
                  onChange: async () => {
                    const isValid = await trigger("body");
                    setFieldStatus((prev) => ({
                      ...prev,
                      body: { touched: true, valid: isValid },
                    }));
                  },
                })}
              />
            </div>
            <button
              className={`login-form__btn ${
                isValid ? "login-form__btn-success" : "login-form__btn-error"
              }`}
              type="submit"
              onClick={addNewContact}
              disabled={!isValid}
            >
              <span className="login-form__btn-text">ارسال</span>
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
