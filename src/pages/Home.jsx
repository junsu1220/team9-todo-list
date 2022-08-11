import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from "../components/Home/HomeImage";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <HomeImage />
      <ButtonBox>
        <HomeButton
          onClick={() => {
            navigate("/work");
          }}
        >
          만화 기록하기
        </HomeButton>
        <HomeButton
          onClick={() => {
            navigate("/works");
          }}
        >
          기록한 만화 보기
        </HomeButton>
      </ButtonBox>
    </Fragment>
  );
};

const ButtonBox = styled.div`
  width: 700px;
  margin: 0px auto;
  padding: 10px;
`;

const HomeButton = styled.button`
  width: 300px;
  height: 50px;
  color: white;
  background-color: #38015c;
  margin: 0px 20px;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 10px;

  &:hover {
    background-color: #9f5ccc;
  }
`;

export default Home;
