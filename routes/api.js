const express = require('express')
const router = express.Router()
const Transaction = require('./transectionScema')


router.get(`/transaction`, function (req, res) {
    Transaction.find()
      .then(transactionData => {
        res.send(transactionData)
      })
})

router.post(`/transactions`, function (req, res) {
    const requestParams = req.query;
    const amount = requestParams.amount;
    const category = requestParams.category;
    const vendor = requestParams.vendor
    const newTransaction = new Transaction({amount: amount, category: category, vendor: vendor})
    newTransaction.save()
    res.send("done")
})

router.delete(`/transaction`, function (req, res) {
    const requestParams = req.query;
    const id = requestParams.id
    Transaction.findByIdAndDelete(id).then(x => res.send("Done"))

})

router.get(`/transactionForCategory`, function (req, res) {
    const sumObj = {}
    Transaction.find().then(transactionData => {
        for(let transaction of transactionData) {
            if(!sumObj[transaction.category]) {
                sumObj[transaction.category] = transaction.amount
            }
            else (sumObj[transaction.category] += transaction.amount)
        }
        res.send([sumObj, Object.keys(sumObj)])
    })
})

module.exports = router



