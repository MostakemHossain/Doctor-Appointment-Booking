
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'


const Home = () => {
    return (
        <>
            {/* =======Hero section======== */}

            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/* =========hero content========== */}

                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px]
                                    leading-[46px] font-[800] text-headingColor md:text-[60px] md:leading-[70px]">We help patients live a healthy,Longer life.</h1>
                                <p className="text_para">Access to health care may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies</p>

                                <button className="btn">Request an Appointment</button>
                            </div>
                            {/* ========hero counter========= */}
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">


                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px]lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                                    <span className=" w-[80px] bg-yellowColor  h-2  rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Years of Experience </p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px]lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                                    <span className=" w-[80px] bg-purpleColor  h-2  rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Clinic Location </p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px]lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                                    <span className=" w-[110px] bg-irisBlueColor  h-2  rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Patient Satisfaction </p>
                                </div>


                            </div>


                        </div>






                        {/* ========hero counter========= */}


                        <div className="flex flex-end gap-[30px]">
                            <div>
                                <img className='w-full' src={heroImg01} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                                <img className='w-full' src={heroImg03} alt="" />


                            </div>

                        </div>



                    </div>


                </div>

            </section>

            {/* =======Hero section end ======== */}


            <section>
                <div className='container'>
                    <div className='lg:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>Providing the best medical Services</h2>
                        <p className='text_para text-center'>
                            World class care for everyone.Our health system offer unmatched, expert health care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon01} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    World class care for everyone.Our health system offer unmatched, expert health care.From the lab of the Clinic.
                                </p>

                                <Link className='w-[44px] h-[44px] border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center rounded-full group hover:border-none  hover:bg-primaryColor' to='/doctors'>
                                    <BsArrowRight className='w-6 h-5 group-hover:text-white'></BsArrowRight>
                                </Link>


                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon02} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find Location </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    World class care for everyone.Our health system offer unmatched, expert health care.From the lab of the Clinic.
                                </p>

                                <Link className='w-[44px] h-[44px] border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center rounded-full group hover:border-none  hover:bg-primaryColor' to='/doctors'>
                                    <BsArrowRight className='w-6 h-5 group-hover:text-white'></BsArrowRight>
                                </Link>


                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon03} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    World class care for everyone.Our health system offer unmatched, expert health care.From the lab of the Clinic.
                                </p>

                                <Link className='w-[44px] h-[44px] border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center rounded-full group hover:border-none  hover:bg-primaryColor' to='/doctors'>
                                    <BsArrowRight className='w-6 h-5 group-hover:text-white'></BsArrowRight>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ======= about section start =======  */}

            <About></About>
            {/* ======= about section end =======  */}






        </>
    )
}

export default Home