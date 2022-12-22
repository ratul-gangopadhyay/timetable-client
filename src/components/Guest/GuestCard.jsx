import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Guest = () => {
  return (
    <Link style={{ textDecoration: 'none' }} to={'/guest'}>
      <Card sx={{ height: 200, width: 350 }}>
        <CardActionArea>
          <CardContent
            sx={{
              height: 200,
              color: '#170b2b',
              backgroundColor: 'rgba(52, 198, 242, 0.937)',
              '&:hover': {
                backgroundColor: 'rgba(27, 125, 155, 0.943)',
                transition: '200ms ease-in-out',
              },
            }}
          >
            <Typography gutterBottom variant='h4' component='div'>
              Guest
            </Typography>
            <Typography variant='body1' color='#000'>
              View all timetables
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Guest;
