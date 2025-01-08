import phone from '../../assets/phone.svg'
import mail from '../../assets/mail.svg'
// import instagram from '../assets/instagram.svg'
// import twitter from '../assets/twitter.svg'
// import linkedin from '../assets/linkedin.svg'

const Banner = () => {
  return (
    <div className='bg-orange-100 w-full p-2 flex justify-center items-center'>
      <div className='flex space-x-5 items-center'>
        <div className='flex items-center space-x-1'><img src={phone} alt="phone" className='w-4' /><a href="tel:+919329531157" className='text-sm'>+91-9329531157</a></div>
        <div className='flex items-center space-x-1'><img src={mail} alt="phone" className='w-5' /><a href="mailto:info@medblend.co.in" className='text-sm'>info@medblend.co.in</a></div>
      </div>
      <div>
        {/* <img src={linkedin} alt="phone" className='w-5' />
        <img src={instagram} alt="phone" className='w-5' />
        <img src={twitter} alt="phone" className='w-5' /> */}
      </div>
    </div>
  )
}

export default Banner
