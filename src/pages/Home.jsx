import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import HomeImage from "../components/Home/HomeImage";
import StartingPageContent from "../components/StartingPage/StartingPageContent";

const Home = () => {
  return (
    <Fragment>
      <StartingPageContent />
      <HomeImage/>     
      <NavLink to="/work">할일 기록하기</NavLink>
      <br />
      <NavLink to="/works">TODO LIST</NavLink>
    </Fragment>
  );
};

export default Home;
