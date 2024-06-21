import React, { useState } from 'react';
import EnrolmentsTable from './EnrolmentsTable'
import Modal from './Modal'

function Course() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form data here
      closeModal();
    };

  return (
    <div className="bg-gray h-screen">
              <h1 className="text-2xl font-bold text-gray-400 mb-4">Courses</h1>
         <EnrolmentsTable />
         <button 
        className="fixed bottom-4 right-4 bg-pink-300 hover:bg-pink-400 text-black font-semibold py-2 px-4 rounded shadow" 
        onClick={openModal}
      >
        <span className="mr-2">+</span> Add Course
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
    </div>
  )
}

export default Course