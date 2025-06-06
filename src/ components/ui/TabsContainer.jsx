import React, { useState } from "react";
import { Projects } from "../../data/data";
import TabBody from "./TabBody";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function TabsContainer() {
  const [activeDesktopTab, setActiveDesktopTab] = useState(0);
  const [activeMobileTab, setActiveMobileTab] = useState(-1);

  return (
    <div className="relative w-full">
      {/* Desktop Tabs - Hide on mobile */}
      <div className="hidden md:flex gap-x-4 mb-4">
        {Projects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setActiveDesktopTab(index)}
            className={`text-sm px-2 py-2 min-w-[150px] w-fit whitespace-nowrap
        shadow-md rounded-md hover:scale-110 shadow-[#47b2ff] duration-500
        ${
          activeDesktopTab === index
            ? "bg-[#47b2ff] shadow-none rounded-lg text-black"
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
              onClick={() =>
                setActiveMobileTab(activeMobileTab === index ? -1 : index)
              }
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg
                transition-all duration-200 ease-in-out
                ${
                  activeMobileTab === index
                    ? "bg-[#47b2ff] text-black"
                    : "bg-[#47b2ff]/10 text-white"
                }`}
            >
              <span>{project.title}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200
                  ${activeMobileTab === index ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`transition-all duration-200 ease-in-out overflow-hidden
                ${
                  activeMobileTab === index
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
        <TabBody activeTab={activeDesktopTab} projects={Projects} />
      </div>
    </div>
  );
}
