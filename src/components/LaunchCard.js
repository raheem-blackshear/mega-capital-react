import {
    Box,
    Typography,
    Grid,
    Button,
    Card,
    CardContent
  } from '@mui/material';
export default function LaunchCard(){
    return(
        <Grid item sm={4}>
        <Card>
            <CardContent style={{backgroundColor: "#232323", padding:"10px"}}>
                <Grid>
                    <Grid  marginBottom="10px" display="flex">
                        <Box component="img" src="my_public/images/projects (2).png" width="100%"></Box>
                        <Box bgcolor={"#232323"} borderRadius={1} padding="5px 20px 5px 20px" position="absolute" left="20px" top="15px">Public</Box>
                        <Box bgcolor={"#232323"} borderRadius={1} padding="5px 20px 5px 20px" position="absolute" right="20px" top="15px">NFT</Box>
                    </Grid>
                    <Grid>
                        <Grid display="flex" position="relative">
                            <Box component="h4" color="#00BFFF" position="relative">Hassan Coin</Box>
                            <Box component="img" src="my_public/images/project-card.png" position="absolute" right="0px"></Box>
                        </Grid>
                    </Grid>
                    <Grid marginTop="10px">
                    <Grid dispay="flex" position="relative" container direction="row">
                        <Box item component="p" position="relative">Total Raise</Box>
                        <Box item component="p" position="absolute" right="0px" fontSize="24px">$173,000</Box>
                    </Grid>
                    </Grid>
                    <Grid width="100%" bgcolor="#000000" padding="6px" style={{borderRadius:6}}>
                        <Box component="h5" display="flex" align="center" justifyContent="center" color="#00BFFF" >This is Hassan Coin</Box>
                    </Grid>
                    <Grid marginTop="10px" display="flex" align="center" justifyContent="center" >
                        <Box component="a" href="#" color="white">Add to Google Calendar</Box>
                    </Grid>
                    <Grid marginTop="5px" display="flex" align="center" justifyContent="center" >
                    <Box component="a" href="/project"><i class="fa-solid fa-circle-arrow-right text-info"></i></Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
    );
}