import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
export default function Roadmap(){
  const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
  return(
        <>
        <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-6.png"}></Box>
          </Box>
          <Typography fontFamily={'Segoe UI'} align='center' sx={{ marginBottom: '35px' }}>
            <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>MAP</h1>
              <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontFamily:{font_Family}}}>Roadmap</h2>
            </Box>
          </Typography>
          <Box  style={{marginTop:'150px'}}>
          <div id="one" class="animate corner m-auto">
            <div class="road-map">  
                <div class="animate road-map-text text-light">
                    <h4>Q2</h4>
                    <p>2022</p>
                </div>

              <a href="#"><i class="fa-solid fa-play text-light"></i></a> 
                <div class="road-map-text text-light">
                    <h4>Q3</h4>
                    <p>2022</p>
                </div>
              <a href="#"><i class="fa-solid fa-play text-light"></i><i class="fa-solid fa-play text-light"></i></a> 
                <div class="road-map-text text-light">
                    <h4>Q4</h4>
                    <p>2022</p>
                </div>
              <a href="#"><i class="fa-solid fa-play text-light"></i><i class="fa-solid fa-play text-light"></i><i class="fa-solid fa-play text-light"></i></a> 
            </div>
        </div>
        <Grid container paddingLeft="20%">
            <Grid item sm={3.1} paddingTop="7%" borderLeft="1px solid white" paddingLeft="3px">
              <p style={{color:'white'}}>Marketing And Media</p>
              <p style={{color:'white'}}>Private Sale</p>
              <p style={{color:'white'}}>IDO/ Public Sale</p>
              <p style={{color:'white'}}>Contract Audits</p>
              <p style={{color:'white'}}>Token Lunch</p>
              <p style={{color:'white'}}>Pancakeswap Listing</p>
            </Grid>

            <Grid item sm={3.5} borderLeft="1px solid white" position="relative" paddingLeft="3px">
              <Box position="absolute" bottom="1px">
                <p style={{color:'white'}}>First IDO Launch</p>
                <p style={{color:'white'}}>First Seed Sale Launch</p>
                <p style={{color:'white'}}>First Net Launch</p>
                <p style={{color:'white'}}>DAO Governance</p>
                </Box>
            </Grid>
            <Grid item sm={3} borderLeft="1px solid white" position="relative" paddingLeft="3px">
              <Box position="absolute" bottom="1px">
                <p style={{color:'white'}}>Integration Of SOLANA</p>
                <p style={{color:'white'}}>Integration Of CARDANO</p>
                <p style={{color:'white'}}>Extra Farms</p>
              </Box>
            </Grid>
        </Grid>
        </Box>
        </Box>
        </>
    );
}