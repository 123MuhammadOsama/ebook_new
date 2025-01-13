'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  reason: string;
  businessLevel: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    reason: '',
    businessLevel: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.info('Submitting your request...', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      theme: 'light',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Form submitted successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: 'colored',
          style: {
            backgroundColor: '#083554',
            color: '#fff',
          },
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          city: '',
          reason: '',
          businessLevel: '',
        });
      } else {
        toast.error(result.message || 'Failed to send message', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: 'light',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-start p-6 2xl:p-12">
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
      <form
        className="w-full lg:max-w-2xl bg-white p-8 rounded-xl 2xl:ml-52 border-2 border-[#f04a4a] mt-24"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-4 text-start text-[#ee4747]">
          Contact Our Business Proposal Experts
        </h2>
        <div className="w-20 mb-4 border-b-4 border-[#ee4848]"></div>
        <p className="text-start mb-4 text-[#ee4242]">
          We are anticipating working with you! Fill in the form and our
          representative will get back to you within 24 hours.
        </p>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <input
            className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 border border-[#f34747]"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border border-[#f04c4c] rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full p-2 border border-[#ec4545] rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full p-2 border border-[#f04c4c] rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full p-2 border border-[#eb4545] rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-[#f54646] rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            name="reason"
            placeholder="Why do you need the business plan?"
            value={formData.reason}
            onChange={handleChange}
            rows={2}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <select
            className="w-full p-2 border border-[#e44545] rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            name="businessLevel"
            value={formData.businessLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Business Level</option>
            <option value="Startup">Startup</option>
            <option value="Established">Established</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>

        <button
          className={`w-full py-3 rounded-xl transition-colors mt-5 ${
            !isSubmitting
              ? 'bg-[#fa3c3c] text-white hover:bg-[#e94f4a]'
              : 'bg-red-500 text-gray-300 cursor-not-allowed'
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className="w-full 2xl:w-1/2 2xl:h-[650px] mt-8 lg:mt-0 lg:ml-8 flex-grow lg:max-w-3xl 2xl:mr-28">
        <div className="hidden lg:block mt-24">
          <Image
            src="/Mask_group.png"
            alt="our team"
            width={500}
            height={500}
            title="our team"
            className="h-auto w-auto"
          />
        </div>

        <div className="flex flex-col items-start justify-center bg-white p-8 rounded-xl shadow-md lg:max-w-[500px] h-[230px] mt-5 border-2 border-[#e44943]">
          <div className="mb-4 flex items-center">
            <Phone
              size={40}
              className="mr-4 p-2 bg-red-200 rounded-full text-[#ec3c3c]"
            />
            <div>
              Phone <br />
              <Link
                rel="nofollow"
                href="https://wa.me/254797755226"
                className="hover:underline"
              >
                +254797755226
              </Link>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <Mail
              size={40}
              className="mr-4 p-2 bg-red-200 rounded-full text-[#dd3737]"
            />
            <div>
              Email <br />
              <Link
                rel="nofollow"
                href="mailto:scriptershubltd@gmail.com"
                className="hover:underline"
              >
                scriptershubltd@gmail.com
              </Link>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <MapPin
              size={40}
              className="mr-4 p-2 bg-red-200 rounded-full text-[#e24444]"
            />
            <div>
              Nairobi, Kenya <br />
              Kasarani, Mwiki
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
