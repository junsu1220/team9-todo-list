import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _delPosts, _getPosts, _editPosts } from "../redux/modules/postsSlice";

const Posts = () => {
  //   const [boolen, setBoolen] = React.useState(true); // useState값을 지정 후 useEffect에 false값을 넣어줌
  const [rock, setRock] = React.useState(false);
  //   const postTitle_ref = React.useRef();
  //   console.log(postTitle_ref.current);
  const [inputValue, setInputValue] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts_list, isLoading, error } = useSelector((state) => state.posts);
  console.log(posts_list);
  const onRemoveHandler = (id) => {
    // axios.delete(`https://protected-shelf-37411.herokuapp.com/posts_list/${postId}`);
    dispatch(_delPosts(id));
  };
  console.log(onRemoveHandler);
  const onUpdate = (id, userName) => {
    dispatch(_editPosts({ id, userName, title: inputValue }));
    setRock(false);
  };
  useEffect(() => {
    dispatch(_getPosts());
  }, []);
  //   useEffect(() => {
  //     dispatch(_editPosts());
  //   }, []);
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  //   const onChangeHandler = (postId, postComment) => {
  //     const id = postId;
  //     console.log(id);
  //     const comment = postComment;
  //     dispatch(_editPosts({ id, comment }));
  //   };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Posts</h1>
        <button
          onClick={() => {
            navigate("/add");
          }}
        >
          추가하기
        </button>
      </div>
      <div>
        {posts_list.map((post) => {
          console.log(post.id);
          return (
            <PostCards key={post.id} postId={post.id} postTitle={post.title}>
              <h1>{post.userName}</h1>
              <p>{post.title}</p>
              <button
                onClick={() => {
                  //   navigate(`/edit/${post.id}`);
                  setRock(true);
                }}
              >
                수정하기
              </button>
              <button onClick={() => onRemoveHandler(post.id, post.userName)}>
                삭제하기
              </button>
              {rock === true ? (
                <div>
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button onClick={() => setRock(false)}>취소</button>
                  <button onClick={() => onUpdate(post.id)}>저장</button>
                </div>
              ) : null}
            </PostCards>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

const PostCards = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #32386e;
`;
