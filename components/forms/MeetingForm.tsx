'use client'

import { Meeting } from "@/types/types";
import { TextField, Button, FormControl, InputLabel, MenuItem,  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
  outlinedInputClasses, Select,  SelectChangeEvent } from '@mui/material';




import { useState } from "react";
import styles from './MeetingForm.module.css'

interface Props {
  
}
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#E07800', // Set the primary color to yellow
//     },
//     secondary:{
//       main: '#ddd',
//     },
//     text: {
//       primary: '#FFAE52', // Set the text color to white
//     },
    
    
//   },
// });



import { customTheme } from "./customMuiFormStyles";
import FaceRating from "../rating/FaceRating";
// import BasicRating from "../rating/Rating";
const MeetingForm = (props: Props) => {

  const outerTheme = useTheme();

  const [meeting, setMeeting] = useState<Meeting>({
    id: 0,
    studentID: 0,
    statusID: 1,
    paymentStatusID: 1,
    duration: '',
    dateTime: '',
    satisfaction: 5,
    notes: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeeting((prevMeeting) => ({ ...prevMeeting, [name]: value }));
  };

  const handleSelectChange = (event: SelectChangeEvent<{ value: number }>) => {
    const { name, value } = event.target;
    setMeeting((prevMeeting) => ({ ...prevMeeting, [name]: value }));
  };

  const handleRatingChange = (value: number) => {
    setMeeting((prevMeeting) => ({ ...prevMeeting, satisfaction: value }));
    
  };

  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // onSubmit(meeting);
  };



  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
    <form onSubmit={handleSubmit} className={styles.meetingForm}>
      <TextField
        name="studentID"
        label="Student ID"
        value={meeting.studentID}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />


      <FormControl 
        fullWidth
        margin="normal"
      >
        <InputLabel id="lessonStatus-label">Lesson status</InputLabel>
        <Select
          labelId="lessonStatus-label"
          id="lessonStatus"
          name="statusID"
          value={meeting.statusID}
          onChange={handleSelectChange}
          label="Lesson status"
          
          
        >
          <MenuItem value={1}>✅completed</MenuItem>
          <MenuItem value={2}>❌cancelled</MenuItem>
          <MenuItem value={3} selected={true}>⏰scheduled</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        margin="normal"
      >
        <InputLabel id="demo-simple-select-label">Payment Status ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="paymentStatusID"
          value={meeting.paymentStatusID}
          onChange={handleSelectChange}
          required
          label="Payment Status ID"
          
          
        >
          <MenuItem value={1}><span style={{color:"var(--color-paid)"}}>paid</span></MenuItem>
          <MenuItem value={2}  selected={true}><span style={{color:"var(--color-unpaid)"}}>unpaid</span></MenuItem>
          
        </Select>
      </FormControl>
      <TextField
        name="duration"
        label="Duration"
        value={meeting.duration}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        name="dateTime"
        label="Date and Time"
        value={meeting.dateTime}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <div>
      
        <p style={{margin:"1rem 0"}}>Satisfaction:</p>
        

        <FaceRating value={meeting.satisfaction} handleChange={handleRatingChange}/>
        {/* <BasicRating/> */}
      </div>
      
      <TextField
        name="notes"
        label="Notes"
        value={meeting.notes}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

     
    
    </form>
     </ThemeProvider>
  )
}


  

export default MeetingForm