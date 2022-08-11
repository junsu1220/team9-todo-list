import { Link } from "react-router-dom";
import WorksBox from "./WorksBox";
import { useSelector } from "react-redux";

const Works = () => {
  const todoList = useSelector((state) => state.todos.todos);
  return (
    <Link to={`/detail/${todoList.id}`}>
      <div>상세보기</div>
      <WorksBox />
    </Link>
  );
};

export default Works;
