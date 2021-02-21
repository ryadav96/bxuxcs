import React from 'react';
import Cell from "./cell";

const dt = [{
    "Date": "05-02-21",
    "IPO Name": "Stove Kraft",
    "issueSize": 412.63,
    "Total": 18.03,
    "Issue": 385,
    "Listing Open": 498,
    "Listing Close": 445.95,
    "Listing  Gains(%)": 15.83,
    "CMP": 484.3,
    "Current Gains (%)": 25.79
}]

const cellStyle = "w-1/6 px-5 py-5 border-b border-gray-200 bg-white text-sm";
const textStyle = "text-gray-900 whitespace-no-wrap";
const culumnNames = ["Date", "IPO Name", "issueSize", "Total", "Issue", "Listing  Gains(%)"];

export const row = (props) => {

    const rowData = culumnNames.map(column => <Cell textStyle={textStyle} cellStyle={cellStyle} data={props?.item?.[column]} />)
    return (
        <div>
            <div className="flex flex-row">
                {rowData}
            </div>
        </div>
    )
}

export default row;
