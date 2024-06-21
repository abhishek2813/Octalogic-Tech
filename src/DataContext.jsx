import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

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

// Custom hook to use the DataContext
export const useData = () => {
  return useContext(DataContext);
};
