import React, { useState } from "react";
import Modal from "./Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { MenuIcon } from "./Icons";
import { useToast } from "./ui/use-toast";
import { useData } from "@/DataContext";

function Course() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const {courses,setCourses} = useData();
  const [allCourses] = useState(courses);
  const [searchKey, setSearchKey] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    instructor: "",
    instrument: "",
    dayOfWeek: "",
    numberOfStudents: 10,
    price: "",
    status: "Active",
  });
  const { toast } = useToast();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);

    // console.warn(formData);
    if (
      formData.name === "" ||
      formData.day === "" ||
      formData.description === "" ||
      formData.instructor === "" ||
      formData.instrument === "" ||
      formData.price === ""
    ) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields.",
      });
      return;
    }

    const newCourse = {
      ...formData,
      id: Date.now(), // Generate a unique ID
    };

    console.warn(newCourse);
    setCourses((prevCourses) => [...prevCourses, newCourse]);

    toast({
      variant: "success",
      title: "Added",
      description: "Course added successfully!",
    });
    setFormData({
      name: "",
      description: "",
      instructor: "",
      instrument: "",
      dayOfWeek: "",
      numberOfStudents: 10,
      price: "",
      status: "Active",
    });

    closeModal();
  };

  const searchCourse = (e) => {
    setSearchKey(e.target.value.toLowerCase());

    if (searchKey === "") {
      setCourses(allCourses);
    } else {
      const filteredCourses = allCourses.filter((course) => {
        return (
          course.name.toLowerCase().includes(searchKey) ||
          course.description.toLowerCase().includes(searchKey) ||
          course.instructor.toLowerCase().includes(searchKey) ||
          course.instrument.toLowerCase().includes(searchKey) ||
          course.dayOfWeek.toLowerCase().includes(searchKey) ||
          course.price.toLowerCase().includes(searchKey) ||
          course.status.toLowerCase().includes(searchKey)
        );
      });
      setCourses(filteredCourses);
    }
  };

  return (
    <div className="bg-gray">
      <h1 className="text-2xl font-bold text-gray-500 mb-4">Courses</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-4">
          <h2 className="text-1xl text-gray-400 mb-4">Course List</h2>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => searchCourse(e)}
            className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Instrument</TableHead>
              <TableHead>Day of Week</TableHead>
              <TableHead># of Student</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>{course.instrument}</TableCell>
                <TableCell>{course.dayOfWeek}</TableCell>
                <TableCell>{course.numberOfStudents}</TableCell>
                <TableCell>{course.price}</TableCell>
                <TableCell>
                  {course.status === "Active" ? (
                    <Button variant="success">{course.status}</Button>
                  ) : course.status === "Closed" ? (
                    <Button variant="destructive">{course.status}</Button>
                  ) : (
                    <Button variant="secondary">{course.status}</Button>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        disabled={course.status === "Closed"}
                      >
                        <MenuIcon className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {course.status === "Achieved" ? (
                        <DropdownMenuItem>Unarchive Course</DropdownMenuItem>
                      ) : (
                        <>
                          <DropdownMenuItem>Edit Course</DropdownMenuItem>
                          <DropdownMenuItem>Close Course</DropdownMenuItem>
                          <DropdownMenuItem>Archive Course</DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-pink-300 hover:bg-pink-400 text-black font-semibold py-2 px-4 rounded shadow"
        onClick={openModal}
      >
        <span className="mr-2">+</span> Add Course
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default Course;
