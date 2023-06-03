'use client'


import { Meeting, Student } from "@/types/types";
import { TextField, Button, FormControl, InputLabel, MenuItem,  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
  outlinedInputClasses, Select,  SelectChangeEvent, InputAdornment } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


import { useState } from "react";
import styles from './MeetingForm.module.css'

interface Props {
  students: Student[],
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

import BasicDateTimePicker from "../formUI/BasicDateTimePicker";
// import BasicRating from "../rating/Rating";
const MeetingForm = (props: Props) => {

  const outerTheme = useTheme();

  const [meeting, setMeeting] = useState<Meeting>({
    id: 0,
    studentID: props.students[0].id,
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

  const handleDateChange = (date: string) => {
    console.log(date)
    setMeeting((prevMeeting) => ({ ...prevMeeting, dateTime: date }));
    
  };
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(meeting);
    // onSubmit(meeting);
  };



  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
    <form onSubmit={handleSubmit} className={styles.meetingForm}>

    
    <FormControl 
        fullWidth
        margin="normal"
      >
        <InputLabel id="student-label">student</InputLabel>
        <Select
          labelId="student-label"
          id="student"
          name="studentID"
          value={meeting.studentID}
          onChange={handleSelectChange}
          label="student"
          
          
        >
          {props.students.map((student) => (
            <MenuItem key={student.id} value={student.id}>{student.name}</MenuItem>
          ))}
          
        </Select>
      </FormControl>


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
        <InputLabel id="demo-simple-select-label">Payment Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="paymentStatusID"
          value={meeting.paymentStatusID}
          onChange={handleSelectChange}
          required
          label="Payment Status"
          
          
        >
          <MenuItem value={1}><span style={{color:"var(--color-paid)"}}>paid</span></MenuItem>
          <MenuItem value={2}  selected={true}><span style={{color:"var(--color-unpaid)"}}>unpaid</span></MenuItem>
          
        </Select>
      </FormControl>
      <TextField
          name="duration"
          label="Duration"
          type="time"
          value={meeting.duration}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            ),
            inputProps: {
              step: 300, // 5 minutes increment
            },
          }}
      />       


      <BasicDateTimePicker changeDate={handleDateChange }/>
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