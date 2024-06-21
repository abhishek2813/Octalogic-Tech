import React from 'react'
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
import { Link } from 'react-router-dom';

function BestStudents() {
  const {students} = useData();

  return (
    <div className="p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray">Best Students</h2>
      <Link to="/course" className="text-pink-500 hover:underline">View All Students</Link>
    </div>
    <div className="bg-white shadow rounded-lg overflow-hidden p-4">
    <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reg No</TableHead>
              <TableHead>F Name</TableHead>
              <TableHead>L Name</TableHead>
              <TableHead>Course#</TableHead>
              <TableHead>Total Fees</TableHead>
              <TableHead>Reg Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.regNo}>
                <TableCell>{student.regNo}</TableCell>
                <TableCell>{student.fName}</TableCell>
                <TableCell>{student.lName}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.totalFees}</TableCell>
                <TableCell>{student.regDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  </div>
  )
}

export default BestStudents