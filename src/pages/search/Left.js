import { BiLike } from "react-icons/bi";
import Button from "../../components/general/Button";
import IconWithText from "../../components/general/IconWithText";
import { LuCalendar } from "react-icons/lu";
import React from "react";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Left = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-5">
      <div className="space-y-1 mb-10">
        <IconWithText icon={BiLike} text="3 لایک" />
        <IconWithText icon={LuCalendar} text="شنبه, دوشنبه, سه شنبه" />
        <IconWithText
          icon={TiTick}
          text="امروز در دسترس هست"
          color="text-[#15803D]"
        />
      </div>
      <Button
        onclick={() => navigate("/doctor")}
        full
        large
        label="مشاهده پروفایل"
      />
    </div>
  );
};

export default Left;
