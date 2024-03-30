const catchAsyncErrors = require("../middleWare/catchAsyncErrors");

const Stripe = require("stripe");
const stripe = Stripe('sk_test_51KOyezSEMZhf5qwyXEGpB1pD0kvM9aDGRmHOsednBBGYDKf5U8j0ATQHIroCDw6RCLVcQ0FWy0AeuGeHDTINWAAF00g5Iz3UIM');

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    payment_method_types: ['card'],
    metadata: {
      company: "MyStore",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
