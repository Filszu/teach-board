'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


interface Props {
    value:number,
    handleChange: (value: number) => void,
}
export const BasicRating = (props: Props) =>{
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={props.value}
        onChange={(event, newValue) => {
        //   setValue(newValue);
            props.handleChange(Number(newValue))
        }}
        // value={props.value}
        // onChange={props.handleChange}
      />
      
    </Box>
  );
}