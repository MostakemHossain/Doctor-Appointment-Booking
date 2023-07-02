
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'

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
                                <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo, odit repellendus a odio ducimus laborum minus optio quidem numquam qui reprehenderit saepe illo iure?</p>

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



        </>
    )
}

export default Home