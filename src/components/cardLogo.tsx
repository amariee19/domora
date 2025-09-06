import type { LucideIcon } from "lucide-react";

interface logoType {
  Icon: LucideIcon;
  text: string;
  classname?: string;
}

export function CardLogo({ Icon, text , classname}: logoType) {
  return (
    <div className="px-3 py-1 rounded-2xl border border-black flex items-center gap-2">
      <Icon className={classname} />
      <span className="font-playfairDisplay text-sm text-[#0F1B59] font-medium">
        {text}
      </span>
    </div>
  );
}
