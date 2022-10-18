const express = require('express');
const router = express.Router();

// @route    POST /
router.post('/', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);

    if (Order_number == 'Total') {
      // Is total variance greater than 3% ?
      if (Percent_variance < -3 || Percent_variance > 3) {
        message += `Your variance for this invoice is $${Dolar_variance} or ${Percent_variance}%.\n`;
      }
    }
    // Are orders variance greater than 10% ?
    else {
      if (Percent_variance < -10 || Percent_variance > 10) {
        message += `You charged $${Declared_cost} instead of ${Actual_cost} for order ${Order_number}. The difference is ${Dolar_variance} dollars or ${Percent_variance}%.\n`;
      }
    }
  });

  // Nothing detected
  res.send(message);
});

module.exports = router;
