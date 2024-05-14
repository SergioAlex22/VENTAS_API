const express = require("express")
const uri = 'mongodb+srv://sergivalles113:mM3hjuQ4lqYLvt7S@cluster0.buhxxz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { shopModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive Shop"); })

app.get('/shops', async(req, res)=>{
  const list = await payModel.find({});
  res.json( list );
});
app.get('/shops/:codProduct', async(req, res)=>{
  const shop = await shopModel.find({code:req.params.code});
  res.json( shop );
});
app.post('/shops', async(req, res)=>{
  try {
    const {codProduct, productName, price} = req.body;
    
    const shop=await shopService.get(loanCode);
    console.log("LOAN", loan);
    if(!loan) throw ("LOAN_NOT_FOUND");
    if( loan.status!='PENDING') throw ("LOAN_NOT_PENDING");

    const payment = new payModel({code, loanCode, money});
    const data = await payment.save();
    await loanService.changeStatus(loanCode,'PAID');
    return res.status(201).json(data);
    

  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})