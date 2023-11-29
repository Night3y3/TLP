import { AiFillStar } from "react-icons/ai"
import Image from "next/image"

interface ReviewCardProps {
  // props types 
  name: string;
  date: string;
  photo: any;
  body: string;
}

const ReviewCard = (reviews: ReviewCardProps) => {

  return (
    <div className="antialiased bg-gray-100 pt-8 pb-12 ">
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div

          className="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <div className="flex space-x-0.5">
            {/* rating stars */}
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
          </div>

          <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
            {reviews.date}
          </p>

          <div className="space-y-1">

            <p className="text-sm font-medium leading-5 text-gray-600">
              {reviews.body}
            </p>
          </div>

          <div className="mt-6 flex items-center space-x-2">
            <div className="flex flex-shrink-0 rounded-full border border-gray-200">
              <Image
                src={reviews.photo}
                width={32}
                height={32}
                className="w-8 h-8 object-cover rounded-full"
                alt=""
              />
            </div>
            <span className="text-sm font-semibold leading-5 text-gray-900">
              {reviews.name}
            </span>

          </div>
        </div>


      </div>
    </div>
  )

}

export default ReviewCard;