import React, { ReactNode } from "react";

interface CardDataEventsProps {
  title: string;
  desc: string;
  local: string;
  children: ReactNode;
}

const CardDataEvents: React.FC<CardDataEventsProps> = ({
  title,
  desc,
  local,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      {children}

      <div className="relative mt-4 flex flex-col items-start justify-between">
        <h4 className="text-title-md font-bold text-black dark:text-white">
          {title}
        </h4>
        <span className="mt-3 text-lg font-medium">{desc}</span>

        <div className="mt-4 flex flex-row text-sm font-medium "></div>
        <span className="mt-2 text-sm font-medium">{local}</span>
      </div>
    </div>
  );
};

export default CardDataEvents;
