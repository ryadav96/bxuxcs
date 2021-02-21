
import React from 'react';
import Cell from "./cell";
import Row from "./row";

const cellStyle = "w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-base font-semibold text-gray-600 uppercase tracking-wider";

const table = ({ tableData }) => {
    const rowsList = tableData.map(row => <Row item={row} />)
    return (
        <div>
            <div className="flex flex-row flex-nowrap">
                <Cell cellStyle={cellStyle} data="Listing Date" />
                <Cell cellStyle={cellStyle} data="Name" />
                <Cell cellStyle={cellStyle} data="Issue Size" />
                <Cell cellStyle={cellStyle} data="Subscribed by" />
                <Cell cellStyle={cellStyle} data="Isse Price" />
                <Cell cellStyle={cellStyle} data="Listing Gain/Loss(%)" />
            </div>
            <div>
                {rowsList}
            </div>
            <div
                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                    Showing 1 to 4 of 50 Entries
                        </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button
                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Prev
                            </button>
                    <button disabled="true"
                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Next
                            </button>
                </div>
            </div>
        </div>
    )
}

export default table;
