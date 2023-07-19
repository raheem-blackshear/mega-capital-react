import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
  
import ProjectCard from 'components/ProjectCard'
export default function Projects(){
    const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
    return(
        <>
        <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{ marginTop:'80px', FontFace: "Segoe UI", }} fontFamily={'Segoe UI'}>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-2.png"}></Box>
          </Box>
          <Typography align='center'>
            <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>PROJECTS</h1>
              <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontFamily:{font_Family}}}>Upcoming Projects</h2>
            </Box>
          </Typography>
          <Grid container spacing={2} sx={{marginBottom:'20px'}}>
            {/* {pools?.length > 0 ? (
              pools.map((pool, key) => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={key}>
                  <PoolCard pool={pool} account={account} />
                </Grid>
              ))
            ) : ( */}
              {/* // <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}> */}
              
              <Grid container spacing={3} align='center' sx={{paddingLeft:'5px', paddingRight:'5px'}} marginTop="100px">
                <Grid item xs={4} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={4} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={4} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={4} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item xs={4} sm={2.4} lg={2.4} md={2.4}>
                  <ProjectCard></ProjectCard>
                </Grid>
              </Grid>
              {/* // </Stack> */}
            {/* )} */}
          </Grid>
          <Typography fontFamily={'Segoe UI'} fontSize={'25px'} align='center' sx={{ marginBottom: '5px', color : '#24B6E6' }}>
            <a href="#" style={{textDecoration:'none'}}>View All</a>
          </Typography>
        </Box>
        </>
    );
}