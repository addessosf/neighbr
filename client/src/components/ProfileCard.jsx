import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Grid,
  Avatar
  // Box
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import { createMUITheme, ThemeProvider } from '@mui/material/styles';

// const useStyles = makeStyles({
//   profileCard: {
//     width: '400px',
//     height: '550px'
//   }
// });

export default function ProfileCard(props) {
  const { handleClose } = props;
  // const classes = useStyles();
  return (
    <div className="ProfileCard" style={{ height: '525px', width: '415px' }}>
      <div className="ProfileCardHeader">
        <Grid container>
          <Grid item sm={10}>
            <DialogTitle sx={{ padding: '5px' }}>
              <Typography variant="h6" component="div" sx={{ padding: '5px' }}>
                Neighbr Profile
              </Typography>
            </DialogTitle>
          </Grid>
          <Grid item sm={2} sx={{ display: 'flex', alignContent: 'center', padding: '0px' }}>
            <Button onClick={handleClose}>
              X
            </Button>
          </Grid>
        </Grid>
      </div>
      <DialogContent dividers sx={{ height: '180px', width: 'auto' }}>
        <Grid container sx={{ maxHeight: '20%' }}>
          <Grid item sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar alt="profile image" src="" sx={{ height: '115px', width: '115px', backgroundColor: 'coral' }} />
            <Typography variant="h5" component="div">
              Tiffany
            </Typography>
            <Typography variant="h6" component="div" sx={{ opacity: 0.6 }}>
              San Francisco
            </Typography>
          </Grid>
          <Grid item sm={6} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <StarIcon sx={{ color: '#C85CDB' }} />
            <StarIcon sx={{ color: '#C85CDB' }} />
            <StarIcon sx={{ color: '#C85CDB' }} />
            <StarHalfIcon sx={{ color: '#C85CDB' }} />
            <StarOutlineIcon sx={{ color: '#C85CDB' }} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent dividers>
        <Typography sx={{ fontSize: '16px' }}>
          Hi there! I love building community and serving my fellow Neighbrs!
          See what I did there? I am always out and about, so if you have any items
          you need picked up, just holler! Thanks!
        </Typography>
      </DialogContent>
      <Grid>
        <Grid item sm={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography>
            Previous Requests
          </Typography>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100px',
            width: '300px',
            overflow: 'scroll'
          }}
          >
            <div>
              Item
            </div>
            <div>
              Item
            </div>
            <div>
              Item
            </div>
            <div>
              Item
            </div>
            <div>
              Item
            </div>
            <div>
              Item
            </div>
            <div>
              Item
            </div>
            <div>
              Item
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

ProfileCard.propTypes = {
  handleClose: PropTypes.func.isRequired
};