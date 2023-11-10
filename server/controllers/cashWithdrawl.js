const Customer=require("../models/Customer");

const cashWithdrawl=async(req,res)=>{
    try{
        const {accountNumber,amount}=req.body;
        const customer=await Customer.findOne({accountNumber});


        if(customer)
        {
            if(customer.balance>=amount){
                customer.balance-=amount;
                await customer.save();

                return res.status(200).json({
                    success: true,
                    balance: customer.balance,
                    message: "CashWithdrawl Successfully",
                  });
            }else{
                return res.status(500).json({
                    success:false,
                    message:"Insufficient Fund"
                })
            }
        }else {
            return res.status(404).json({
              success: false,
              message: "Customer not found",
            });
          }
    }catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: 'Internal Server Error',
        });
      }
}

module.exports=cashWithdrawl;