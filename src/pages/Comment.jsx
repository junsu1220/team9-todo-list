import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { commentsActions } from "../redux/modules/comments";
import EditComment from "./EditComment";

const Comment = (props) => {
  const username_ref = useRef();
  const comment_ref = useRef();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.comments.list);

  const onSubmit = (event) => {
    event.preventDefault();
    const id = nanoid();
    const username = username_ref.current.value;
    const comment = comment_ref.current.value;

    username_ref.current.value = "";
    comment_ref.current.value = "";
    dispatch(commentsActions.addComment({ username, comment, id }));
  };

  const onClickDelComment = (id) => {
    dispatch(commentsActions.delComment(id));
  };

  const [modal1, setModal1] = useState(false);

  return (
    <div className="wrap-box">
      <button
        className="comment-btn"
        onClick={() => {
          props.setModal(false);
        }}
      >
        댓글 닫기
      </button>
      <form onSubmit={onSubmit}>
        <input
          className="comment-input"
          ref={username_ref}
          placeholder="이름을 입력해주세요"
        />
        <input
          className="comment-input"
          ref={comment_ref}
          placeholder="댓글을 입력해주세요"
        />
        <button className="comment-btn" onClick={onSubmit}>
          추가하기
        </button>
      </form>
      {list.map((item) => {
        return (
          <div className="comment-box" key={`${item.id}`}>
            <p>{item.username}</p>
            <p>{item.comment}</p>
            <button
              className="comment-btn"
              onClick={() => {
                onClickDelComment(item.id);
              }}
            >
              삭제
            </button>
            <button
              className="comment-btn"
              onClick={() => {
                setModal1(true);
              }}
            >
              수정
            </button>
            {modal1 === true ? (
              <EditComment
                setModal={setModal1}
                id={item.id}
                username={item.username}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
