import React, { useState } from "react";

import Opp from "./Opp";
import Req from "./Req";

const Oppontments = () => {
  const [tab, setTab] = useState("opp");
  return (
    <div className="bg-white px-5 py-16">
      <h2 className="text-slate-800 font-bold text-xl">نوبت های من</h2>
      <div className="mt-8 text-sm font-medium flex text-slate-600 gap-5">
        <h3
          className={`${
            tab === "opp" && "text-slate-950 border-b-2 border-slate-600"
          } py-3 cursor-pointer`}
          onClick={() => setTab("opp")}
        >
          نوبت ها
        </h3>
        <h3
          className={`${
            tab === "req" && "text-slate-950 border-b-2 border-slate-600"
          } py-3 cursor-pointer`}
          onClick={() => setTab("req")}
        >
          درخواست ها
        </h3>
      </div>
      {tab === "opp" ? <Opp /> : <Req />}
    </div>
  );
};

export default Oppontments;
