const Customer = require("../models/Customer");

const getBalance = async (req, res) => {
  try {
    const { accountNumber } = req.body;

    const customer = await Customer.findOne({ accountNumber });

    if (customer) {
      const balance = customer.balance;

      return res.status(200).json({
        success: true,
        balance: balance,
      });
    } else {
  
      return res.status(404).json({
        success: false,
        message: 'Customer not found',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports = getBalance;
