import React, {useRef, useState} from "react";
import {nanoid} from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import {addComment, delComment} from "../../redux/modules/comments"
import EditComment from "./EditComment";

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
        dispatch(delComment(id));
    }
    
    const [modal, setModal] = useState(false);
    
    
    return(
        <div className="wrap-box">
            <form onSubmit={onSubmit}>
                <input
                className="comment-input" 
                ref={username_ref}
                placeholder = "이름을 입력해주세요"/>
                <input
                className="comment-input" 
                ref={comment_ref}
                placeholder = "댓글을 입력해주세요" />
                <button 
                className="comment-btn"
                onClick = {onSubmit}
                >추가하기</button>
            </form>
            {list.map((item)=>{
                return (
                    <div className="comment-box"
                    key = {`${item.id}`}>
                    <p>{item.username}</p>
                    <p>{item.comment}</p>
                    <button
                    className="comment-btn" 
                    onClick={()=>{
                          onClickDelComment(item.id);
                          }}>삭제</button>
                    <button
                    className="comment-btn"
                    onClick={()=>{setModal(!modal)}}>수정</button>
                        {modal === true ? <EditComment id={item.id}/> : null}
                   
                </div>
                )
            })}
        </div>
    );
};

export default Comment;