import React, { useState } from "react";

import Button from "../general/Button";
import { IoCloseCircleSharp } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useLoginModal from "../../stores/useLoginModal";
import { useNavigate } from "react-router";
import useRegisterModal from "../../stores/useRegisterModal";
import useTokenState from "../../stores/useTokenState";

const LoginModal = () => {
  const [loading, setLoading] = useState(false);
  const { onRegisterOpen } = useRegisterModal();
  const { onLoginClose } = useLoginModal();
  const { onSetToken } = useTokenState();
  const navigate = useNavigate();

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
        .post(`/auth/login`, data)
        .then((res) => {
          console.log(res);
          const token = res?.data?.data["x-auth-token"] || null;
          onSetToken(token);
          toast.success("وارد شدید!");
          onLoginClose();
          navigate("/dashboard/appointments");
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

  const registerOpenHandler = () => {
    onRegisterOpen();
    onLoginClose();
  };
  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-70">
      <div className="w-96 md:w-[450px] bg-white p-5 rounded-md m-auto mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-slate-900 font-bold mb-4">ورود</h2>
          <IoCloseCircleSharp
            onClick={() => onLoginClose()}
            className="text-gray-500 text-2xl duration-200 cursor-pointer hover:text-red-600"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-500 font-semibold text-sm mb-2"
            >
              شماره تلفن
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", { required: true })}
              className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-blue-600 h-12 ${
                errors.phone && "border-red-500"
              }`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                لطفا یک نام وارد کنید
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
                لطفا رمز خود را وارد کنید!
              </span>
            )}
          </div>
          <Button
            disabled={loading}
            filled
            full
            large
            label="ورود"
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
            هنوز حساب ندارید؟
            <span
              onClick={registerOpenHandler}
              className="
              text-neutral-800
              cursor-pointer 
              font-medium
              hover:text-blue-600
            "
            >
              {" "}
              ثبت نام
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
