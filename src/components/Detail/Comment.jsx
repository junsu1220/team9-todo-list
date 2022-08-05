import React, {useRef} from "react";
import {nanoid} from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import {addComment, delComment} from "../../redux/modules/comments"

const Comment = () => {
    const username_ref = useRef();
    const comment_ref = useRef();
    const dispatch = useDispatch();

    const list = useSelector((state)=> state.comment.list);

    const onSubmit = (event) => {
        event.preventDefault();
        const id = nanoid();
        const username = username_ref.current.value;
        const comment = comment_ref.current.value;
       
        username_ref.current.value = "";
        comment_ref.current.value = "";
        dispatch(addComment({username, comment, id}));
    }

    const onClickDelComment = (id) => {
        dispatch(delComment({id}));
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <button>댓글 내리기</button>
                <input 
                ref={username_ref}
                placeholder = "이름을 입력해주세요"/>
                <input
                ref={comment_ref}
                placeholder = "댓글을 입력해주세요" />
                <button 
                onClick = {onSubmit}
                >추가하기</button>
            </form>
            {list.map((item)=>{
                return (
                    <div key = {`${item.id}`}>
                    <p>{item.username}</p>
                    <p>{item.comment}</p>
                    <button>수정</button>
                    <button onClick={onClickDelComment(item.id)}>삭제</button>
                </div>
                )
            })}
        </div>
    );
};

export default Comment;