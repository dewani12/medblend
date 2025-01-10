import { useState } from "react";
import axios from "axios";

const EnquiryForm = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted", formData);
    axios.post('https://api.sheetbest.com/sheets/0279e8cf-a541-4843-afe3-afc54ebf071a',formData)
        setFormData({
            name: "",
            email: "",
            phone: ""
        })
  };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 shadow-lg w-[280px]">
        <h2 className="text-lg font-bold mt-4 mb-8">Send Enquiry</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-2 py-2 rounded-sm focus:outline-none border border-gray-400 bg-gray-100 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-2 rounded-sm focus:outline-none border border-gray-400 bg-gray-100 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="9999999999"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-2 py-2 rounded-sm focus:outline-none border border-gray-400 bg-gray-100 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-md font-bold mb-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
