import { Link } from "react-router-dom";
import WorksBox from "./WorksBox";

const Works = () => {
  return (
    <Link to={"/detail"}>
      <div>상세보기</div>
      <WorksBox />
    </Link>
  );
};

export default Works;
