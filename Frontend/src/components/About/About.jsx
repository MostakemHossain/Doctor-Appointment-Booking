
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">



                    {/* ========= about img ========  */}
                    <div className="relative w-3/4 lg:w-1/2 xl-w-[770px] z-10 order-2 lg:order-1">

                        <img src={aboutImg} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    {/* ========== About content======= */}
                    <div className="w-full lg:w-1/2 xl:w-[670px']order 1 lg:order-2">
                        <h2 className='heading'>
                            Proud to be one of the nations best
                        </h2>
                        <p className='text__para mt-10'>
                            The doctor of the future will give no medicine but will interest his patients in the care of the human frame, in diet, and in the cause and prevention of disease.
                            ” We thanks all doctors who work toward improving the lives of their patients and communities
                        </p>
                        <p className='text__para mt-[30px]'>
                            On my call with Anne from Top Doctors, the conversation took a surreal turn.

                            “It says you work for a company called ProPublica,” she said, blithely. At least she had that right.
                        </p>
                        <Link to='/'>
                            <button className="btn">Learn more</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About