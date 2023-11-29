import React, { useState, ChangeEvent } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CityCard from '../CityCard/CityCard';
import kolkata from '../../../Assets/kolkata.jpg'
import Darjeeling from '../../../Assets/darjeeling.jpg'
import Delhi from '../../../Assets/delhi.jpg'
import Goa from '../../../Assets/Goa.jpg'
import TamilNadu from '../../../Assets/tamilnadu.jpg'
import DateRange from '../DateRange/DateRange';
import Typography from '@mui/material/Typography';

interface City {
  name: string;
  image: string;
}

const City: City[] = [
  {
    name: "Kolkata",
    image: kolkata.src,
  },
  {
    name: "Darjeeling",
    image: Darjeeling.src,
  },
  {
    name: "Delhi",
    image: Delhi.src,
  },
  {
    name: "Goa",
    image: Goa.src,
  },
  {
    name: "Tamil Nadu",
    image: TamilNadu.src,
  },

]

const MyRadioGroup: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event);
  };

  return (
    <div>
      <Typography color="blue-gray" className=' text-center text-9xl font-bold font-hologa'>
        Destination Selection🌏 :
      </Typography>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Where you want to Travel?</FormLabel> */}
        <div className=' flex flex-col gap-10'>
          <RadioGroup name="radio-buttons" value={selectedValue} onChange={handleChange} style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              value={City[0].name}
              control={<Radio />}
              label={
                <div onClick={() => setSelectedValue(City[0].name)}>
                  <CityCard name={City[0].name} image={City[0].image} />
                </div>
              }
            />
            <FormControlLabel
              value={City[1].name}
              control={<Radio />}
              label={
                <div onClick={() => setSelectedValue(City[1].name)}>
                  <CityCard name={City[1].name} image={City[1].image} />
                </div>
              }
            />
          </RadioGroup>
          <RadioGroup name="radio-buttons" value={selectedValue} onChange={handleChange} style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              value={City[2].name}
              control={<Radio />}
              label={
                <div onClick={() => setSelectedValue(City[2].name)}>
                  <CityCard name={City[2].name} image={City[2].image} />
                </div>
              }
            />
            <FormControlLabel
              value={City[3].name}
              control={<Radio />}
              label={
                <div onClick={() => setSelectedValue(City[3].name)}>
                  <CityCard name={City[3].name} image={City[3].image} />
                </div>
              }
            />
          </RadioGroup>
        </div>
      </FormControl>
      {selectedValue !== '' && <div className=' mt-10'>
        <div className=' flex flex-col gap-10'>
          <h1 className=' text-center text-9xl font-bold font-hologa'> Select Your Dates 📅 :</h1>
          <div>
            <DateRange />
          </div>
        </div>

      </div>}
    </div>
  );
};

export default MyRadioGroup;
