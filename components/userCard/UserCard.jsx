'use client';
// import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Avatar, Chip } from '@mui/material';
import { Email, Description, EventNote } from '@mui/icons-material';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     borderRadius: theme.spacing(2),
//     boxShadow: theme.shadows[2],
//   },
//   avatar: {
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//     margin: '0 auto',
//     marginTop: theme.spacing(4),
//   },
//   name: {
//     marginTop: theme.spacing(2),
//     textAlign: 'center',
//   },
//   subtitle: {
//     color: theme.palette.text.secondary,
//     textAlign: 'center',
//   },
//   content: {
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//   },
// }));


const styles = {
  card: {
    borderRadius: '16px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: '80px',
    height: '80px',
    margin: '0 auto',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  chip: {
    margin: '8px',
  },
  icon: {
    marginRight: '4px',
  },
};

const UserCard = ({user}) => {
  // const classes = useStyles();

  const { name, surname, nickname, email, description, profileStatus, image, joinedDate } = user;
  return (
    // <Card sx={{ borderRadius: '16px' }}>
    //   <CardContent>
    //     <Avatar src={image} alt={`${name} ${surname}`} sx={{ width: 80, height: 80, margin: '0 auto' }} />
    //     <Typography variant="h5" component="div" sx={{ mt: 2, textAlign: 'center' }}>
    //       {`${name} ${surname}`}
    //     </Typography>
    //     <Typography variant="subtitle1" sx={{ mt: 1, textAlign: 'center' }}>
    //       {nickname}
    //     </Typography>
    //     <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
    //       Profile Status: {profileStatus}
    //     </Typography>
    //     <Typography variant="body2" color="textSecondary">
    //       Email: {email}
    //     </Typography>
    //     {description && (
    //       <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
    //         {description}
    //       </Typography>
    //     )}
    //   </CardContent>
    // </Card>
    <Card style={styles.card}>
    <CardContent>
      <Avatar src={image} alt={`${name} ${surname}`} style={styles.avatar} />
      <Typography variant="h5" component="div" style={styles.name}>
        {`${name} ${surname}`}
      </Typography>
      <Typography variant="subtitle1" style={styles.subtitle}>
        {nickname}
      </Typography>
      <Chip
        label={`Profile Status: ${profileStatus}`}
        color="primary"
        style={styles.chip}
        icon={<EventNote style={styles.icon} />}
      />
      <Chip
        label={email}
        color="secondary"
        style={styles.chip}
        icon={<Email style={styles.icon} />}
      />
      {description && (
        <Chip
          label={description}
          style={styles.chip}
          icon={<Description style={styles.icon} />}
        />
      )}
      {joinedDate && (
        <Chip
          label={`Joined: ${joinedDate}`}
          style={styles.chip}
          color="default"
          icon={<EventNote style={styles.icon} />}
        />
      )}
    </CardContent>
  </Card>
  );
};

export default UserCard;
