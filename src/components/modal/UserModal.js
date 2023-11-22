import React, { useState } from "react";

import Button from "../general/Button";
import { IoCloseCircleSharp } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useNewUser from "../../stores/useNewUser";
import useTokenState from "../../stores/useTokenState";

const UserModal = () => {
  const { onUserClose } = useNewUser();
  const [loading, setLoading] = useState(false);
  const { isToken } = useTokenState();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      axios.defaults.headers.common["x-auth-token"] = isToken;
      await axios.post(
        "/search/searchInDoctors",
        {
          first_name: data.first_name,
          last_name: data.last_name,
          medical_serial: data.medical_serial,
        }
      );
      await axios.get(`/user/clinick/addDoctor/:id`, data);
      toast.success("کاربر جدید ایجاد شد!");
      onUserClose();
    } catch (error) {
      toast.error(error.message || "خطایی رخ داده است!");
    } finally {
      setLoading(false);
      reset();
    }
  };
  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-70">
      <div className="w-96 md:w-[450px] bg-white p-5 rounded-md m-auto mt-20">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl text-slate-900 font-bold mb-4">
            {" "}
            کاربر جدید{" "}
          </h2>
          <IoCloseCircleSharp
            onClick={() => onUserClose()}
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
            <div className="h-5 mt-3">
              {errors.first_name && (
                <span className="py-1 px-3 bg-red-200 rounded-md text-red-500 text-xs">
                  لطفا یک نام وارد کنید
                </span>
              )}
            </div>
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
            <div className="h-5 mt-3">
              {errors.last_name && (
                <span className="py-1 px-3 bg-red-200 rounded-md text-red-500 text-xs">
                  لطفا یک نام خانوادگی وارد کنید
                </span>
              )}
            </div>
          </div>

          <div className="mb-8">
            <label
              htmlFor="medical_serial"
              className="block text-gray-500 font-semibold text-sm mb-2"
            >
              کد نظام پزشکی
            </label>
            <input
              type="number"
              id="medical_serial"
              {...register("medical_serial", { required: true, minLength: 6 })}
              className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-blue-600 h-12 ${
                errors.medical_serial && "border-red-500"
              }`}
            />
            <div className="h-5 mt-3">
              {errors.medical_serial && (
                <span className="py-1 px-3 bg-red-200 rounded-md text-red-500 text-xs">
                  لطفا یک کد نظام پزشکی وارد کنید!
                </span>
              )}
            </div>
          </div>
          <Button
            disabled={loading}
            filled
            full
            large
            label="افزودن"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UserModal;
