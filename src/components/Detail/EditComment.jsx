import React from "react";
import { useDispatch } from "react-redux";

const EditComment = (id) => {
    const dispatch = useDispatch();
    const editComment_ref = React.useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const editComment = editComment_ref.current.value;

    editComment_ref.current.value = "";
    dispatch(editComment({id, editComment}));
  }


  return (
    <div>
      <input 
      className="comment-input" 
      ref={editComment_ref} 
      placeholder="수정할 내용을 입력해주세요"/>
      <button
      className="comment-btn"
      >취소</button>
  
      <button onClick={onSubmit}
      className="comment-btn">저장</button>
    </div>
  );
};

export default EditComment;
