import React, { Component } from 'react';
import { Typography } from "@material-tailwind/react";
import { MdTravelExplore, MdModeOfTravel, MdOutlineConnectWithoutContact } from 'react-icons/md';
import { LiaIdCardSolid } from 'react-icons/lia';


class MiddleHome extends Component {
    render() {
        return (
            <div className=' w-full h-full bg-gray-100 my-24'>
                <div className='flex items-center justify-center gap-52'>

                    <figure className="relative h-96">
                        <img
                            className="h-full w-full rounded-xl object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                        <figcaption className="absolute bottom-0 left-1/2 flex items-center w-1/2 -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <span className="text-sm font-semibold leading-5 text-gray-900">
                                Forest
                            </span>
                        </figcaption>
                    </figure>
                    <div className='flex flex-col space-y-4'>
                        <Typography variant="h5" color="blue-gray" className=' text-center text-3xl font-bold font-serif'>
                            Trips for modern travellers
                        </Typography>
                        <div className=' -space-y-1'>
                            <Typography color="gray" className="mt-2 font-normal">
                                Our unique itinerary builder gives you the power to
                            </Typography>
                            <Typography color="gray" className="mt-2 font-normal">
                                design your dream trip. Backed by a passionate team
                            </Typography>
                            <Typography color="gray" className="mt-2 font-normal">
                                of travel experts and selected for you.
                            </Typography>
                        </div>
                        <div className='flex flex-row items-center justify-between gap-5'>
                            <div className=' flex flex-col gap-4'>
                                <div className='flex items-center gap-2'>
                                    <span className="inline-block border-2 rounded-full p-1 bg-white">
                                        <MdOutlineConnectWithoutContact />
                                    </span>
                                    <Typography color="gray" className=" font-normal">
                                        Connect with an expert
                                    </Typography>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className="inline-block border-2 rounded-full p-1 bg-white">
                                        <MdTravelExplore />
                                    </span>
                                    <Typography color="gray" className=" font-normal">
                                        Browse of Trips
                                    </Typography>
                                </div>
                            </div>
                            <div className=' flex flex-col gap-4'>
                                <div className='flex items-center gap-2'>
                                    <span className="inline-block border-2 rounded-full p-1 bg-white">
                                        <MdModeOfTravel />
                                    </span>
                                    <Typography color="gray" className=" font-normal">
                                        Design your itinerary
                                    </Typography>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className="inline-block border-2 rounded-full p-1 bg-white">
                                        <LiaIdCardSolid />
                                    </span>
                                    <Typography color="gray" className=" font-normal">
                                        Travel Better
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MiddleHome;