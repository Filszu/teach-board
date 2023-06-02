'use client'

import { Meeting } from "@/types/types";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem,  createTheme,
  ThemeProvider, } from '@mui/material';
import { useState } from "react";
import styles from './MeetingForm.module.css'

interface Props {
  
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#E07800', // Set the primary color to yellow
    },
    secondary:{
      main: '#ddd',
    },
    text: {
      primary: '#FFAE52', // Set the text color to white
    },
    
    
  },
});

const MeetingForm = (props: Props) => {

  const initialFormState: Meeting = {
          id: 0,
          studentID: 0,
          statusID: null,
          paymentStatusID: 0,
          duration: '',
          dateTime: '',
          satisfaction: null,
          notes: '',
  };

    const [formData, setFormData] = useState<Meeting>(initialFormState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle form submission or further processing here
      console.log(formData);
    };

  return (
    // <ThemeProvider theme={theme}>
    <form onSubmit={handleSubmit} className={styles.meetingForm}>


      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField
        name="id"
        label="ID"
        value={formData.id}
        onChange={handleChange}
        fullWidth
        margin="normal"
        color="secondary"
       
      
      />
      <TextField
        name="studentID"
        label="Student ID"
        value={formData.studentID}
        onChange={handleChange}
        fullWidth
        margin="normal"
        color="success"
      />
      <TextField
        name="duration"
        label="Duration"
        value={formData.duration}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="dateTime"
        label="Date & Time"
        value={formData.dateTime}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="notes"
        label="Notes"
        value={formData.notes}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select
          name="statusID"
          value={formData.statusID}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={null}>None</MenuItem>
          <MenuItem value={1}>Status 1</MenuItem>
          <MenuItem value={2}>Status 2</MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Payment Status</InputLabel>
        <Select
          name="paymentStatusID"
          value={formData.paymentStatusID}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={1}>Payment Status 1</MenuItem>
          <MenuItem value={2}>Payment Status 2</MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      </FormControl>
      <TextField
        name="satisfaction"
        label="Satisfaction"
        value={formData.satisfaction || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    // </ThemeProvider>
  )
}

export default MeetingForm