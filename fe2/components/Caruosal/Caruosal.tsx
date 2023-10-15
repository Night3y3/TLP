import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@mui/material/Typography';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: ' Oakland Bay',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function Caruosal() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-1 ">
            <Typography variant="h5" color="blue-gray" className=' text-center text-3xl font-bold font-serif'>
                Recommended trips
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
                See the beauty of the world easily and safely with us.
            </Typography>
            <div className="max-w-screen-md w-full h-full">
                <figure className="relative h-96">
                    <AutoPlaySwipeableViews
                        axis={'x'} // Use your axis value
                        index={activeStep} // Set your active step
                        onChangeIndex={handleStepChange} // Define your handleStepChange function
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <img
                                        className="h-96 w-full object-cover rounded-xl"
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <figcaption className="absolute bottom-[44%] left-1/2 flex items-center w-1/2 -translate-x-2/4 justify-center">
                        <span className="font-hologa leading-5 text-white text-[5vw] align-bottom">
                            {images[activeStep].label}
                        </span>
                    </figcaption>
                </figure>
            </div>



        </div>
    );
}

export default Caruosal;

