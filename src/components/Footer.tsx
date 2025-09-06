import { ShieldCheck, Star } from "lucide-react"
import { CardLogo } from "./cardLogo"
import { div } from "motion/react-client"

const Footer = () => {
  return (
    <div className="max-w-7xl px-[100px] py-6 border-t-[0.5px] border-t-[#1E1E1E]">
        <div className="flex w-[1080px] gap-4 pb-4 justify-center">
      <div className="flex flex-col w-[532px] gap-3">
        <span className="flex">
            <img src="src\assets\domora_logo.png" alt="" className="w-[50px] h-[50px] rounded-[12px]"/>
            <p className="font-playfairDisplay text-[32px]">Domora</p>
        </span>
        <p className="font-workSans text-[#676767]">Nigeria’s trusted platform for finding rental homes, buying houses, and booking event venues. Connect directly with verified owners.</p>
        <div className="flex gap-2.5">
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

      </div>
      {/* Quick Links */}
      <div className="flex w-[532px] gap-[30px]">
        <span className="flex flex-col gap-3">
            <h3>Quick Links</h3>
            <ul className="font-spaceGrotesk text-[#676767] flex flex-col gap-3">
                <li><a href="#">Find Rentals</a></li>
                <li><a href="#">Buy Houses</a></li>
                <li><a href="#">Find Venues</a></li>
                <li><a href="#">List Your Property</a></li>
                <li><a href="#">How It Works</a></li>
            </ul>
        </span>
        <span className="flex flex-col gap-3">
            <h3>Support</h3>
            <ul className="font-spaceGrotesk text-[#676767] flex flex-col gap-3">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Safety & Trust</a></li>
                <li><a href="#">Dispute Resolution</a></li>
            </ul>
        </span>
        <span className="flex flex-col gap-3">
            <h3>Legal</h3>
            <ul className="font-spaceGrotesk text-[#676767] flex flex-col gap-3">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Cancellation Policy</a></li>
            </ul>
        </span>
      </div>
    </div>
    <hr />
    <div className="w-[1080px] pt-[16px] flex justify-center items-center gap">
        <span className="w-[399px]">
            <p className="font-spaceGrotesk text-[#676767]  "> &copy; 2025 Domora. All rights reserved. Made in Nigeria</p>
        </span>
        
    </div>
    </div>
    
  )
}

export default Footer
