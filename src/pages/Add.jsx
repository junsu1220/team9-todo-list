import Header from "../components/Header";
import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const Add = () => {
  return (
    // <Layout>
    //   <Header />
    <FormContainer>
      <InputGroup>
        <label>작성자</label>
        <input placeholder="" />
        <label>제목</label>
        <input />
        <label>내용</label>
        <input />
      </InputGroup>
      <button>추가하기</button>
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
  }
`;
