 import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', margin:'20px' }}
  >
    
  </Box>
);

export default function BasicCard(response) {
    console.log(response)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {response.title}
        </Typography>
        <Typography variant="h5" component= "div">

        </Typography>
        <Typography sx={{ mb: 1.5}} color="text.secondary">
          adjective
        </Typography>
        <Typography variant='body2'>
          well meaning and kindly.
          <br/>
          {'"a benovolent smile"'}
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
  );
}
