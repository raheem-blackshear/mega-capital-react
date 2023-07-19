import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
  
import PerformanceCard from 'components/PerformanceCard'
export default function Performance(){
    const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
    return(
        <>
        <Box  sx={{ marginTop: '10px', marginBottom: '50px', paddingLeft:'14%', paddingRight:'14%'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-3.png"}></Box>
          </Box>
          <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>PERFORMANCE</h1>
              <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontFamily:{font_Family}}}>Past Invest Performance</h2>
            </Box>
          <Grid spacing={2} container data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" marginTop="150px" >
            <Grid item sm="12"><PerformanceCard /></Grid>
            <Grid item sm="12"><PerformanceCard /></Grid>
            <Grid item sm="12"><PerformanceCard /></Grid>
            <Grid item sm="12"><PerformanceCard /></Grid>
          </Grid>
          <Typography fontFamily={'Segoe UI'} fontSize={'25px'} align='center' marginTop="20px" sx={{ marginBottom: '5px', color : '#24B6E6' }}>
            <a href="#" style={{textDecoration:'none'}}>View All</a>
          </Typography>
        </Box>
        </>
    );
}