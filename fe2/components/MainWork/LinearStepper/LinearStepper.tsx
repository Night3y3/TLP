import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { FaHotel } from "react-icons/fa";
import { MdOutlineTravelExplore, MdOutlinePayment } from "react-icons/md";
import PersonInformation from "../PersonInformation/PersonInformation";
import MyRadioGroup from "../PlaneBooking/PlaneBooking"
import HotelCard from "../HotelCard/HotelCard";

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <PersonInformation />;
        case 1:
            return <MyRadioGroup />;
        case 2:
            return <HotelCard />;
        default:
            return "Unknown step";
    }
}

export function LinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className="h-screen flex justify-center bg-gray-100">
            <div className="w-3/4 py-4 px-8 m-10">
                <div className=" p-7 border-red-500 border-2 rounded-full">
                    <Stepper
                        activeStep={activeStep}
                        isLastStep={(value) => setIsLastStep(value)}
                        isFirstStep={(value) => setIsFirstStep(value)}
                    >
                        <Step
                            onClick={() => setActiveStep(0)}
                            className="bg-green-500 rounded-full flex items-center justify-center p-2 relative"
                        >
                            <UserIcon className="w-5 h-5 text-white" />
                        </Step>
                        <Step
                            onClick={() => setActiveStep(1)}
                            className="bg-green-500 rounded-full flex items-center justify-center p-2 relative"
                        >
                            <MdOutlineTravelExplore className="w-5 h-5 text-white" />
                        </Step>
                        <Step
                            onClick={() => setActiveStep(2)}
                            className="bg-green-500 rounded-full flex items-center justify-center p-2 relative"
                        >
                            <FaHotel className="w-5 h-5 text-white" />
                        </Step>
                        <Step
                            onClick={() => setActiveStep(3)}
                            className="bg-green-500 rounded-full flex items-center justify-center p-2 relative"
                        >
                            <MdOutlinePayment className="w-5 h-5 text-white" />
                        </Step>

                    </Stepper>
                </div>
                <div className=" mt-10">
                    {getStepContent(activeStep)}
                </div>
                <div className="mt-16 flex justify-between">
                    <Button
                        onClick={handlePrev}
                        disabled={isFirstStep}
                        className={`bg-blue-500 text-white py-2 px-4 rounded-md ${isFirstStep ? "cursor-not-allowed bg-gray-300" : "hover:bg-blue-600"
                            } transition-all`}
                    >
                        Prev
                    </Button>
                    <Button
                        onClick={handleNext}
                        disabled={isLastStep}
                        className={`bg-green-500 text-white py-2 px-4 rounded-md ${isLastStep ? "cursor-not-allowed bg-gray-300" : "hover:bg-green-600"
                            } transition-all`}
                    >
                        {activeStep === 4 ? "Finish" : "Next"}
                    </Button>
                </div>
            </div>
        </div>

    );
}



{/* <Stepper
    activeStep={activeStep}
    isLastStep={(value) => setIsLastStep(value)}
    isFirstStep={(value) => setIsFirstStep(value)}
>
    <Step onClick={() => setActiveStep(0)} className="relative">
        <HomeIcon className="w-5 text-white" />
        <div className="absolute top-1/2 left-full -translate-x-1/2 w-6 h-0.5 bg-black"></div>
    </Step>
    <Step onClick={() => setActiveStep(1)} className="relative">
        <UserIcon className="h-5 w-5 text-white" />
        <div className="absolute top-1/2 left-full -translate-x-1/2 w-6 h-0.5 bg-black"></div>
    </Step>
    <Step onClick={() => setActiveStep(2)} className="relative">
        <CogIcon className="h-5 w-5 text-white" />
    </Step>
</Stepper> */}
