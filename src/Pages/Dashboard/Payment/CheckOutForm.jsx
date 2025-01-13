import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = () => {
    const { user } = useAuth()
    const [error, setError] = useState('')
    const [transtionId, setTranstionId] = useState('')
    const stripe = useStripe()
    const element = useElements()
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [])
    const handleSubmite = async (event) => {
        event.preventDefault()
        if (!stripe || !element) {
            return;
        }
        const card = element.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('errors', error);
            setError(error.message)
        }
        else {
            console.log('paymentMethode', paymentMethod);
            setError('')
        }

        const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {

                    email: user?.email || "anonymouse",
                    name: user?.displayName || 'anonymouse'
                }
            }
        })
        if (cardError) {
            console.log("confirm error",cardError);
        } else {
            console.log('payment intents', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTranstionId(paymentIntent.id)
                const payment = {
                    transtionId: paymentIntent.id,
                    email: user?.emial,
                    price: totalPrice,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payments saved', res.data);
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#422470",
                                '::placeholder': {
                                    color: '#aab7c4'
                                }
                            },
                            invalid: {
                                color: '#9e4146'
                            }
                        }
                    }}
                ></CardElement>
                <button disabled={!stripe || !clientSecret} className="btn btn-sm py-2 text-black bg-blue-500">Pay</button>
                <p>{error}</p>
                <p className="text-green-500 py-4">Birng your trantion id  :  {transtionId}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;