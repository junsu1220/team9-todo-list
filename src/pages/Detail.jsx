import React, { useState } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import "./style.css";

const Detail = () => {
  const [modal, setModal] = useState(false);
  const todoList = useSelector((state) => state.todos.todos);

  return (
    <div className="wrap-box">
      {todoList.map((todoitem) => {
        return (
          <>
            <div className="id-box" key={`${todoitem.id}`}>
              <h3>id: {todoitem.id}</h3>
              <button className="home-btn">이전으로</button>
            </div>
            <div>
              <h1>{todoitem.title}</h1>
            </div>
            <div className="body-box">
              <p>{todoitem.comment}</p>
            </div>
            {modal === false ? (
              <button className="comment-btn" onClick={() => setModal(true)}>
                댓글보기{" "}
              </button>
            ) : null}

            {modal === true ? <Comment setModal={setModal} /> : null}
          </>
        );
      })}
    </div>
  );
};

export default Detail;
