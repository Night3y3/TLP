import React from "react";
import Image from "next/image";
import plan from "../../Assets/places.png"
import Link from "next/link";

const GetStarted: React.FC = () => {
  return (
    <div className="flex justify-evenly bg-neutral-700 p-4 w-screen h-screen items-center">
      <div className="flex flex-col justify-center pl-12 bg-inherit">
        {/* <img
        src="/image.png"
        alt="Let's explore the beauty of the world"
        className="w-full max-w-lg h-auto object-cover"
      /> */}
        <h1 className="text-[5vw] font-bold  bg-inherit font-hologa">
          Let's explore the
        </h1>
        <h1 className="text-[5vw] font-bold  bg-inherit font-hologa">
          beauty of the world
        </h1>

        <Link href="/booking" className=" mx-auto align-middle bg-red-500 hover:bg-red-700 hover:ease-in transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full mt-4">
          Get started
        </Link>
      </div>
      <div className=" bg-inherit">
        <Image src={plan} className=" bg-inherit" />
      </div>
    </div>
  );
};

export default GetStarted;