const Customer = require("../models/Customer");

const login = async (req, res) => {
  try {
    const {accountNumber,password} = req.body;

    const customer = await Customer.findOne({ accountNumber,password });

    if (customer) {
      console.log("LoggedIn successful");
      return res.status(200).json({
        success: true,
        data: customer,
        message: "logged In succesfully",
      });
    } else {
      console.log("Customer not found");

      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error from login",
    });
  }
};

module.exports = login;
