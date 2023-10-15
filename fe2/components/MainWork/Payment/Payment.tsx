import React, { useState } from "react";
import Lottie from "lottie-react";
import payAnimation from "../../../Assets/payment.json"
import Typography from "antd/es/typography/Typography";

const Payment: React.FC = () => {
    const [itemPrice, setItemPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1);

    const totalCost = itemPrice * quantity;

    const handlePayment = () => {
        // Add your payment processing logic here
        alert("Payment processed successfully!");
    };

    return (
        <div>
            <Typography color="blue-gray" className=' text-center text-9xl font-bold font-hologa'>
                Payment
            </Typography>
            <Lottie animationData={payAnimation} />
        </div>
    );
};


export default Payment;