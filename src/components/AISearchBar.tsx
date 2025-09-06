import { Funnel, Search, WandSparkles } from "lucide-react";
const AISearchBar = () => {
  return (
    <div className="w-full flex m-auto items-center gap-3 ">
      <div className="relative top-6 w-full max-w-4xl lg:max-w-4xl flex items-center justify-between gap-4 bg-white rounded-lg px-4 py-3 shadow-lg mr-6">
        {/* Left: AI Assistant input */}
        <div className="flex items-center gap-2 py-2">
          <WandSparkles className="text-[#0F1B59]" />
          <input
            type="text"
            placeholder="AI Assistant"
            className="text-[#0F1B59] w-full focus:outline-none bg-transparent"
          />
        </div>

        {/* Middle: Ask button */}
        <button className="flex items-center gap-2 bg-[#0F1B59] text-white rounded-lg px-4 py-2">
          <p className="text-sm">Ask</p>
          <Search className="w-4 h-4" />
        </button>

        {/* Right: Filter search */}
      </div>
      <div className="flex items-center relative gap-2 top-6">
        <Funnel className="text-[#0F1B59] mr-2" />
        <p className="font-playfairDisplay text-md text-[#0F1B59] font-medium">
          Filter search
        </p>
      </div>
    </div>
  );
};

export default AISearchBar;
