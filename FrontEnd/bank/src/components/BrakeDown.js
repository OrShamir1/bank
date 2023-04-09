import React, { useState, useEffect } from 'react';
import axios from 'axios';
function BrakeDown() {
    const [data, setData] = useState([[], []])

    useEffect(() => {
        fetch('http://localhost:3005/transactionForCategory')
            .then(response => response.json())
            .then(data => setData(data))
    })
    const sumOfCategoryColor = function (sum) {
        if(sum > 0) {
            return "green"
        }
        else if(sum < 0) {
            return "red"
        }
    }
    return (
        <div className='brakeDown'>
            {data[1].map(c =>
                <div className='brakeDownContainer'>
                    <h3>{c} : </h3>
                    <div className={sumOfCategoryColor(data[0][c])}>{data[0][c]}</div>
                </div>
            )}
        </div>
    )

}
export default BrakeDown;