import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


const Guest = () => {
  return (
    <Link style={{ textDecoration: 'none' }} to={'/guest'}>
      <Card sx={{ height: 200, width: 350, borderRadius: 5 }}>
        <CardActionArea>
          {/* <CardMedia
          component='img'
          height='200'
          src={require('../../images/letter-g.png')}
          alt='green iguana'
        /> */}
          <CardContent
            sx={{
              height: 200,
              color: 'white',
              backgroundColor: 'rgba(28, 144, 94, 0.937)',
              '&:hover': {
                backgroundColor: 'rgba(28, 105, 144, 0.989)',
                transition: '200ms ease-in-out',
              }
            }}
          >
            <Typography gutterBottom variant='h4' component='div'>
              Guest
            </Typography>
            <Typography variant='body1' color='text.primary'>
              View all timetables
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Guest;
