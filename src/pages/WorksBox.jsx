import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WorksBox = () => {
  const todoList = useSelector((state) => state.todos.todos);

  return (
    <Container>
      {todoList.map((todoitem) => {
        return (
          <TodoBox key={`${todoitem.id}`}>
            <h3>{todoitem.title}</h3>
            <p>{todoitem.userName}</p>
            <Removebtn>삭제</Removebtn>
          </TodoBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
`;
const TodoBox = styled.div`
  width: 800px;
  height: 150px;
  border: 1px solid #38015c;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  
  &:hover{
    background-color: #9f5ccc;
    color: white;
  }
`;

const Removebtn = styled.button`
  background: white;
  position: relative;
  top: -60px;
  left: 700px;
  border: 1px solid white;
  background-color: #38015c;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

export default WorksBox;
