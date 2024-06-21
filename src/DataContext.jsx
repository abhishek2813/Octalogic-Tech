import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const savedLogin = localStorage.getItem("isLogin");
  const savedCourses = localStorage.getItem("courses");
  const savedStudents = localStorage.getItem("students");

  const [isLogin, setIsLogin] = useState(
    savedLogin ? JSON.parse(savedLogin) : false
  );
  const [courses, setCourses] = useState(
    savedCourses ? JSON.parse(savedCourses) : []
  );
  const [students, setStudents] = useState(
    savedStudents ? JSON.parse(savedStudents) : []
  );



  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <DataContext.Provider
      value={{
        isLogin,
        login,
        logout,
        courses,
        setCourses,
        students,
        setStudents,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook
export const useData = () => {
  return useContext(DataContext);
};
