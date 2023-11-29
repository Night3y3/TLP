import React, { Component } from 'react';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { HiMiniTicket } from 'react-icons/hi2';
import { AiOutlineDollarCircle } from 'react-icons/ai';

class HelpJourney extends Component {
    render() {
        return (
            <div className='flex flex-col items-center bg-gray-100 my-12 space-y-8'>
                <h1 className=' text-3xl font-bold font-serif'>How we can help your journey</h1>
                <h3 className=' text-xs'>Our service which are very comfortable and can make you happy.</h3>
                <div className='flex items-center'>
                    <div className='flex flex-col flex-auto items-center space-y-2 px-9'>
                        <span className="inline-block border-2 border-green-500 rounded-full p-2 bg-white">
                            <FaPlaceOfWorship />
                        </span>
                        <h2 className='font-bold font-serif text-xl'>Find destination</h2>
                        <h3 className='flex flex-col items-center text-xs'>
                            <h1>Find your travel destination,</h1>
                            <h1>we have covered all regions in</h1>
                            <h1>the world.</h1>
                        </h3>
                    </div>
                    <div className='flex flex-col flex-auto items-center space-y-2 px-9'>
                        <span className="inline-block border-2 border-green-500 rounded-full p-2 bg-white">
                            <HiMiniTicket />
                        </span>
                        <h2 className='font-bold font-serif text-xl'>Book a ticket</h2>
                        <h3 className='flex flex-col items-center text-xs'>
                            <h1>After finding the trip you want</h1>
                            <h1>to go to, you can immediately</h1>
                            <h1>order the ticket.</h1>
                        </h3>
                    </div>
                    <div className='flex flex-col flex-auto items-center space-y-2 px-9'>
                        <span className="inline-block border-2 border-green-500 rounded-full p-2 bg-white">
                            <AiOutlineDollarCircle />
                        </span>
                        <h2 className='font-bold font-serif text-xl'>Pay and explore</h2>
                        <h3 className='flex flex-col items-center text-xs'>
                            <h1>After you pay you can</h1>
                            <h1>immediately enjoy the trip to</h1>
                            <h1>destination</h1>
                        </h3>
                    </div>

                </div>
            </div>
        );
    }
}

export default HelpJourney;