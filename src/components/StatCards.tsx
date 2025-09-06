import type { LucideIcon } from "lucide-react"

interface IconCardsProps {
    Icon: LucideIcon;
    name: string;
    top: string;
}

const StatCards = ({Icon, name, top}: IconCardsProps) => {
  return (
    <div className="flex flex-col gap-3 w-[139px] h-[182px] items-center justify-center">
      <div className="w-[112px] bg-[#EDF1F8] rounded-[8px] p-4 gap-2.5 ">
        <Icon className="w-20 h-20 text-sm stroke-[0.5]"/>
      </div>
      <div className="flex flex-col h-[58px] gap-1.5 justify-center">
        <p className="font-bold text-2xl text-[#0F1B59] text-center font-workSans">{top}</p>
        <p className="text-[#515151] text-center">{name}</p>
      </div>
      
    </div>
  )
}

export default StatCards
