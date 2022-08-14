import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminCard = () => {
  return (
    <Link style={{ textDecoration: 'none' }} to={'/admin'}>
      <Card sx={{ height: 200, width: 350 }}>
        <CardActionArea>
          {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
          <CardContent
            sx={{
              height: 200,
              color: 'white',
              backgroundColor: '#3f5060',
              '&:hover': {
                backgroundColor: '#181f25',
                transition: '200ms ease-in-out',
              },
            }}
          >
            <Typography gutterBottom variant='h4' component='div'>
              Admin
            </Typography>
            <Typography gutterBottom variant='body1' color='text.primary'>
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
