import React, { useState } from "react";

import Button from "../general/Button";
import { IoCloseCircleSharp } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useLoginModal from "../../stores/useLoginModal";
import useRegisterModal from "../../stores/useRegisterModal";
import useTokenState from "../../stores/useTokenState";

const RegisterModal = () => {
  const [loading, setLoading] = useState(false);
  const { onRegisterClose } = useRegisterModal();
  const { onSetToken } = useTokenState();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    try {
      axios
        .post(`/auth/register`, data)
        .then((res) => {
          const token = res?.data?.data["x-auth-token"] || null;
          onSetToken(token);
          toast.success("ثبت نام با موفقیت انجام شد!");
          onRegisterClose();
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setLoading(false);
          reset();
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const { onLoginOpen } = useLoginModal();

  const loginOpenHandler = () => {
    onRegisterClose();
    onLoginOpen();
  };

  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-70">
      <div className="w-96 md:w-[450px] bg-white p-5 rounded-md m-auto mt-20 ">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-slate-900 font-bold mb-4">ثبت نام</h2>
          <IoCloseCircleSharp
            onClick={() => onRegisterClose()}
            className="text-gray-500 text-2xl duration-200 cursor-pointer hover:text-red-600"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-gray-500 font-semibold text-sm mb-2"
            >
              نام
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", { required: true })}
              className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-blue-600 h-12 ${
                errors.first_name && "border-red-500"
              }`}
            />
            {errors.first_name && (
              <span className="text-red-500 text-sm">
                لطفا یک نام وارد کنید
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-gray-500 font-semibold text-sm mb-2"
            >
              نام خانوادگی
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name", { required: true })}
              className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-blue-600 h-12 ${
                errors.last_name && "border-red-500"
              }`}
            />
            {errors.last_name && (
              <span className="text-red-500 text-sm">
                لطفا یک نام خانوادگی وارد کنید
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-500 font-semibold text-sm mb-2"
            >
              شماره تلفن
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: true, pattern: /^[0-9]{11}$/ })}
              className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-blue-600 h-12 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                لطفا یک شماره تلفن معتبر وارد کنید!
              </span>
            )}
          </div>

          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-gray-500 font-semibold text-sm mb-2"
            >
              رمز
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true, minLength: 6 })}
              className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-blue-600 h-12 ${
                errors.password && "border-red-500"
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                رمز شما باید حداقل 6 کاراکتر داشته باشد!
              </span>
            )}
          </div>
          <Button
            disabled={loading}
            filled
            full
            large
            label="ثبت نام"
            type="submit"
          />
        </form>
        <div
          className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
        >
          <p className="font-medium text-xs">
            از قبل حساب دارید؟
            <span
              onClick={loginOpenHandler}
              className="
              text-neutral-800
              cursor-pointer 
              font-medium
              hover:text-blue-600
            "
            >
              {" "}
              ورود
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
