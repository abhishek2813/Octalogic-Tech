import React from 'react';

const EnrolmentsTable = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray">Latest Enrolments</h2>
        <a href="#" className="text-pink-500 hover:underline">View All Courses</a>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enr. No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">C. Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enr. Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1563124</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Percussion</td>
              <td className="px-6 py-4 whitespace-nowrap">$120</td>
              <td className="px-6 py-4 whitespace-nowrap">12-08-223</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
              <td className="px-6 py-4 whitespace-nowrap">column</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolmentsTable;
