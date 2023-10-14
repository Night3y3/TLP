"use client";
import React, { Component } from 'react'
import ReviewCard from '../ReviewCard/ReviewCard';
import utsav from "../../Assets/utsav.jpg"
import saranya from "../../Assets/saranya.jpg"
import sukrit from "../../Assets/sukrit.jpg"

interface Review {
    name: string;
    date: string;
    photo: any;
    body: string;
}

const Data: Review[] = [
    {
        name: "Saranya Chathopaadhyaya",
        date: "Feburay 2023",
        photo: saranya,
        body: "Loved their services, they were very helpful and the trip was very well planned. I would definitely recommend them to my friends and family."
    },
    {
        name: "Utsav Das",
        date: "May 2023",
        photo: utsav,
        body: "They are so good at what they do. I had a great time with them. They are very professional and friendly. Planning to go on another trip with them soon."
    },
    {
        name: "Sukrit Das",
        date: "June 2023",
        photo: sukrit,
        body: "Cannot imagine a better trip. They are so good at what they do. I had a great time with them. They are very professional and friendly."
    }

]

console.log(Data[0].photo);

export default class CardSection extends Component {
    render() {
        return (
            <div className='flex flex-col items-center bg-gray-100 mb-10'>
                <h1 className=' text-3xl font-bold font-serif'>Loved by Travelers</h1>
                <div className='flex overflow-hidden'>
                    <ReviewCard name={Data[0].name} date={Data[0].date} photo={Data[0].photo} body={Data[0].body} />
                    <ReviewCard name={Data[1].name} date={Data[1].date} photo={Data[1].photo} body={Data[1].body} />
                    <ReviewCard name={Data[2].name} date={Data[2].date} photo={Data[2].photo} body={Data[2].body} />

                </div>
            </div>
        )
    }
}
