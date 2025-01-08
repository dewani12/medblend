import { useState } from "react";
import EnquiryForm from "./EnquiryForm"


const Card1 = () => {
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
                <div className="text-2xl font-bold mx-7">Take the First Step towards Success - Let's Talk</div>
                <div onClick={handleEnquiryClick} className="bg-orange-500 mt-3 cursor-pointer text-white text-sm font-semibold rounded-lg py-3 md:py-2">Let's Talk</div>
            </div>
            {showEnquiryForm && <EnquiryForm onClose={handleCloseForm} />}
        </div>
    )
}

export default Card1
