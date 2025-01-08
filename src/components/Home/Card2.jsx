import { useState } from "react";
import EnquiryForm from "./EnquiryForm"


const Card2 = () => {
    const [showEnquiryForm, setShowEnquiryForm] = useState(false)
    
      const handleEnquiryClick = () => {
        setShowEnquiryForm(true);
      }
    
      const handleCloseForm = () => {
        setShowEnquiryForm(false);
      }
    return (
        <div className='flex justify-center p-8'>
            <div className='w-[460px] p-6 rounded-md bg-orange-100 text-center'>
                <div className="text-xl font-bold">Send Enquiry</div>
                <div className="text-xl font-bold">And get a free Consultation</div>
                <p className='text-[12px] text-gray-600 my-2'>Make sure the manufacturing companies are certified by GMP and WHO. It is mandatory to ensure that all the products have been manufactured following.</p>
                <div onClick={handleEnquiryClick} className="bg-orange-500 mt-3 cursor-pointer text-white text-sm font-semibold rounded-lg py-3 md:py-2">Send Enquiry</div>
            </div>
            {showEnquiryForm && <EnquiryForm onClose={handleCloseForm} />}
        </div>
    )
}

export default Card2
