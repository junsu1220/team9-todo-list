import React, {useRef, useState} from "react";
import {nanoid} from "nanoid";
import { useDispatch } from "react-redux";
import addCommnet from "../../redux/modules/comment"

const Comment = () => {
    const name_ref = useRef();
    const comment_ref = useRef();
    const dispatch = useDispatch();

   const [name, setName] = useState("");
   const [comment, setComment] = useState("");

   const onChangeInputName = (event) => {
    setName(event.target.value);
   };
   const onChangeInputComment = (event0) => {
    setComment(event0.target.value);
   };


    const onSubmit = (e) => {
        e.preventDefault();
        const id = nanoid();
        name_ref.current.focus();
        comment_ref.current.focus();
       
        name_ref.current.value = "";
        comment_ref.current.value = "";
        dispatch(addCommnet({name, comment, id}))
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <button>댓글 내리기</button>
                <input 
                ref={name_ref}
                onChange = {onChangeInputName}
                placeholder = "이름을 입력해주세요"/>
                <input
                onChange={onChangeInputComment}
                ref={comment_ref}
                placeholder = "댓글을 입력해주세요" />
                <button 
                onClick = {onSubmit}
                >추가하기</button>
            </form>
            <div>
                <p>작성자</p>
                <p>댓글내용</p>
                <button>수정</button>
                <button>삭제</button>
            </div>
            <tr/>
        </div>
    );
};

export default Comment;