import React from 'react';

const cell = ({ textStyle, cellStyle, data }) => {
    return (<div className={`${cellStyle}`}>
        <p className={textStyle}>{data}</p>
    </div>);
}

export default cell;