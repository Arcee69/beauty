import React from 'react'
import Buttons from '../../components/Buttons'
import { FaCut, FaEnvelope, FaEye, FaHandSparkles, FaInstagram, FaMapMarkerAlt, FaPaintBrush, FaSpa, FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaWandMagic, FaPhone } from 'react-icons/fa6'


const Home = () => {

    const services = [
        {
            id: 1,
            icons: <FaHandSparkles className="text-[36px] text-[#FF8FAB]" />,
            title: "Nail Artistry",
            subtitle: "From classic manicures to avant-garde nail art, our technicians will keep your tips flawless."
        },
        {
            id: 2,
            icons: <FaCut className="text-[36px] text-[#FF8FAB]" />,
            title: "Hair Styling",
            subtitle: "Cut, color, blowout or treatment - our stylists will make sure your hair is always on point."
        },
        {
            id: 3,
            icons: <FaEye className="text-[36px] text-[#FF8FAB]" />,
            title: "Lash Extensions",
            subtitle: "Wake up every day with perfect lashes that enhance your natural beauty."
        },
        {
            id: 4,
            icons: <FaPaintBrush className="text-[36px] text-[#FF8FAB]" />,
            title: "Makeup Glam",
            subtitle: "Professional makeup applications for any occasion, from everyday glam to special events."
        },
        {
            id: 5,
            icons: <FaSpa className="text-[36px] text-[#FF8FAB]" />,
            title: "Spa Treatments",
            subtitle: "Relax and rejuvenate with our luxurious facials, massages, and body treatments."
        },
        {
            id: 6,
            icons: <FaWandMagic className="text-[36px] text-[#FF8FAB]" />,
            title: "Brows",
            subtitle: "Perfectly arched brows frame your face and complete your look."
        },

    ]

    const snatcher = [
        {
            id: 1,
            services: "4 services per month"
        },
        {
            id: 2,
            services: "1 Hair Styling Session (Basic Styling, Braids, or Ponytail)"
        },
        {
            id: 3,
            services: "1 Gel Builder Nail Service"
        },
        {
            id: 4,
            services: "1 Lash Lift or Classic Lash Extensions"
        },
        {
            id: 5,
            services: "1 Brows Lining"
        },
    ]

    const glow = [
        {
            id: 1,
            services: "6 services per month"
        },
        {
            id: 2,
            services: "2 Hair Styling Sessions (Basic Styling or Ponytail)"
        },
        {
            id: 3,
            services: "1 Acrylic or Builder Nail Service"
        },
        {
            id: 4,
            services: "1 Brow Lining"
        },
        {
            id: 5,
            services: "1 Classic or Hybrid Lash Extensions, with an optional refill for long-lasting beauty"
        },
        {
            id: 6,
            services: "1 Spa Treatments (Facial)"
        },
        {
            id: 7,
            services: "5% off additional services"
        },
    ]

    const luxury = [
        {
            id: 1,
            services: "2 Hair Styling Sessions (Any Style, Including Wig Installs)"
        },
        {
            id: 2,
            services: "Unlimited Acrylic or Builder Nail Services"
        },
        {
            id: 3,
            services: "Unlimited Lash Fills (Classic, Hybrid, or Volume)"
        },
        {
            id: 4,
            services: "1 Brow Microblading Service"
        },
        {
            id: 5,
            services: "2 Spa Treatments (Facial, Massage, or Body Scrub)"
        },
        {
            id: 6,
            services: "15% Discount on Additional Services"
        },
        {
            id: 7,
            services: "5% off additional services"
        },
    ]

  return (
    <div className='w-full'>
        {/* Hero */}
        <section
            id='home'
            style={{
                background: `linear-gradient(to bottom, #fff2f6e6, #fff2f6e6), url(https://res.cloudinary.com/code-idea/image/upload/v1743288665/brushes-near-comps-cosmetics_njk2wm.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width:"100%",
              
            }}
            className='w-full min-h-[80vh] pt-[120px] pb-[60px] px-0 flex items-center justify-center'
        >
            <div className='bg-[#ffffffcc] mx-auto w-[800px] p-[30px] h-[413px] rounded-[20px] border border-[#ff8fab33] flex flex-col items-center gap-[25px]'>
                <h1 className='font-playfair text-[52px] text-center leading-[1.2] font-semibold text-[#3A3238]'>
                    <span className='text-[#ff2d6fe3] block'>Pretty On Repeat</span>
                    Make Beauty A Lifestyle
                </h1>
                <p className='italic pitch text-[#3A3238] text-[18px] leading-[1.7] text-center font-mont tracking-[1px]'>
                    Welcome to Pretty On Repeat, 
                    the essence of luxury beauty, one exclusive subscription for flawless nails, hair, lashes, makeup, 
                    and spa indulgence. Because beauty is not a one-time thing, it's a lifestyle.
                </p>
                <Buttons 
                    width="w-[164px]" 
                    text="Explore" 
                />
            </div>
        </section>

        {/* About */}
        <section id='about' className='w-full py-[60px] px-0 flex items-center justify-center '>
            <div className='w-[80%] mx-auto flex flex-col items-center gap-[40px]'>
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-[40px] font-playfair font-semibold text-[#3A3238]'>About Us</p>
                    <div className='h-[1.5px] w-[50px] bg-[#FF2D6F] rounded'></div>
                </div>
                <div className="flex items-center gap-[60px]">
                    <div className='flex flex-col w-6/12 gap-[15px] items-start'>
                        <p className='font-semibold font-playfair text-[#3A3238] text-[32px]'>Your Beauty, Our Passion</p>
                        <p className='font-mont leading-[1.7] text-[#3A3238] text-base'>
                            At Pretty On Repeat, we believe that beauty should be effortless, accessible, and consistent.
                            Our luxurious salon offers a curated selection of beauty services designed to keep you looking
                            and feeling your best every day.
                        </p>
                        <p className='font-mont leading-[1.7] text-[#3A3238] text-base'>
                            Founded in 2025, we've revolutionized the beauty industry with our innovative subscription 
                            model that takes the hassle out of maintaining your glam. Whether you need a quick touch-up 
                            or a full transformation, our team of expert stylists and aestheticians are here to make 
                            beauty a seamless part of your lifestyle.
                        </p>
                        <Buttons 
                            width="w-[214.5px]" 
                            text="Our Services" 
                        />
                    </div>
                    <img 
                        src="https://res.cloudinary.com/code-idea/image/upload/v1743288664/stylist-woman-taking-care-her-client-afro-hair_e92hem.jpg" 
                        alt="Pretty On Repeat Salon" 
                        className='w-6/12 rounded-[20px] transition-all duration-500 ease-in-out hover:scale-105' 
                    />
                </div>
            </div>
        </section>

        {/* Our Services */}
        <section id='services' className='bg-[#FFF2F6] flex items-center py-[60px] gap-[40px]'>
            <div className='w-[80%] mx-auto flex flex-col items-center gap-[40px]'>
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-[40px] font-playfair font-semibold text-[#3A3238]'>Our Services</p>
                    <div className='h-[1.5px] w-[50px] bg-[#FF2D6F] rounded'></div>
                </div>
                <div className='grid grid-cols-3 gap-5 w-full'>
                    {
                        services.map((service) => (
                            <div key={service.id} className='rounded-[15px] hover:translate-y-[-10px] cursor-pointer transition-all duration-300 ease-in bg-[#fff] py-[30px] px-5 flex flex-col border border-[#ff8fab33] items-center justify-center'>
                                <div className='w-[70px] mb-[15px] h-[70px] flex items-center justify-center rounded-[50px] border border-[#ff8fab33] bg-[#ff8fab1a]'>
                                    {service.icons}
                                </div>
                                <p className='text-[22px] mb-3 font-semibold font-playfair text-[#3A3238]'>{service.title}</p>
                                <p className='text-[#3A3238] text-[15px] font-mont leading-[1.7] text-center'>
                                    {service.subtitle}  
                                </p>
                            </div>
                        ))
                    }
                </div>     
            </div>
        </section>
        
        {/* Membership Plans */}
        <section id='membership' className='w-full py-[60px] px-0 flex items-center justify-center'>
            <div className='w-[80%] mx-auto flex flex-col items-center gap-[40px]'>
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-[40px] font-playfair font-semibold text-[#3A3238]'>Membership Plans</p>
                    <div className='h-[2px] w-[50px] bg-[#FF2D6F] rounded'></div>
                </div>
                <p className='text-base font-mont text-[#3A3238] w-[700px] leading-[1.7] text-center'>
                    Choose the perfect beauty subscription to keep you looking flawless all month long. 
                    All plans include priority booking and exclusive member perks.
                </p>
                <div className='grid grid-cols-3 gap-[25px] w-full'>
                    <div className='rounded-[15px] bg-[#FFF2F6] py-[30px] px-5 border relative border-[#ff8fab4d] flex flex-col items-center '>
                        <div className='absolute w-[95%] h-[5px]  bg-gradient-to-br from-[#FF8FAB] to-[#FF2D6F] top-0'></div>
                        <p className='text-[24px] mb-3 pt-2.5 font-semibold font-playfair text-[#ff2d6fe3]'>The Snatched Starter</p>
                        <p className='text-[#3A3238] font-mont text-[36px] mb-[15px] font-semibold'>₦65,000<span className='text-[15px] font-normal'>/month</span></p>
                        <div className='flex flex-col gap-3 mb-[25px]'>
                            {
                                snatcher.map((i, index) => (
                                    <div className='flex items-start border border-x-0 py-[10px] border-t-0 border-b-[#ff8fab33] gap-2' key={index}>
                                        <p className='text-[#ff2d6fe3] font-mont'>✔</p> 
                                        <p className='text-[#3A3238] font-mont'>{i.services}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='absolute bottom-8'>
                            <Buttons 
                                width={"w-[200px]"}
                                text="Join Now"
                            />
                        </div>
                    </div>
                    <div 
                        style={{
                            boxShadow: "0 5px 15px rgba(251, 111, 146, 0.2)"
                        }}
                        className='rounded-[15px] translate-y-[-8px]  bg-[#FFF] py-[30px] px-5 border relative border-[#ff8fab4d] flex flex-col items-center'
                    >
                        <div className='absolute w-[95%] h-[5px]  bg-gradient-to-br from-[#FF8FAB] to-[#FF2D6F] top-0'></div>
                        <div className='absolute rounded-[20px] px-3 py-[4px] bg-gradient-to-r from-[#FF2D6F] to-[#F5D7B0] top-[15px] right-[15px]'>
                            <p className='text-[#3A3238] uppercase tracking-[1px] font-mont font-bold text-[11px]'>Most Popular</p>
                        </div>
                        <p className='text-[24px] mb-3 pt-2.5 font-semibold font-playfair text-[#ff2d6fe3]'>Glow All Month</p>
                        <p className='text-[#3A3238] font-mont text-[36px] mb-[15px] font-semibold'>₦120,000<span className='text-[15px] font-normal'>/month</span></p>
                        <div className='flex flex-col gap-3 mb-[25px]'>
                            {
                                glow.map((i, index) => (
                                    <div className='flex items-start border border-x-0 py-[10px] border-t-0 border-b-[#ff8fab33] gap-2' key={index}>
                                        <p className='text-[#ff2d6fe3] font-mont'>✔</p> 
                                        <p className='text-[#3A3238] font-mont'>{i.services}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='absolute bottom-8'>
                            <Buttons 
                                width={"w-[200px]"}
                                text="Join Now"
                            />
                        </div>
                    </div>
                    <div className='rounded-[15px]  bg-[#FFF2F6] py-[30px] px-5 border relative border-[#ff8fab4d] flex flex-col items-center '>
                        <div className='absolute w-[95%] h-[5px]  bg-gradient-to-br from-[#FF8FAB] to-[#FF2D6F] top-0'></div>
                        <p className='text-[24px] mb-3 pt-2.5 font-semibold font-playfair text-[#ff2d6fe3]'>Luxury On Repeat</p>
                        <p className='text-[#3A3238] font-mont text-[36px] mb-[15px] font-semibold'>₦250,000<span className='text-[15px] font-normal'>/month</span></p>
                        <div className='flex flex-col gap-3 mb-[25px]'>
                            {
                                luxury.map((i, index) => (
                                    <div className='flex items-start border border-x-0 py-[10px] border-t-0 border-b-[#ff8fab33] gap-2' key={index}>
                                        <p className='text-[#ff2d6fe3] font-mont'>✔</p> 
                                        <p className='text-[#3A3238] font-mont'>{i.services}</p>
                                    </div>
                                ))
                            }
                        </div>
                     
                            <Buttons 
                                width={"w-[200px]"}
                                text="Join Now"
                            />
                     
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section  className='w-full py-[60px] px-0 flex items-center justify-center bg-[#FFF2F6]'>
            <div className='w-[80%] mx-auto flex flex-col items-center gap-[40px]'>
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-[40px] font-playfair font-semibold text-[#3A3238]'>Client Love</p>
                    <div className='h-[1.5px] w-[50px] bg-[#FF2D6F] rounded'></div>
                </div>
                <div 
                    style={{
                        boxShadow: "0 5px 15px rgba(251, 111, 146, 0.1)"
                    }}
                    className='bg-[#fff] rounded-[15px] p-[30px]  flex items-center flex-col w-[800px] border border-[#ff8fab33]'
                >
                    <img 
                        src="https://res.cloudinary.com/code-idea/image/upload/v1743288669/close-up-hairdresser-shop-instruments_bizpqa.jpg"
                        alt=''
                        className='w-[70px] h-[70px] rounded-[50px] mb-[15px] object-cover border-[3px] border-[#FF8FAB]'
                    />
                    <p className='font-playfair font-semibold font-mont text-[18px] text-[#3A3238]'>Jessica</p>
                    <p className='client-title text-[15px] mb-[15px] italic mb-[15px] text-[#ff2d6fe3]'>Luxury On Repeat Member</p>
                    <p className='text-[#3A3238] text-[15px] text-center client-content leading-[1.7] text-center font-mont'>
                        Pretty On Repeat has completely transformed my beauty routine. No more scrambling 
                        for last-minute appointments - I'm always camera ready thanks to my membership. 
                        The Luxury plan is worth every penny!
                    </p>
                </div>
            </div>
        </section>

        {/* Contact */}
        <section id='contact' className='w-full py-[60px] px-0 flex items-center justify-center bg-[#FFF]'>
            <div className='w-[80%] mx-auto flex flex-col items-center gap-[40px]'>
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-[40px] font-playfair font-semibold text-[#3A3238]'>Contact Us</p>
                    <div className='h-[1.5px] w-[50px] bg-[#FF2D6F] rounded'></div>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='flex items-center gap-3'>
                        <FaMapMarkerAlt className='w-[25px] text-[18px] text-[#ff2d6fe3]' /> 
                        <p className='font-mont text-base text-[#3A3238]'>Lekki Phase 1, Lagos</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaPhone className='w-[25px] text-[18px] text-[#ff2d6fe3]' /> 
                        <p className='font-mont text-base text-[#3A3238]'>08028418703 (Whatsapp only)</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaEnvelope className='w-[25px] text-[18px] text-[#ff2d6fe3]' /> 
                        <p className='font-mont text-base text-[#3A3238]'>hello@prettyonrepeat.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaEnvelope className='w-[25px] text-[18px] text-[#ff2d6fe3]' /> 
                        <p className='font-mont text-base text-[#3A3238]'>Mon-Sat: 9am-8pm</p>
                    </div>
                </div>
                <div className='flex gap-[15px] items-center'>
                    <div className="group w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#FFF2F6] transition-all duration-300 hover:bg-[#ff2d6fe3] hover:translate-y-[-8px]">
                        <FaInstagram className='text-[#ff2d6fe3] w-5 h-5 group-hover:text-white transition-colors duration-300' />
                    </div>
                    <div className="group w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#FFF2F6] transition-all duration-300 hover:bg-[#ff2d6fe3] hover:translate-y-[-8px]">
                        <FaTwitter className='text-[#ff2d6fe3] w-5 h-5 group-hover:text-white transition-colors duration-300' />
                    </div>
                    <div className="group w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#FFF2F6] transition-all duration-300 hover:bg-[#ff2d6fe3] hover:translate-y-[-8px]">
                        <FaTiktok className='text-[#ff2d6fe3] w-5 h-5 group-hover:text-white transition-colors duration-300' />
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home