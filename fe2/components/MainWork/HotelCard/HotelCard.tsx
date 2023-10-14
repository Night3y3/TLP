import React, { useState } from 'react';
import kolkata from '../../../Assets/kolkata.jpg'
import Image from 'next/image';
import { MdFreeBreakfast, MdWifi } from 'react-icons/md';

const HotelCard: React.FC = () => {
    const [active, setActive] = useState(false);
    return (

        <div className={`w-full shadow-lg max-w-2xl bg-white sm:flex ${active ? 'border-blue-500 border-solid border-2' : ''} transition ease-linear duration-300`}>
            <div className="w-full sm:w-1/4 hotel-cover bg-center bg-cover border relative h-48 sm:h-auto shadow-inner">
                <Image
                    src={kolkata}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="w-full absolute bottom-0 flex justify-center bg-gradient-black-transparent">
                    <ul className="text-xs sm:font-semibold my-2 flex sm:block justify-around w-full sm:w-auto text-white">

                        <li className="my-1 flex items-center">
                            <MdFreeBreakfast className="mr-1" />

                            Breakfast included
                        </li>
                        <li className="my-1 flex items-center">
                            <MdWifi className="mr-1" />
                            Wifi included
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full sm:w-3/4 p-3">
                <div className="flex justify-between items-center border-b pb-3">
                    <div>
                        <div className="sm:flex items-center mb-1">
                            <h2 className="text-lg font-semibold text-gray-600">Kensington Suite Hotel</h2>
                            <div className="flex sm:ml-3"></div>
                        </div>

                    </div>
                    <div>
                        <div className="text-right text-xl leading-tight text-gray-600 font-semibold">
                            $ 869 <br /> 2 nights
                        </div>
                    </div>
                </div>
                <div className="flex mt-3">
                    <div></div>
                    <p className="text-xs ml-1 text-gray-600">
                        Very
                    </p>
                </div>
                <div className="flex mt-3 items-center">
                    <div></div>
                    <p className="text-xs ml-1 text-gray-600 font-semibold">
                        Deluxe room, 1 King Bed
                    </p>
                </div>
                <div className="sm:flex mt-3 items-center justify-between">
                    <div>
                        <p className="text-xs text-green-700">
                            <strong>2.5/5 Average.</strong> See 431 reviews
                        </p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default HotelCard;

{/* <div className="mt-3 sm:mt-3 sm:-mr-8">
    <a href="#" className="bg-blue-500 shadow text-blue-100 py-3 px-6 font-bold inline-block" onClick={() => setActive(!active)}>Select</a>
</div> */}
