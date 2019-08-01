import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_zViSuQGdaZ83RJSfwFZS9C8K";

    const onToken = token =>{
        axios({
            url: 'payment',
            method: 'post',
            data:{
                amount: priceForStripe,
                token
            }

        }).then(
            response =>  {
                alert("Payment succssful");
            }

        ).catch(error =>{
            console.log("payment error ", JSON.parse(error));
            alert("Some issue with the card");
        })
        
    }
    return (
     <StripeCheckout
     label="Pay Now"
     name="Rudra Branding Ltd"
     billingAddress
     shippingAddress
     image="https://img.icons8.com/dotty/80/000000/coin-r.png"
     description={`Your total price is $${price}`}
     amount={priceForStripe}
     panelLabel="Pay Now"
     token={onToken}
     stripeKey={publishableKey}/>

  )
}

export default StripeCheckoutButton
