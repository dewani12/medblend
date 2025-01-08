import EnquiryForm from './EnquiryForm'
import { useState } from 'react'
import banner from '../../assets/banner.png'

const HeroSection = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)

  const handleEnquiryClick = () => {
    setShowEnquiryForm(true);
  }

  const handleCloseForm = () => {
    setShowEnquiryForm(false);
  }

  return (
    <div className='w-full flex justify-center flex-col lg:flex-row max-w-screen-lg mx-auto'>
      <div className='w-full lg:w-1/2 md:p-8 p-5'>
        <div className='text-4xl font-semibold'>Shaping the Future of Pharma Franchise in India</div>
        <p className='text-sm mt-4 text-gray-500'>
          With Medblend Pharma, step into the world of unmatched quality, extensive product range, and unwavering support. 
          We are your partners in paving the way to success in the pharma franchise landscape.
        </p>
        <div className='flex md:flex-row flex-col mt-10 md:mt-20 md:space-x-3 text-sm cursor-pointer text-center'>
          <div onClick={handleEnquiryClick} className='text-white bg-orange-500 rounded-lg px-14 md:py-2 py-3'>Send Enquiry</div>
          <div className='border-[1px] border-gray-400 rounded-lg md:py-2 py-3 px-8 mt-2 md:mt-0'>Download Price list</div>
        </div>
      </div>
      <div className='w-full lg:w-1/2 md:p-8 p-5'>
        <img src={banner} alt="Banner" />
      </div>
      {showEnquiryForm && <EnquiryForm onClose={handleCloseForm} />}
    </div>
  )
}

export default HeroSection;
