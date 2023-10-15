import React, { useState } from "react";
import Lottie from "lottie-react";
import payAnimation from "../../../Assets/payment.json"
import Typography from "antd/es/typography/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import done from "../../../Assets/done.json"

const Payment: React.FC = () => {
    const [itemPrice, setItemPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1);

    const totalCost = itemPrice * quantity;

    const [isPaymentDone, setIsPaymentDone] = useState<boolean>(true);

    const handlePayment = () => {
        // Add your payment processing logic here
        alert("Payment processed successfully!");
        setIsPaymentDone(false);
    };

    return (
        <div>
            {isPaymentDone ? (
                <div>
                    <Typography color="blue-gray" className='text-center text-9xl font-bold font-hologa'>
                        Payment💰
                    </Typography>
                    <div className="flex justify-evenly items-center">
                        <div className="w-1/4 h-1/4">
                            <Lottie animationData={payAnimation} />
                        </div>
                        <div>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent className="flex flex-col gap-7">
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="text-center text-5xl font-bold font-serif">
                                        Payment Card
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        Total cost : $ 1478
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        onClick={handlePayment}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md transition-all hover:bg-blue-600 hover:shadow-xl"
                                    >
                                        Pay Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <Lottie animationData={done} />
                </div>
            )}
        </div>
    );
};



export default Payment;