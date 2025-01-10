import { useState } from "react"
import axios from "axios";

const Partner = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
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
        <div className="bg-orange-100 px-5 md:px-8 py-5">
            <div className="w-full md:w-1/2">
                <div className="text-2xl font-bold my-2">
                    Partner with Medblend Pharma Today
                </div>
                <p className="text-[12px]">Ready to grow with Vibcare Pharma? Start your journey now.
                </p>
                <p className="text-[12px]">
                Your success in the healthcare industry starts here.
                </p>
                <div>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="flex flex-col md:flex-row md:space-x-2">
                        <div className="mb-6">
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
                                className="px-2 py-2 rounded-sm focus:border-black border border-gray-400 text-sm"
                                required
                            />
                        </div>
                        <div className="mb-6">
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
                                className="px-2 py-2 rounded-sm focus:border-black border border-gray-400 text-sm"
                                required
                            />
                        </div>
                        <div className="mb-6">
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
                                className="px-2 py-2 rounded-sm focus:border-black border border-gray-400 text-sm"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="py-2 px-5 bg-orange-500 text-white rounded-sm mb-4 text-sm"
                    >
                        Send Enquiry
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Partner
