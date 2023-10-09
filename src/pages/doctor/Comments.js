import CommentCard from "./CommentCard";
import React from "react";

const Comments = () => {
  return (
    <div className="p-5">
      <h3 className="text-slate-700 mb-4 font-semibold">نظرات</h3>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
};

export default Comments;
