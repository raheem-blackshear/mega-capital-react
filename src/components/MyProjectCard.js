import {
    Box,
    Typography,
    Grid,
    Button,
    Card,
    CardContent
  } from '@mui/material';
export default function MyProjectCard(){
    return(
        <>
        <Grid container borderRadius={1} direction="row" bgcolor={"#232323"} padding="15px" marginTop="20px" display="flex" >
            <Grid item md="1">
                <Box component="img" src="my_public/images/geni-logo.png"></Box>
            </Grid>
            <Grid item container md="1.5" align="center" justifyContent="center" spacing={1} direction="column">
                <Grid item><Box padding="4px 5px 4px 5px" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}} color="white">PUBLIC</Box></Grid>
                <Grid item color="white">GemUni IDO</Grid>
            </Grid>
            <Grid item container md="1.5" align="center" justifyContent="center">
                <Grid item><Box color="#56C5FF">CLAIMABLE</Box></Grid>
            </Grid>
            <Grid item container md="2" align="center" justifyContent="center" spacing={1} direction="column">
                <Grid item><Box color="white">Total Raise</Box></Grid>
                <Grid item color="white">$2000</Grid>
            </Grid>
            <Grid item container md="2" align="center" justifyContent="center" spacing={1} direction="column">
                <Grid item><Box color="white">Participants</Box></Grid>
                <Grid item color="white">2805</Grid>
            </Grid>
            <Grid item container md="2" align="center" justifyContent="center" spacing={1} direction="column">
                <Grid item><Box color="white">Current Price</Box></Grid>
                <Grid item color="white">Updating...</Grid>
            </Grid>
            <Grid item container md="1.5" align="center" justifyContent="center" spacing={1} direction="column">
                <Grid item><Box color="white">ATH IDO ROI USD</Box></Grid>
                <Grid item color="white">Updating...</Grid>
            </Grid>
        </Grid>
        </>
    );
}