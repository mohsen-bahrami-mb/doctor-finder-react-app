import { AiFillHeart, AiFillLike, AiOutlineHeart } from "react-icons/ai";
import React, { useState } from "react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import Input from "../../components/general/Input";
import { IoIosSend } from "react-icons/io";
import { TbShare } from "react-icons/tb";
import user from "../../assets/images/dashboard/056329162890c39a0ec0.jpg";

const CommentCard = () => {
  const [like, setLike] = useState(0);
  const [share, setShare] = useState(false);
  return (
    <div className="border-y py-5">
      <div className="flex mb-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 rounded-full border"
            src={user}
            alt="user"
          />
          <div>
            <h2 className="font-medium">مهدی</h2>
            <h2 className="text-xs text-gray-500 mt-1">1401/06/23</h2>
          </div>
        </div>
        <div className="relative">
          <BiDotsVerticalRounded
            onClick={() => setShare(!share)}
            className="text-lg hover:text-blue cursor-pointer duration-200"
          />
          {share && (
            <div className="flex w-28 left-0 absolute bg-slate-50 rounded-md shadow-md p-2 items-center gap-2">
              <TbShare className="text-blue" />
              <h2 className="text-xs pb-1 text-gray-500 mt-1 duration-200 hover:text-blue cursor-pointer">
                اشتراک گذاری
              </h2>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex text-green-700 items-center gap-2">
          <h2 className="font-medium text-sm">پزشک را توصیه می‌کنم</h2>
          <AiFillLike />
        </div>
        <p className="text-gray-500 text-sm my-4">
          دو جلسه هست که توسط خانم دکتر ویزیت شدم ، برای اولین بار بعد از چندین
          جلسه مشاوره بی نتیجه و بیهوده با روانشناسان متعدد ایشون مشکل منو تشخیص
          دادن و عمیقا برای من شفاف سازی کردن و راهکار مناسب رو به من معرفی کردن
          ، سرعت عمل عالی بود چرا که هدف از رزرو این جلسات از طرف ما اینه که
          خیلی زود از مشکلمون اگاه بشیم و راهکار مناسب به ما ارائه بشه ، من
          واقعا خوشحالم و قطعا تا انتها با ایشون خواهم بود
        </p>
        <div className="flex items-center gap-1">
          {like > 0 ? (
            <AiFillHeart className="text-red-600 cursor-pointer text-lg" />
          ) : (
            <AiOutlineHeart
              className="cursor-pointer text-lg"
              onClick={() => setLike(like + 1)}
            />
          )}
          <span className="text-gray-800 text-xs">{like}</span>
        </div>
        <div className="my-5">
          <Input
            icon={IoIosSend}
            onclick={() => {}}
            full
            placeholder="نظر خود را بنویسید..."
          />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
