'use client'
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function InfoCard() {
  return (
    <Card sx={{ minWidth: "100%",borderRadius: 'var(--borderRadius-normal)', backgroundColor:'var(--color-lightBlue)'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          1
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          2
        </Typography>
        <Typography variant="body2">
          3
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">4</Button>
      </CardActions>
    </Card>
  );
}