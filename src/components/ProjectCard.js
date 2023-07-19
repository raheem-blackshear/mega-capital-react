import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Fade,
  useScrollTrigger,
} from '@mui/material';
export default function ProjectName(props) {

  return (
    <Box style={{backgroundColor:'#232323', textDecoration:"none"}} borderRadius={1.5} position="relative">
        <Box>
            <Box display="flex" position="relative" component="img" src="my_public/images/projects (2).png" width="100%" height="100%"/>
            <Box position="absolute" top="3%" left="3%" borderRadius={0.5} color="white" bgcolor="#56c5ff" fontSize="12px" padding="5px">22/06/2022</Box>
            <Box position="absolute" top="3%" right="3%" borderRadius={0.5} color="white" bgcolor="#56c5ff" fontSize="12px" padding="5px">NFT Deals</Box>
        </Box>
        <Box paddingLeft={'13%'} paddingRight={'13%'} paddingBottom="12%" justifyContent="center">
          <Typography marginTop="15px" align="center" variant="body2" fontSize="20px" fontFamily={'Segoe UI'} color="#24B6E6">
          Project Name
          </Typography>
          <Typography variant="body2" align="center" fontSize="16px" color="white"  fontFamily={'Segoe UI'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body2" align="center" fontSize="16px"  fontFamily={'Segoe UI'} marginTop="15px" color="#50B5E3">
            <a href="/project">learn more</a><br/>
            <i class="fa-solid fa-arrow-right text-info"></i>
          </Typography>
        </Box>
    </Box>
  );
}