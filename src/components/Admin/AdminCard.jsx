import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminCard = () => {
  return (
    <Link style={{ textDecoration: 'none' }} to={'/admin'}>
      <Card sx={{ height: 200, width: 350 }}>
        <CardActionArea>
          <CardContent
            sx={{
              height: 200,
              color: '#170b2b',
              backgroundColor: '#747a81',
              '&:hover': {
                backgroundColor: '#5d6368',
                transition: '200ms ease-in-out',
              },
            }}
          >
            <Typography gutterBottom variant='h4' component='div'>
              Admin
            </Typography>
            <Typography gutterBottom variant='body1' color='#000'>
              Admin services like adding teachers and classes. Creating the
              timetable.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default AdminCard;
