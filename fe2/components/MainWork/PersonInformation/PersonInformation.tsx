import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import userAnimation from '../../../Assets/user_icon.json'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function PersonInformation() {
    const [gender, setGender] = useState('Gender');

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };



    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phoneNumber = event.target.value;
        setPhoneNumber(phoneNumber.toString()); // Convert the phoneNumber to a string before setting it in the state
        console.log(phoneNumber);

    };
    return (
        <div className=' flex flex-col gap-7 bg-gray-100'>
            <div className='w-1/4 h-1/4 mx-auto my-auto'>
                <Lottie animationData={userAnimation} />
            </div>
            <Typography variant="h5" color="blue-gray" className=' text-center text-9xl font-bold font-hologa'>
                User Information
            </Typography>
            <div className=' flex justify-between gap-2'>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="First Name"
                />
                <TextField
                    fullWidth
                    id="outlined-required"
                    label="Middle Name"
                />
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Last Name"
                />


            </div>
            <div className="">
                <TextField
                    required
                    label="Address 1"
                    fullWidth  // This will make the TextField take the full width of its container
                    multiline  // This allows for multiple lines of text
                    rows={2}   // You can adjust the number of rows as needed
                    variant="outlined" // You can use "outlined" or "filled" depending on your design preference
                    style={{ width: '100%' }}
                />
            </div>
            <div className="">
                <TextField

                    label="Address 2"
                    fullWidth  // This will make the TextField take the full width of its container
                    multiline  // This allows for multiple lines of text
                    rows={2}   // You can adjust the number of rows as needed
                    variant="outlined" // You can use "outlined" or "filled" depending on your design preference
                    style={{ width: '100%' }}
                />
            </div>
            <div className='flex space-x-4'>
                <div>
                    <TextField
                        required
                        label="Phone Number"
                        type="tel" // Set the input type to "tel" for phone numbers
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div className=' w-40'>
                    <FormControl fullWidth>
                        <InputLabel >Gender</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            label="Gender"
                            onChange={handleChange}
                        >
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>

                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        required
                        // fullWidth
                        id="outlined-required"
                        label="City"
                    />
                </div>
                <div>
                    <TextField
                        required
                        // fullWidth
                        id="outlined-required"
                        label="Pin-Code"
                    />
                </div>
            </div>
            <div className="">
                <TextField
                    required

                    label="Email Address"
                    fullWidth  // This will make the TextField take the full width of its container
                    variant="outlined" // You can use "outlined" or "filled" depending on your design preference

                />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DesktopDatePicker',
                    ]}
                >
                    <DemoItem label="Date of Birth">
                        <DatePicker defaultValue={dayjs('2000-01-01')} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
}