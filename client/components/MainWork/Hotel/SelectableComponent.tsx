import { useState } from 'react';
import Image from 'next/image';
import { MdFreeBreakfast, MdWifi } from 'react-icons/md';

interface SelectableComponentProps {
    label: string;
    selected: boolean;
    onClick: () => void;
    hotelImage: string;
    hotelPrice: number;
    hotelNights: number;
    hotelDescription: string;
    hotelRating: number;
}

const SelectableComponent: React.FC<SelectableComponentProps> = ({
    label,
    selected,
    onClick,
    hotelImage,
    hotelPrice,
    hotelNights,
    hotelDescription,
    hotelRating,
}) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer p-4 relative ${selected
                ? 'border-2 border-blue-200 transition-all duration-300'
                : 'border border-gray-200'
                }`}
        >
            <div
                className={`w-full h-full ${selected ? 'bg-blue-800' : 'bg-white'
                    } transition-all duration-300 absolute top-0 left-0 opacity-0`}
            ></div>
            <div className={`w-full max-w-2xl bg-white sm:flex ${selected ? 'shadow-2xl transition-all duration-300' : ''}`}>
                <div className="w-full sm:w-1/4 hotel-cover bg-center bg-cover border relative h-48 sm:h-auto shadow-inner">
                    <Image
                        src={hotelImage}
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
                                <h2 className="text-lg font-semibold text-gray-600">{label}</h2>
                                <div className="flex sm:ml-3"></div>
                            </div>

                        </div>
                        <div>
                            <div className="text-right text-xl leading-tight text-gray-600 font-semibold">
                                ${hotelPrice}<br /> {hotelNights} nights
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <div></div>
                        <p className="text-xs ml-1 text-gray-600">
                            {hotelDescription}
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
                                <strong>{hotelRating}/5 Average.</strong>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SelectableComponent;
