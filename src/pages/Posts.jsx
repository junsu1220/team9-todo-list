import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _getPosts } from "../redux/modules/postsSlice";

const Posts = () => {
  //   const [boolen, setBoolen] = React.useState(true); // useState값을 지정 후 useEffect에 false값을 넣어줌
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts_list, isLoading, error } = useSelector((state) => state.posts);
  console.log(posts_list);
  useEffect(() => {
    // setBoolen(false);
    dispatch(_getPosts());
  }, []);
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
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
            <PostCards key={post.id}>
              <h1>{post.userName}</h1>
              <p>{post.title}</p>
              <button
                onClick={() => {
                  navigate("/edit/:id");
                }}
              >
                수정하기
              </button>
              <button>삭제하기</button>
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
