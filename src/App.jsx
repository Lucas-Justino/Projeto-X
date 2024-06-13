import Home from "./pages/Home.jsx";
import MyIcon from "./components/MyIcon.jsx";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Feed from "./pages/Feed.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
