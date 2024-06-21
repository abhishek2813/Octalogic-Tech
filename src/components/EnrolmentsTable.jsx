import React from 'react';
import { Link } from 'react-router-dom';
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
import { MenuIcon } from "./Icons";
import { Button } from "./ui/button";
import { useData } from "@/DataContext";

const EnrolmentsTable = () => {
  const {courses} = useData();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray">Latest Enrolments</h2>
        <Link to="/course" className="text-pink-500 hover:underline">View All Courses</Link>
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
            {courses.slice(0,5).map((course) => (
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
    </div>
  );
};

export default EnrolmentsTable;
