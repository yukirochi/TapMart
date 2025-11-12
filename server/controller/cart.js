const cartmodel = require("./../model/cartmodel");

let addtocart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  let checkuserid = await cartmodel.findOne({ userId });

  if (!checkuserid) {
    checkuserid = new cartmodel({ userId, items: [{ productId, quantity: Number(quantity) }] });
  } else {
    const itemexist = checkuserid.items.find(
      (item) => item.productId === productId
    );

    if (itemexist) {
      itemexist.quantity += Number(quantity);
    } else {
      checkuserid.items.push({ productId, quantity: Number(quantity) });
    }
  } 

  await checkuserid.save();
    res.status(200).json({ success: true, checkuserid });
};
module.exports = addtocart;
