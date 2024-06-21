import React, { createContext, useContext, useEffect, useState } from "react";
import apiData from "./data/api.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Get saved data from localStorage
  const savedLogin = localStorage.getItem("isLogin");
  const savedCourses = localStorage.getItem("courses");
  const savedStudents = localStorage.getItem("students");

  // Initialize state
  const [isLogin, setIsLogin] = useState(
    savedLogin ? JSON.parse(savedLogin) : false
  );
  
  const [courses, setCourses] = useState(() => {
    if (savedCourses) {
      return JSON.parse(savedCourses);
    } else {
      localStorage.setItem("courses", JSON.stringify(apiData.courses));
      return apiData.courses;
    }
  });

  const [students, setStudents] = useState(() => {
    if (savedStudents) {
      return JSON.parse(savedStudents);
    } else {
      localStorage.setItem("students", JSON.stringify(apiData.students));
      return apiData.students;
    }
  });

  // Update localStorage when isLogin changes
  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  // Update localStorage when courses change
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // Update localStorage when students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Login and logout functions
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
