import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

import loginData from "../data/login.json";
import { useNavigate } from "react-router-dom";

//context api
import { useData } from "../DataContext";

function Login() {
  // State variables
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login,isLogin } = useData();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check login
  const checkLogin = () => {

    console.log(isLogin);
    if (userName === "" || password === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Username or password cannot be empty",
      });
    } else {
      const user = loginData.users.find(
        (user) => user.username === userName && user.password === password
      );

      if (user) {
        // set is login true
        login();
        toast({
          variant: "success",
          title: "Success",
          description: "Login successful!",
        });

        // Redirect to home after login
        navigate("/home");
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Invalid username or password",
        });
      }
    }
  };
  
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="p-10 rounded-lg shadow-lg">
        <Card className="w-[350px]">
          <div className="text-center">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login for Dashboard</CardDescription>
            </CardHeader>
          </div>
          <CardContent>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="userName">Name</Label>
                <Input
                  id="userName"
                  placeholder="admin"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="admin"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={checkLogin}>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
