import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import kolkata from '../../../Assets/kolkata.jpg'

interface CityCardProps {
    // props types 
    name: string;
    image: string;
}


const CityCard = (props: CityCardProps) => {
    // console.log(props.image)
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt="green iguana"
                />
                <figcaption className="absolute bottom-[37%] left-1/2 flex items-center w-1/2 -translate-x-2/4 justify-center">
                    <span className="font-hologa leading-5 text-white text-[5vw] align-bottom">
                        {props.name}
                    </span>
                </figcaption>

            </CardActionArea>
        </Card>
    )
}

export default CityCard