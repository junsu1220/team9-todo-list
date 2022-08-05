import React from "react";
import {nanoid} from "nanoid";
import { useDispatch } from "react-redux";
import addCommnet from "../../redux/modules/comment"

const Comment = () => {
    const name_ref = React.useRef();
    const comment_ref = React.useRef();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = name_ref.current.value;
        const comment = comment_ref.current.value;
        const id = nanoid();
        name_ref.current.value = "";
        comment_ref.current.value = "";
        dispatch(addCommnet({name, comment, id}))
    }
    
    return(
        <div>
            <div>
                <button>댓글 내리기</button>
                <input 
                name="name"
                type="text"
                ref={name_ref}
                placeholder = "이름을 입력해주세요"/>
                <input
                name="commnet"
                type="text"
                ref={comment_ref}
                placeholder = "댓글을 입력해주세요" />
                <button 
                onClick={onSubmit}
                >추가하기</button>
            </div>
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