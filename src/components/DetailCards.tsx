import type { LucideIcon } from "lucide-react"

interface IconCardsProps {
    Icon: LucideIcon;
    details: string;
    heading: string;
}

const DetailCards = ({Icon, details, heading}: IconCardsProps) => {
  return (
    <div className="flex flex-col  gap-4 p-6 items-center justify-center">
      <div className="w-[82px] bg-[#EDF1F8] rounded-[8px] p-4 gap-2.5 ">
        <div className=" w-[50px] h-[50px] p-[3px]">
            <Icon className="w-[44px] h-[44px] text-sm stroke-[0.5]"/>
        </div>
        
      </div>
      <div className="flex flex-col gap-1.5 justify-center">
        <p className="font-bold text-2xl text-[#0F1B59] text-center font-workSans">{heading}</p>
        <p className="text-[#515151] text-center">{details}</p>
      </div>
      
    </div>
  )
}

export default DetailCards
