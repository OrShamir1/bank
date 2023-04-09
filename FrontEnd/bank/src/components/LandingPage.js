import React, { useState, useEffect } from 'react';
function LandingPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/transaction')
        .then(response => response.json())
        .then(data => setData(data))
    })

    const removeItem = e => {
        const removeID = e.target.getAttribute("id");
        fetch(`http://localhost:3005/transaction?id=${removeID}`, {
            method: 'DELETE',
        })
            .then(response => console.log(response))
    }

    const amountColor = function (amount) {
        if(amount > 0) {
            return "green"
        }
        else if(amount < 0) {
            return "red"
        }
    }
    return (
        <div className='transactions'>
            {data.map(t => 
            <div key={t._id} className='transaction'>
                <div className='delete' onClick={removeItem} id={t._id}>x</div>
                <div className={amountColor(t.amount)}>amount: {t.amount}</div>
                <div>category: {t.category}</div>
                <div>vendor: {t.vendor}</div>
            </div>
            )}
        </div>
    )

}
export default LandingPage;