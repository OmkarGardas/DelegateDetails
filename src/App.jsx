import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./component/login/Login";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/content" element={<Content />} /> */}
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
