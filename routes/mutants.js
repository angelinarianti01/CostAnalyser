const express = require('express');
const router = express.Router();

// @route           POST /mutants/1
// @original        Declared_cost - Actual_cost
// @modified        Declared cost + Actual_cost
router.post('/1', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost + Actual_cost);
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

// @route           POST /mutants/2
// @original        Declared_cost - Actual_cost
// @modified        Declared cost * Actual_cost
router.post('/2', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost * Actual_cost);
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

// @route           POST /mutants/3
// @original        Declared_cost - Actual_cost
// @modified        Declared cost / Actual_cost
router.post('/3', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost / Actual_cost);
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

// @route           POST /mutants/4
// @original        Declared_cost - Actual_cost
// @modified        Declared cost % Actual_cost
router.post('/4', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;
    let Dolar_variance;

    if (Declared_cost > Actual_cost) {
      Dolar_variance = Math.round(Declared_cost % Actual_cost);
    } else {
      Dolar_variance = Math.round(Declared_cost - Actual_cost);
    }
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

// @route           POST /mutants/5
// @original        Dolar_variance / Declared_cost
// @modified        Dolar_variance * Declared_cost
router.post('/5', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round(Dolar_variance * Declared_cost * 100);

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

// @route           POST /mutants/6
// @original        Dolar_variance / Declared_cost
// @modified        Dolar_variance - Declared_cost
router.post('/6', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance - Declared_cost) * 100);

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

// @route           POST /mutants/7
// @original        Dolar_variance / Declared_cost
// @modified        Dolar_variance + Declared_cost
router.post('/7', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance + Declared_cost) * 100);

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

// @route           POST /mutants/8
// @original        Dolar_variance / Declared_cost
// @modified        Dolar_variance % Declared_cost
router.post('/8', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    let Percent_variance;

    if (Dolar_variance > Declared_cost) {
      Percent_variance = Math.round((Dolar_variance % Declared_cost) * 100);
    } else {
      Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);
    }

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

// @route           POST /mutants/9
// @original        (Dolar_variance / Declared_cost) * 100
// @modified        (Dolar_variance / Declared_cost) / 100
router.post('/9', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round(Dolar_variance / Declared_cost / 100);

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

// @route           POST /mutants/10
// @original        Order_number == 'Total'
// @modified        Order_number != 'Total'
router.post('/10', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);

    if (Order_number != 'Total') {
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

// @route           POST /mutants/11
// @testCondition   Percent_variance is -4
// @original        Percent_variance < -3 || Percent_variance > 3
// @modified        Percent_variance > -3 || Percent_variance > 3
router.post('/11', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);

    if (Order_number == 'Total') {
      // Is total variance greater than 3% ?
      if (Percent_variance > -3 || Percent_variance > 3) {
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

// @route           POST /mutants/12
// @testCondition   Percent_variance is 4
// @original        Percent_variance < -3 || Percent_variance > 3
// @modified        Percent_variance < -3 || Percent_variance < 3
router.post('/12', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);

    if (Order_number == 'Total') {
      // Is total variance greater than 3% ?
      if (Percent_variance < -3 || Percent_variance < 3) {
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

// @route           POST /mutants/13
// @testCondition   Percent_variance is -4
// @original        Percent_variance < -3 || Percent_variance > 3
// @modified        Percent_variance > -3 || Percent_variance < 3
router.post('/13', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);

    if (Order_number == 'Total') {
      // Is total variance greater than 3% ?
      if (Percent_variance > -3 && Percent_variance < 3) {
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

// @route           POST /mutants/14
// @testCondition   Percent_variance is 4
// @original        Percent_variance < -3 || Percent_variance > 3
// @modified        Percent_variance < -3 || Percent_variance == 3
router.post('/14', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);

    if (Order_number == 'Total') {
      // Is total variance greater than 3% ?
      if (Percent_variance < -3 || Percent_variance == 3) {
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

// @route           POST /mutants/15
// @original        Percent_variance < -3 || Percent_variance > 3
// @modified        Percent_variance == -3 || Percent_variance > 3
router.post('/15', (req, res) => {
  const orders = req.body.orders;
  let message = '';

  orders.forEach((order) => {
    const { Order_number, Declared_cost, Actual_cost } = order;

    const Dolar_variance = Math.round(Declared_cost - Actual_cost);
    const Percent_variance = Math.round((Dolar_variance / Declared_cost) * 100);

    if (Order_number == 'Total') {
      // Is total variance greater than 3% ?
      if (Percent_variance == -3 || Percent_variance > 3) {
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

// @route           POST /mutants/16
// @testCondition   Percent_variance is -11
// @original        Percent_variance < -10 || Percent_variance > 10
// @modified        Percent_variance > -10 || Percent_variance > 10
router.post('/16', (req, res) => {
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
      if (Percent_variance > -10 || Percent_variance > 10) {
        message += `You charged $${Declared_cost} instead of ${Actual_cost} for order ${Order_number}. The difference is ${Dolar_variance} dollars or ${Percent_variance}%.\n`;
      }
    }
  });

  // Nothing detected
  res.send(message);
});

// @route           POST /mutants/17
// @testCondition   Percent_variance is 11
// @original        Percent_variance < -10 || Percent_variance > 10
// @modified        Percent_variance > -10 || Percent_variance > 10
router.post('/17', (req, res) => {
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
      if (Percent_variance > -10 || Percent_variance > 10) {
        message += `You charged $${Declared_cost} instead of ${Actual_cost} for order ${Order_number}. The difference is ${Dolar_variance} dollars or ${Percent_variance}%.\n`;
      }
    }
  });

  // Nothing detected
  res.send(message);
});

// @route           POST /mutants/18
// @testCondition   Percent_variance is -11
// @original        Percent_variance < -10 || Percent_variance > 10
// @modified        Percent_variance > -10 || Percent_variance < 10
router.post('/18', (req, res) => {
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
      if (Percent_variance > -10 && Percent_variance < 10) {
        message += `You charged $${Declared_cost} instead of ${Actual_cost} for order ${Order_number}. The difference is ${Dolar_variance} dollars or ${Percent_variance}%.\n`;
      }
    }
  });

  // Nothing detected
  res.send(message);
});

// @route    POST /mutants/19
// @testCondition   Percent_variance is 11
// @original        Percent_variance < -10 || Percent_variance > 10
// @modified        Percent_variance < -10 || Percent_variance == 10
router.post('/19', (req, res) => {
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
      if (Percent_variance < -10 || Percent_variance == 10) {
        message += `You charged $${Declared_cost} instead of ${Actual_cost} for order ${Order_number}. The difference is ${Dolar_variance} dollars or ${Percent_variance}%.\n`;
      }
    }
  });

  // Nothing detected
  res.send(message);
});

// @route           POST /mutants/20
// @original        Percent_variance < -10 || Percent_variance > 10
// @modified        Percent_variance == -10 || Percent_variance > 10
router.post('/20', (req, res) => {
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
      if (Percent_variance == -10 || Percent_variance > 10) {
        message += `You charged $${Declared_cost} instead of ${Actual_cost} for order ${Order_number}. The difference is ${Dolar_variance} dollars or ${Percent_variance}%.\n`;
      }
    }
  });

  // Nothing detected
  res.send(message);
});

module.exports = router;
