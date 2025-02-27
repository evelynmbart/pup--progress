import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./css/App.css";
import Chapters from "./pages/Chapters";
import Freestyle from "./pages/Freestyle";
import Home from "./pages/Home";
function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/freestyle" element={<Freestyle />} />
      </Routes>
    </main>
  );
}

export default App;
