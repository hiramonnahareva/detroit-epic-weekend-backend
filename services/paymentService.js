const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount, currency) => {
  return await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ['card'],
  });
};

module.exports = { createPaymentIntent };
