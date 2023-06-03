'use client'
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ThemeProvider, createTheme } from '@mui/material';
import dayjs from 'dayjs';
import { DesktopDateTimePicker, MobileDateTimePicker, StaticDateTimePicker } from '@mui/x-date-pickers';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      
    },
  });
  
//   onChange={(event, newValue) => {
//     //   setValue(newValue);
//         // props.handleChange(newValue)
//         console.log(newValue)
//     }}

interface Props {
    changeDate: (date:string) => void,
}
export default function BasicDateTimePicker(props: Props) {
  return (
    <ThemeProvider theme={darkTheme} >
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateTimePicker']} >
        <DateTimePicker label="Chose date"  
            // onChange={(event, newValue) => {
            //     console.log(newValue)
                
            // }}
            onAccept={(newValue) => {
                console.log(newValue)
                props.changeDate(String(newValue))
                
            }}
        />
        {/* <StaticDateTimePicker orientation="landscape" /> */}
      </DemoContainer>
    </LocalizationProvider>
    </ThemeProvider>


//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//     <StaticDateTimePicker orientation="landscape" />
//   </LocalizationProvider>
  );
}