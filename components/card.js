import React from "react";

const Card = (props) => {
  return (
    <a
      title="View Details"
      href="#"
      className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-gray-400">{props?.item?.["IPO Name"]}</div>
          <div className="text-green-900 px-2 py-1 bg-green-50 rounded-md font-normal text-center">Subscribed By: {props?.item?.["Total"]} Times</div>
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-2">
          <span className="text-lg font-semibold">Issue Price: {props?.item?.["Issue"]}</span>
        </div>
      </div>
      <div className="flex my-.5 flex-row justify-between font-semibold text-base text-center">
        <div className="px-5 py-2 text-center text-white bg-green-300 rounded"><p>Open Date</p>
          {props?.item?.openDate}
        </div>
        <div className="px-5 py-2 text-center text-white bg-red-300 rounded ml-1"><p>Close Date</p> {props?.item?.closeDate}</div>
      </div>
    </a>
  );
};

export default Card;