import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams, useNavigate } from "react-router-dom";
import { _findPosts } from "../redux/modules/postsSlice";

const Edit = () => {
  const { id } = useParams();
  const [rock, setRock] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts_list = useSelector((state) => state.posts.posts_list);
  console.log(posts_list);

  useEffect(() => {
    dispatch(_findPosts(id));
  }, []);

  return (
    <div>
      <div>
        {posts_list.map((post) => {
          return (
            <div key={post.id}>
              <h1>USER : {post.userName}</h1>
              <h3>{post.title}</h3>
              <p>{post.comment}</p>
            </div>
          );
        })}
      </div>
      <form>
        title: <input />
        <br />
        content: <input />
        <br />
        <button onClick={() => setRock(true)}>수정하기</button>
        {rock === false ? null : <input />}
      </form>
    </div>
  );
};

export default Edit;
