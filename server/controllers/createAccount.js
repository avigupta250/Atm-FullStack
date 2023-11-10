const Customer = require("../models/Customer");

const generateRandomAccountNumber = () => {
  return Math.floor(Math.floor(Math.random() * 10000000000));
};

const createAccount = async (req, res) => {
  try {
    const { name } = req.body;

    let newAccountNumber = generateRandomAccountNumber();

    const isDuplicate = await Customer.exists({
      accountNumber: newAccountNumber,
    });

    while (isDuplicate) {
      newAccountNumber = generateRandomAccountNumber();
    }

    const newCustomer = await Customer.create({
      name,
      accountNumber: newAccountNumber,
      balance: 0,
    });
    res.status(200).json({
      success: true,
      data: newCustomer,
      message: console.log("Account created successfull"),
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,

      message: "Account Creation failed",
    });
  }
};



module.exports = createAccount;
