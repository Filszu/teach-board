'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
    
    
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: "#FFDAAE",
    fontSize:"3rem",
  },
    '& .MuiRating-iconFilled .MuiSvgIcon-root': {
    fontSize:"3rem",
    },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" fontSize='small'/>,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

interface Props {
    value:number,
    handleChange: (value: number) => void,
}

const FaceRating= (props: Props) => {
   
  return (
    <StyledRating
      name="highlight-selected-only"
    //   defaultValue={props.value}
    value={props.value}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    //   value={props.value}
    //   onChange={()=>console.log('changed')}

      onChange={(event, newValue) => {
        // console.log(newValue);
        props.handleChange(Number(newValue));
      }}

    //   value={props.value}
    />
  );
}

export default FaceRating;
