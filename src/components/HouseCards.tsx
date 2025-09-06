import {
  LocateIcon,
  MapPin,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import { div } from "motion/react-client";

interface CardType {
  image: string;

  // Icon: LucideIcon;
  ButtonTxt: string;
  Text: string;
  Location: string;
  price: string;
  rating: string;
}

const HouseCards = ({
  image,
  ButtonTxt,
  Text,
  Location,
  price,
  rating,
}: CardType) => {
  return (
    <div className="w-[350px] h-[370px] rounded-[8px] shadow-lg border border-gray-200">
      <div className="w-[350px] h-[175px] relative flex justify-between">
        <img src={image} alt={Text} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="rounded-[50px] flex gap-2 p-1 bg-[#31D834]">
             <ShieldCheck className=" text-white h-6 w-6 " />
          </div>
         
          <button
            className={`px-3 py-1 rounded-2xl text-sm font-medium ${
              ButtonTxt === "For Rent"
                ? "bg-[#203BBF] text-white"
                : ButtonTxt === "Venue"
                ? "bg-[#BDC8FF] text-[#203BBF]"
                : ButtonTxt === "For Sale"
                ? "bg-[#F6C3C3] text-[#8B0000]"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {ButtonTxt}
          </button>
        </div>

        
      </div>
      <div className="px-4 py-3 flex flex-col gap-1 ">
        <h2 className="font-workSans text-xl">{Text}</h2>
        <span className="flex gap-2 text-[#676767]">
          <MapPin />
          <p>{Location}</p>
        </span>
        <span className="w-full flex justify-between">
          <h3 className="text-xl font-bold text-[#132373]">&#x20A6;{price}</h3>
          <span className="flex items-center gap-0.5 text-[10px] ">
            <Star className="inline-block ml-4 fill-[#FFD700] text-transparent text-[10px]" />
            <span className="ml-1 font-workSans">{rating}</span>
          </span>
        </span>
        <button className="px-3 py-2 flex gap-2.5 text-center items-center justify-center bg-[#0F1B59] text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HouseCards;
