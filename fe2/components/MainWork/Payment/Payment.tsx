import React, { useState } from "react";
import Lottie from "lottie-react";
import payAnimation from "../../../Assets/payment.json"
import Typography from "antd/es/typography/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import done from "../../../Assets/done.json"
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Payment: React.FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            {!open ? (
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
                                        onClick={handleClick}
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
                    <Snackbar open={open} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Payment Done😃
                        </Alert>
                    </Snackbar>
                    <Lottie animationData={done} />
                </div>
            )}
        </div>
    );
};



export default Payment;