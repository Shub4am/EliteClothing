import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../Button';
import { selectCartTotal } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector';
import { PaymentFormContainer, FormContainer, PaymentButton } from './styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });
    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2> Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={paymentHandler}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
