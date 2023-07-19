import {
  Box,
  Typography,
} from '@mui/material';

import PoolsCard from 'components/PoolsCard'
export default function Pools(){
    const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
    return(
        <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{ marginTop: '50px', marginBottom: '50px', paddingLeft:'14%', paddingRight:'14%'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
                <Box  component="img"  src={"my_public/images/h-4.png"}></Box>
            </Box>
            <Typography align='center'>
                <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
                <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>POOLS</h1>
                <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontFamily:{font_Family}}}>Staking Pools</h2>
                </Box>
                <Box component="p" fontSize="12px" fontFamily={font_Family}  marginTop="80px" style={{ marginBottom: '25px' }} color="white">Earn high yield by staking mega capital token  or join other attractive staking pools from IDO projects check word file please</Box>
            </Typography>
            <PoolsCard allocation="0"/>
            <PoolsCard allocation="0"/>
            <PoolsCard allocation="0"/>
            <PoolsCard allocation="1"/>
            <PoolsCard allocation="1"/>
        </Box>
    );
}