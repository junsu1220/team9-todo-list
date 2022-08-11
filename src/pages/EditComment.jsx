import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editComment, __todosThunk } from "../redux/modules/comments";

const EditComment = (props) => {
  const dispatch = useDispatch();
  const editComment_ref = React.useRef();
  const [foo, setFoo] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    const comment = editComment_ref.current.value;
    const id = props.id;
    const username = props.username;

    if (comment) {
      editComment_ref.current.value = "";
      dispatch(editComment({ id, comment, username }));
      setFoo(!foo);
    } else {
      alert("수정할 내용을 입력해주세요!");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(__todosThunk());
    }, 300);
  }, [foo]);

  return (
    <div>
      <input
        className="comment-input"
        ref={editComment_ref}
        placeholder="수정할 내용을 입력해주세요"
      />
      <button className="comment-btn" onClick={() => props.setModal(false)}>
        취소
      </button>

      <button onClick={onSubmit} className="comment-btn">
        저장
      </button>
    </div>
  );
};

export default EditComment;
