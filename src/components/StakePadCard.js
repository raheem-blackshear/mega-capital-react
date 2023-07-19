import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent
} from '@mui/material';
import { useNavigate } from 'react-router';
export default function StakePadCard() {
    const navigate = useNavigate();
    return (
      <Box borderRadius={1} sx={{ bgcolor: '#272727', p: '10px', marginBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item sm={7}>
            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
              <Box component="img" src="my_public/images/logo.png" sx={{ width: '50px', marginRight: '10px' }} />
              <Box sx={{ marginTop: '10px', fontSize: 20, color:'white' }}>Megacapital</Box>
            </Box>
          </Grid>
          <Grid item sm={1} sx={{ marginRight: '10px' }}>
            <Box sx={{ fontSize: 15, color:'white' }}>Starts in</Box>
            <Box sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              22/06/2022
            </Box>
          </Grid>
          <Grid item sm={1} sx={{ marginRight: '10px' }}>
            <Box sx={{ fontSize: 15, color:'white' }}>Staked</Box>
            <Box sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              6,000
            </Box>
          </Grid>
          <Grid item sm={1} sx={{ marginRight: '10px' }}>
            <Box sx={{ fontSize: 15, color:'white' }}>Apr</Box>
            <Box sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              10,000%
            </Box>
          </Grid>
          <Grid item sm={1} sx={{ marginRight: '10px' }}>
            <Box sx={{ fontSize: 15, color:'white' }}>Tvl</Box>
            <Box sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              $5,566,158
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }