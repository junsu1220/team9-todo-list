import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _getPosts } from "../redux/modules/postsSlice";

const Posts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts_list, isLoading, error } = useSelector((state) => state.posts);
  console.log(posts_list);
  useEffect(() => {
    setTimeout(() => {
      dispatch(_getPosts());
    }, 1000);
  }, [dispatch]);
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
        {posts_list.length === 0
          ? null
          : posts_list.map((post) => {
              console.log(post.id);
              return (
                <PostCards key={post.id}>
                  <h1>{post.userName}</h1>
                  <p>{post.title}</p>
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
