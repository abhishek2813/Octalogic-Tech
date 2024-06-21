import { Routes, Route, } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Course from './components/Course';
import Login from './components/Login';
import { Toaster } from "@/components/ui/toaster"


function App() {
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
