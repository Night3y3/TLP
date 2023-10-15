import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import kolkata from '../../Assets/kolkata.jpg'
import Darjeeling from '../../Assets/darjeeling.jpg'
import Delhi from '../../Assets/delhi.jpg'
import Goa from '../../Assets/Goa.jpg'
import TamilNadu from '../../Assets/tamilnadu.jpg'
import { Shery } from 'sheryjs'
import { Helmet } from "react-helmet"
import Link from 'next/link'
import { useUser, UserButton } from '@clerk/nextjs'

const NavBar = () => {
    // useEffect(() => {
    //     const shery = new Shery();
    //     shery.imageEffect(".image", { style: 5 })
    // }, []);

    const [backgroundImage, setBackgroundImage] = useState(kolkata);

    const handleHover = (image: any) => {
        setBackgroundImage(image);
    };

    const { isSignedIn, user } = useUser();

    return (
        <div className=' w-full h-[100vh] mb-10'>
            <Helmet>
                {/* <!--  Gsap is needed for Basic Effects --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

                {/* <!-- Scroll Trigger is needed for Scroll Effects --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

                {/* <!-- Three.js is needed for 3d Effects --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"></script>

                {/* <!-- ControlKit is needed for Debug Panel --> */}
                <script src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"></script>
            </Helmet>

            <div className='w-full h-[100vh] overflow-hidden image'>
                <Image
                    className=' object-cover w-full h-full'
                    src={backgroundImage}
                    alt="Image 1"
                />
                <Image
                    className=' object-cover w-full h-full'
                    src={Delhi}
                    alt="Image 1"
                />
                <Image
                    className=' object-cover w-full h-full'
                    src={Goa}
                    alt="Image 1"
                />
                <Image
                    className=' object-cover w-full h-full'
                    src={Darjeeling}
                    alt="Image 1"
                />
                <Image
                    className=' object-cover w-full h-full'
                    src={TamilNadu}
                    alt="Image 1"
                />
            </div>
            <div className=' absolute top-0 left-0 w-full h-[100vh] bg-slate-700 bg-opacity-50 '>
                <div className=' w-4/5 max-w-[1980px] h-[100vh]  m-auto relative'>
                    <div className=' w-full py-5 flex justify-between items-center pointer-events-auto'>
                        <div className=' flex gap-10 items-center'>
                            <div className=' font-extrabold font-serif text-3xl text-yellow-300'>T-Planner</div>
                            <a href="#" className=' text-white uppercase no-underline font-semibold text-sm'>Home</a>
                        </div>
                        <div className=' flex gap-10 items-center'>
                            <a href="#" className=' text-white uppercase no-underline font-semibold text-sm'>Reviews</a>
                            {!isSignedIn ? (<button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                <Link href="/Loading">
                                    Sign In
                                </Link>
                            </button>) : (<div className='flex gap-5'>
                                <div className='font-hologa text-[2vw] text-white leading-[1]'>Hello, {user.firstName}  </div>

                                <UserButton />
                            </div>)}
                        </div>

                    </div>
                    <div className='w-full h-24  flex justify-between absolute top-1/2 left-0 transform translate-x-0 -translate-y-1/2 cursor-default'>
                        <div className='flex justify-between items-center gap-60'>
                            <div className='  h-[9vw] overflow-hidden'>
                                <h1 className=' font-hologa text-[11vw] text-white leading-[1] hover:underline transition duration-300'
                                    onMouseEnter={() => handleHover(kolkata)}
                                >Kolkata...</h1>
                            </div>
                            <div className='  h-[9vw] overflow-hidden '>
                                <h1 className=' font-hologa text-[11vw] text-white leading-[1] hover:underline transition duration-300'
                                    onMouseEnter={() => handleHover(Goa)}
                                >Goa...</h1>
                            </div>
                            <div className=' h-[9vw] overflow-hidden'>
                                <h1 className=' font-hologa text-[11vw] text-white leading-[1] hover:underline transition duration-300'
                                    onMouseEnter={() => handleHover(Delhi)}
                                >Delhi..</h1>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default NavBar