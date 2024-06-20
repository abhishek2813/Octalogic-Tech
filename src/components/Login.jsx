import React from "react";
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
function Login() {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="p-10 rounded-lg shadow-lg">
        <Card className="w-[350px]">
        <div className="text-center">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login for Dashboard
            </CardDescription>
          </CardHeader>
          </div>
          <form>
          <CardContent>
          
            
              <div className="grid w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="admin" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="name" placeholder="admin" />
                </div>
              </div>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Login</Button>
            
          </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
