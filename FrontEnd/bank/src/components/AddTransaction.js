import React, { useState, useEffect } from 'react';
import axios from 'axios';
function AddTransaction(props) {
    let balance = props.balance
    let setBalance = props.balanceFunction

    const [amount, setAmount] = useState("")
    const updateAmount = event => {
        setAmount(event.target.value)
    }
    
    const [category, setCategory] = useState("")
    const updateCategory = event => {
        setCategory(event.target.value)
    }

    const [vendor, setVendor] = useState("")
    const updateVendor = event => {
        setVendor(event.target.value)
    }

    const addTransactionToDB = function () {
        let newBalance = parseInt(balance) + parseInt(amount);
        setBalance(newBalance)
        fetch(`http://localhost:3005/transactions?amount=${amount}&category=${category}&vendor=${vendor}`, {
            method: 'POST',
        })
            .then(response => console.log(response.status))

    }
    return (
        <div className='addTransaction'>
            <h2>Add Transaction:</h2>
            <div id="input">
                <div>
                    <div>Amount:</div>
                    <input type="text" value={amount} onChange={updateAmount} />
                </div>
                <div>
                    <div>Category:</div>
                    <input type="text" value={category} onChange={updateCategory} />
                </div>
                <div>
                    <div>Vendor:</div>
                    <input type="text" value={vendor} onChange={updateVendor} />
                </div>
                <button onClick={addTransactionToDB}>Submit</button>
            </div>
        </div>
    )

}
export default AddTransaction;