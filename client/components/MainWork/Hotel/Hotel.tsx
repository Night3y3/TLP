
import React, { useState, useEffect } from 'react';
import SelectableComponent from './SelectableComponent';
import hotel1 from '../../../Assets/hotel1.jpg'
import hotel2 from '../../../Assets/hotel2.jpg'
import hotel3 from '../../../Assets/hotel3.jpg'
import hotel4 from '../../../Assets/hotel4.jpg'
import hotel5 from '../../../Assets/hotel5.jpg'
import hotel6 from '../../../Assets/hotel6.jpg'
import Typography from '@mui/material/Typography';

const options = [
    {
        name: 'Kingston Hotel',
        image: hotel1,
        price: 644,
        nights: 2,
        description: 'A luxurious hotel with a beautiful view.',
        rating: 4.5,
    },
    {
        name: 'Folance Hotel',
        image: hotel2,
        price: 869,
        nights: 2,
        description: 'A cozy hotel in the heart of the city.',
        rating: 4.0,
    },
    {
        name: 'Downtown Hotel',
        image: hotel3,
        price: 813,
        nights: 2,
        description: 'An affordable option with great amenities.',
        rating: 3.8,
    },
    {
        name: 'Grand Hotel',
        image: hotel4,
        price: 324,
        nights: 1,
        description: 'A beachfront resort for the perfect vacation.',
        rating: 4.8,
    },
    {
        name: 'Eiffel Hotel',
        image: hotel5,
        price: 727,
        nights: 2,
        description: 'A modern hotel with excellent dining options.',
        rating: 4.2,
    },
    {
        name: 'Urqhart Hotel',
        image: hotel6,
        price: 900,
        nights: 2,
        description: 'A budget-friendly hotel with friendly staff.',
        rating: 3.5,
    },
];

const SelectionContainer: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<number | null>(null);
    const [hotelName, setHotelName] = useState<string>('');
    const [hotelPrice, setHotelPrice] = useState<number>(0);
    const [hotelNights, setHotelNights] = useState<number>(0);

    useEffect(() => {
        if (selectedComponent !== null) {
            setHotelName(options[selectedComponent].name);
            setHotelPrice(options[selectedComponent].price);
            setHotelNights(options[selectedComponent].nights);
        }
    }, [selectedComponent, options]);

    console.log(hotelName, hotelPrice, hotelNights);

    return (
        <div><Typography color="blue-gray" className=' text-center text-9xl font-bold font-hologa'>
            Hotel Selection🏨 :
        </Typography>
            <div className="grid grid-cols-2 gap-4">
                {options.map((option, index) => (
                    <SelectableComponent
                        key={index}
                        label={option.name}
                        onClick={() => setSelectedComponent(index)}
                        selected={selectedComponent === index}
                        hotelImage={option.image.src}
                        hotelPrice={option.price}
                        hotelNights={option.nights}
                        hotelDescription={option.description}
                        hotelRating={option.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default SelectionContainer;
