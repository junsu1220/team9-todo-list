import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import HomeImage from "../components/Home/HomeImage";

const Home = () => {
  return (
    <Fragment>
      <HomeImage />
      <NavLink to="/work">할일 기록하기</NavLink>
      <br />
      <NavLink to="/works">TODO LIST</NavLink>
    </Fragment>
  );
};

export default Home;
