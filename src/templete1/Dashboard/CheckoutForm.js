import React, { useEffect, useState } from "react";

import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transaction, setTransaction] = useState("");

  //
  const { price, name, email, _id } = product;
  // console.log(name, email);
  //
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://laptop-1997.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log(error);
      setCardError(error?.message);
    } else {
      setCardError("");
      // setProcessing(true);
    }
    //
    const { paymentIntent, error: intenError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    //
    if (intenError) {
      setCardError(intenError?.message);
    } else {
      setCardError("");
      // console.log(paymentIntent);
      setSuccess("Congrats you payment is completed");
      setTransaction(paymentIntent.id);
      // send the server
      const payment = {
        id: _id,
        transactionId: paymentIntent.id,
      };
      // console.log(payment);
      fetch(`https://laptop-1997.herokuapp.com/payment/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then(res => res.json())
        .then(data => {
          // setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-success font-bold">{success}</p>
          <p className="text-success font-bold">
            transaction id: {transaction}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
