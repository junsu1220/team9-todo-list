import React, {useState} from "react";
import Comment from "./Comment";
import "./style.css"

const Detail = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className="wrap-box">
            <div className="id-box">
                <h3>id: id</h3>
                <button className="home-btn">이전으로</button>
            </div>
            <div>
                <h1>title</h1>
            </div>
            <div className="body-box">
                <p>body</p>
            </div>
            <button className="comment-btn"
            onClick={()=>setModal(!modal)}>댓글</button>
            {modal === true ? <Comment/> : null}
        </div>
    );
}

export default Detail;