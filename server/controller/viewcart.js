const cartmodel = require("./../model/cartmodel");

let viewcart = async (req, res) => {
  const { userId } = req.body;

  let userCartData = await cartmodel.findOne({ userId });

  if (userCartData) {
    res.json({
      msg: "have item",
      userCartData: userCartData,
      status: true,
    });
  } else {
    res.json({
      status: false,
    });
  }
};

module.exports = viewcart
