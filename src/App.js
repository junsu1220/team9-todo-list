import Add from "./pages/Add";
import Posts from "./pages/Posts";
import { Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
