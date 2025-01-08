import banner from '../../assets/about-banner.png'

const About = () => {
    return (
        <div className='px-5 md:px-8 py-1 max-w-screen-lg mx-auto my-6'>
            <div className='flex flex-col md:flex-row md:space-x-20'>
                <div className="w-full md:w-1/2">
                    <div className="text-2xl font-bold">Medblend Pharma at a Glance</div>
                    <p className="my-2 text-[11px] text-gray-600">Vibcare Pharma is a renowned pharmaceutical company dedicated to providing high-quality, affordable healthcare solutions. Established in 2019, we have rapidly grown our product range to over 1500 offerings across 11+ divisions, with a vast network of over 5000 distributors throughout India. Our commitment to innovation, quality, and customer satisfaction has earned us a leading position in the pharmaceutical industry, making us a trusted partner for pharma franchise, PCD franchise, and pharma PCD franchise opportunities.</p>
                    <p className="text-[11px] text-gray-600">Our state-of-the-art manufacturing plant, compliant with EU PICS and UKMHRA GMP standards, sets us apart from the competition. By owning our manufacturing facility, we ensure that our customers receive the highest quality products, better stock availability, and competitive pricing. As we continue to expand, we remain dedicated to our vision of becoming a global healthcare organization recognized for our commitment to innovation, quality, and competence. Join us in our mission to deliver the highest standard of healthcare services to all segments of society, without compromising our core values of integrity, ethics, and commitment.</p>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-12">
                    <img src={banner} alt="Medblend Banner" className='rounded-lg w-full md:w-80' />
                </div>
            </div>
        </div>
    )
}

export default About
