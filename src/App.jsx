import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Course from "./components/Course";
import Login from "./components/Login";
import { Toaster } from "@/components/ui/toaster";
import { useData } from "./DataContext";
import { useEffect } from "react";

function App() {
  const { isLogin } = useData();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin]);
  // console.log(isLogin);
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/course" element={<Layout />}>
          <Route index element={<Course />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
