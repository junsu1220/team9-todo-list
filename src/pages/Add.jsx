import Header from "../components/Header";
import Layout from "../components/Layout";
import React from "react";

const Add = () => {
  return (
    <Layout>
      <Header />
      <FormContainer>
        <InputGroup>
          <label>작성자</label>
          <input />
          <label>제목</label>
          <input />
          <label>내용</label>
          <input />
        </InputGroup>
        <button>추가하기</button>
      </FormContainer>
    </Layout>
  );
};

export default Add;
