import { Calendar, HomeIcon, MoveUpRight, Search, ShieldCheck, Star, Users } from "lucide-react";
import AISearchBar from "../components/AISearchBar";
import { CardLogo } from "../components/cardLogo";
import StatCards from "../components/StatCards";
import HouseCards from "../components/HouseCards";
import DetailCards from "../components/DetailCards";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-[50px] py-8 max-w-[1080px]  mx-auto">
      <div className="relative w-full px-4 md:px-0 h-[310px]">
        {/* Background image */}
        <img
          src="src/assets/hero-img.jpg"
          alt="hero_img"
          className="w-full h-full object-cover rounded-[12px]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/60 rounded-[12px]"></div>

        {/* Text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 sm:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-5">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-playfairDisplay font-medium leading-tight">
              Find Your Perfect
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8 font-playfairDisplay font-medium leading-tight">
              Home & Venue
            </h2>
          </div>
          <div className="max-w-xs sm:max-w-lg lg:max-w-2xl flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm lg:text-base font-workSans text-center leading-relaxed">
              Rent homes, buy houses, or book event venues. Connect directly
              with verified property owners. No hidden fees, no middlemen - just
              transparent, secure transactions.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0 w-full">
        <AISearchBar />
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <CardLogo
          Icon={ShieldCheck}
          text="Verified Owners"
          classname="text-[#31D834]"
        />
        <CardLogo
          Icon={Star}
          text="Rated by Users"
          classname="text-[#FFD700]"
        />
      </div>
      <div className="max-w-[1080px] flex flex-wrap justify-around gap-[50px] md:gap-[100px]">
        
        <StatCards
        Icon={HomeIcon}
         name="Properties Limited"
         top="5000 +" 
         />
         <StatCards
        Icon={Calendar}
         name="Events Hosted"
         top="1200 +" 
         />
         <StatCards
        Icon={Users}
         name="Happy Customers"
         top="15,000 +" 
         />
         <StatCards
        Icon={MoveUpRight}
         name="Cities Covered"
         top="12" 
         />
      </div>
      
      <div className="max-w-[1080px] flex flex-col gap-2">
        <h2 className="text-[36px] font-playfairDisplay text-center">Featured Properties & Venues</h2>
        <p className="font-[16px] text-[#515151] font-workSans text-center">Discover hand-picked, verified listings from trusted owners across Nigeria</p>
      </div>
      <div className="max-w-[1080px] p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center mx-auto">
        <HouseCards 
        image = "src\assets\house-img2.jpg"
        ButtonTxt = "For Rent"
        Text="Modern 2BR Apartment in Katampe"
        Location = "Katampe, Abuja"
        price="350,000"
        rating = "4.8 (25)"
        />
        <HouseCards 
        image = "src\assets\house-img2.jpg"
        ButtonTxt = "For Rent"
        Text="Modern 2BR Apartment in Katampe"
        Location = "Katampe, Abuja"
        price="350,000"
        rating = "4.8 (25)"
        />
        <HouseCards 
        image = "src\assets\house-img2.jpg"
        ButtonTxt = "For Rent"
        Text="Modern 2BR Apartment in Katampe"
        Location = "Katampe, Abuja"
        price="350,000"
        rating = "4.8 (25)"
        />
        <HouseCards 
        image = "src\assets\house-img2.jpg"
        ButtonTxt = "For Rent"
        Text="Modern 2BR Apartment in Katampe"
        Location = "Katampe, Abuja"
        price="350,000"
        rating = "4.8 (25)"
        />
      </div>
      {/* How Domora Works */}
      <div className="max-w-[1080px] flex flex-col gap-4 p-6">
        <div className="max-w-[1080px] flex flex-col gap-3 ">
          <h2 className="text-[36px] font-playfairDisplay text-center">How Domora Works</h2>
          <p className="font-workSans text-center text-[#676767]">Simple, secure, and transparent - connecting you directly with property owners</p>
        </div>
        <div className="max-w-[1080x] grid md:grid-cols-3 gap-4">
        <DetailCards
        Icon={Users}
         heading="1. Search & Filter"
         details="Find rental properties, houses for sale, and event venues by location, price, size, and amenities, or ask our AI agent." 
         />

        <DetailCards
        Icon={Calendar}
         heading="2. Book & Pay Securely"
         details="Select your dates, review details, sign contract, and pay securely online. Connect directly with verified landlords." 
         />

         <DetailCards
        Icon={HomeIcon}
         heading="3. Enjoy Your Space"
         details="Move into your new rental, complete your house purchase, or host your event. Rate your experience to help the community." 
         />
      </div>
      </div>
      {/* Get Started Banner */}
      <div className="max-w-[1080px] h-[231px] bg-linear-to-bl from-[#2563EB] to-[#0F1B59] py-3 px-4 flex flex-col gap-6 justify-center items-center rounded-[8px]">
        <div className="flex flex-col gap-3 w-[602px] text-white">
          <h2 className="text-4xl font-playfairDisplay text-center">Ready to Get Started?</h2>
          <p className="font-workSans">Join thousands of satisfied users who found their perfect space on Domora</p>
        </div>
        <div className="w-[602px] flex gap-[9px] justify-center items-center">
          <button className="text-center rounded-[8px] py-2 px-3 bg-white w-full font-spaceGrotesk">Find a Property</button>
          <button className="text-center rounded-[8px] py-2 px-3 bg-white w-full font-spaceGrotesk">List Your Property</button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
