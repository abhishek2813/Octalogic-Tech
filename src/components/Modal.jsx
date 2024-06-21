// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit,formData,setFormData }) => {
  if (!isOpen) return null;
// console.log(formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white w-1/3 p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Course</h2>
        <form onSubmit={onSubmit}>
           <div className="mb-4">
            <input
              type="text"
              placeholder="Course Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={formData.instructor}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="instrument"
              value={formData.instrument}
              onChange={handleChange}
            >
              <option value="">Instrument</option>
              <option value="piano">Piano</option>
              <option value="guitar">Guitar</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="dayOfWeek"
              value={formData.dayOfWeek}
              onChange={handleChange}
            >
              <option value="">Day of the week</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <input
              name="price"
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-300 hover:bg-pink-400 rounded"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
