import React, { useState } from "react";
import { Projects } from "../data/data";
import TabBody from "./ui/TabBody";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function TabsContainer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-full">
      {/* Desktop Tabs - Hide on mobile */}
      <div className="hidden md:flex gap-x-4 overflow-x-auto">
        {Projects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setActiveTab(index)}
            className={`text-sm px-2 min-w-[150px] w-fit whitespace-nowrap
        hover:bg-[#47b2ff] hover:rounded-lg hover:text-black text-left 
        transition-all duration-200 ease-in-out
        ${
          activeTab === index
            ? "bg-[#47b2ff] rounded-lg text-black"
            : "border-b-[#47b2ff] border-b text-white"
        }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Mobile Accordion - Show only on mobile */}
      <div className="md:hidden">
        {Projects.map((project, index) => (
          <div key={project.title} className="mb-4">
            <button
              onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg
                transition-all duration-200 ease-in-out
                ${
                  activeTab === index
                    ? "bg-[#47b2ff] text-black"
                    : "bg-[#47b2ff]/10 text-white"
                }`}
            >
              <span>{project.title}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200
                  ${activeTab === index ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`transition-all duration-200 ease-in-out overflow-hidden
                ${
                  activeTab === index
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
            >
              <TabBody project={project} />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Content - Hide on mobile */}
      <div className="hidden md:block">
        <TabBody activeTab={activeTab} projects={Projects} />
      </div>
    </div>
  );
}
