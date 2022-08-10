import Add from "./pages/Add";
import Posts from "./pages/Posts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </div>
  );
}

export default App;
