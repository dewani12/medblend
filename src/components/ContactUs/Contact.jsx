import { useState } from "react"
import axios from "axios"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('https://api.sheetbest.com/sheets/0279e8cf-a541-4843-afe3-afc54ebf071a',formData)
        setFormData({
            name: "",
            email: "",
            phone: "",
            description: ""
        })
      }
return (
    <div className="px-5 md:px-8 py-3 max-w-screen-lg mx-auto">
        <div className="my-4">
            <div className="text-2xl font-bold">Get in Touch with Us</div>
            <p className="mt-1 text-[11px] mb-8">Complete the form below, and we'll be in touch soon. Your inquiries matter to us.</p>

            <form onSubmit={handleSubmit} className="mt-4">
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
                        className="w-[240px] px-2 py-2 rounded-sm focus:border-black border border-gray-400 text-sm"
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
                        className="w-[240px] px-2 py-2 rounded-sm focus:border-black border border-gray-400 text-sm"
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
                        className="w-[240px] px-2 py-2 rounded-sm focus:border-black border border-gray-400 text-sm"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-sm">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Write here..."
                        value={formData.description}
                        onChange={handleChange}
                        className="w-[240px] px-2 py-2 rounded-sm focus:border-black border border-gray-400 text-sm h-32"
                    />
                </div>
                <button
                    type="submit"
                    className="w-[240px] py-2 px-5 bg-orange-500 text-white rounded-md mb-4 text-sm"
                >
                    Send Enquiry
                </button>
            </form>
        </div>
        <div className="my-8 text-center">
            <div className="text-2xl font-bold">Connect with Medblend Pharma</div>
            <p className="mt-1 text-[11px]">Contact Medblend Pharma for Inquiries, Support, or Collaborations – We're Here to Assist You</p>
            <div className="flex flex-col items-center md:flex-row justify-around mt-4 space-y-8 md:space-y-0">
                <div className="bg-orange-100 text-center p-12 rounded-lg w-[240px] shadow-xl">
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm font-semibold">info@medblend.co.in</p>
                </div>
                <div className="bg-orange-100 text-center p-12 rounded-lg w-[240px] shadow-xl">
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-sm font-semibold">+91 9329531157</p>
                </div>
                <div className="bg-orange-100 text-center p-12 rounded-lg w-[240px] shadow-xl">
                    <p className="text-sm font-semibold">Office</p>
                    <p className="text-sm font-semibold"></p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Contact
