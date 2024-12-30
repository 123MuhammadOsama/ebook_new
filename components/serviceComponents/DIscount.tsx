'use client';
import { ThumbsUp } from 'lucide-react';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const Discount = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch('/api/HomeForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Form submitted successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: '#083554', // Green background for success
            color: '#fff', // White text
          },
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
        });
      } else {
        toast.error(result.message || 'Failed to send message', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: '#083554', // Red background for error
            color: '#fff', // White text
          },
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
        style: {
          backgroundColor: '#f44336', // Red background for error
          color: '#fff', // White text
        },
      });
    }
  };

  return (
    <section className="relative flex justify-center items-center bg-white shadow-lg rounded-3xl border-2 border-gray-300 lg:max-w-6xl md:max-w-6xl max-w-[450px]
     h-auto my-6 mx-auto p-6 md:p-11 bottom-20">
      <ToastContainer
        className="toast-container"
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <div className="text-[#083554] w-full">
      <span className="xl:text-4xl md:text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-[30px] flex justify-center">
          Don’t Let the Next Opportunity Slip Away – Hire a Pro Now!
        </span>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4 mt-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border-2 border-red-500 rounded-lg p-3 w-full md:w-[30%] focus:outline-none focus:border-red-700"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-2 border-red-500 rounded-lg p-3 w-full md:w-[30%] focus:outline-none focus:border-red-700"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Number"
            className="border-2 border-red-500 rounded-lg p-3 w-full md:w-[30%] focus:outline-none focus:border-red-700"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 duration-300 flex items-center justify-center w-full md:w-auto"
          >
            Submit <ThumbsUp className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Discount;