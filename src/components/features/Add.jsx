import React from "react";
import styled from "styled-components";
import { todosActions } from "../../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

const Add = () => {
  const dispatch = useDispatch();
  const userName = React.useRef();
  const title = React.useRef();
  const comment = React.useRef();
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos[0].title);

  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log(addTodoHandler);
    dispatch(
      todosActions.addTodo({
        id: nanoid(),
        userName: userName.current.value,
        title: title.current.value,
        comment: comment.current.value,
      }),
      (userName.current.value = ""),
      (title.current.value = ""),
      (comment.current.value = "")
    );
  };

  return (
    // <Layout>
    //   <Header />
    <FormContainer>
      <InputGroup>
        <label>작성자</label>
        <input
          placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
          type="text"
          ref={userName}
        />
        <label>제목</label>
        <input
          placeholder="제목을 입력해주세요.(50자 이내)"
          type="text"
          ref={title}
        />
        <label>내용</label>
        <input
          style={{ padding: "0px 0px 200px" }}
          placeholder="내용을 입력해주세요.(200자 이내)"
          type="text"
          ref={comment}
        />
      </InputGroup>
      <button onClick={addTodoHandler}>추가하기</button>
      <div>
        <h2>aaa</h2>
      </div>
    </FormContainer>
    // </Layout>
  );
};

export default Add;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputGroup = styled.div`
  width: 700vw;
  height: 500px;
  border: 1px solid #333c8f;
  border-radius: 5px;
  & input {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 20px 0px 20px 20px;
    padding: 0px 0px 20px;
  }
`;
