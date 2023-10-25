import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { BOOKING, CLIENT_ID } from "../../Utils/Apis";

const PaypalCheckoutButton = (props) => {
    const [ clientId, setClientId ] = useState(null);
    
    useEffect(() => {
        const getClientId = async () => {
            try{
                const res = await axios.get(CLIENT_ID);
                const data = res.data.data;
                setClientId(data);
            }catch(err){
                console.log(err);
            }
        }
        getClientId();
    }, []);

    
    const initialOptions = {
        "client-id": clientId,
        "enable-funding": "",
        "disable-funding": "paylater,venmo,card",
        "data-sdk-integration-source": "integrationbuilder_sc",
      };
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const booking = props;

    const handleApprove = async (orderId) => {
        setPaidFor(true);
        try{
            await axios.post(BOOKING, booking.booking);
            console.log(orderId);
        }catch(err){
            console.log(err)
        }
    }

    if(paidFor){
        setTimeout(() => {
            alert('🎉Your booking is complete!');
        }, 3000);
        window.location.pathname = '/MyBooking';
    }

    if(error){
        alert('error', error)
    }

    return(
        <>
        {clientId &&(
        <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons 
            style={{
                shape: "rect",
                layout: "vertical",
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: `${booking.booking.roomCity} for ${booking.booking.numberOfDays} days`,
                            amount: {
                                value: booking.booking.bookingAmount
                            }
                        }
                    ]
                })
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture();
                handleApprove(data.orderID);
            }}
            onError={(err) => {
                setError(err);
                console.error('Paypal checkout onError', err);
            }}
        />
        </PayPalScriptProvider>
        )}
        </>
    )
}

export default PaypalCheckoutButton;