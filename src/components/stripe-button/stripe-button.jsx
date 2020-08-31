import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HMFlgDED2rnLpoylmeG0wajwUk1mzJnvqxL9elYqdJfxbXpKQ53KIaqZJe6KH2bQC07AshlwSfYrUOagS0wgVSW00P68FIEh1'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Karo Cantu'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />    
    );
};

export default StripeCheckoutButton;