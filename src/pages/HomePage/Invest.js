import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import InvestCard from 'components/InvestCard'

gsap.registerPlugin(ScrollTrigger);
const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0, display: 'none' },
  entered:  { opacity: 1 , display: 'block'},
  exited:  { opacity: 0, display: 'none'},
};
export default function Invest(){
  const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
  return(
      <>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Box  component="img"  src={"my_public/images/h-1.png"}></Box>
      </Box>
      <Box sx={{ marginBottom: '60px'}}>
        <Typography align='center'>
          <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
            <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>INVEST</h1>
            <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontFamily:{font_Family}}}>How To Invest</h2>
          </Box>
          <Box component="p" fontFamily={font_Family}  marginTop="120px" style={{ marginBottom: '10px', color:'white' }}>BUY AND STAKE OUR MGV TOKEN TO GAIN ACCESS TO VC DEALS ,LAUNCHPAD AND NFTPAD</Box>
        </Typography>
        <Grid marginTop="10px" container spacing={1} align='center' sx={{paddingLeft:'14%', paddingRight:'14%'}}>
          <Grid item xs={12} sm={6} lg={2} md={6}>
            <InvestCard name="Alpha" num="1" fname="IDO, NFT" bname="FCFS"  />
          </Grid>
          <Grid item xs={12} sm={6} lg={2} md={6}>
            <InvestCard name="Beta" num="2" fname="IDO, NFT" bname="FCFS"  />
          </Grid>
          <Grid item xs={12} sm={6} lg={2} md={6}>
            <InvestCard name="Gamma" num="4" fname="IDO, NFT" bname="FCFS"  />
          </Grid>
          <Grid item xs={12} sm={6} lg={2} md={6}>
            <InvestCard name="Delta" num="8" fname="VC.IDO.NFT" bname="Earlier Access"  />
          </Grid>
          <Grid item xs={12} sm={6} lg={2} md={6}>
            <InvestCard name="Epilson" num="16" fname="VC.IDO.NFT" bname="Earlier Access"  />
          </Grid>
          <Grid item xs={12} sm={6} lg={2} md={6}>
            <InvestCard name="Zeta" num="32" fname="VC.IDO.NFT" bname="Earlier Access"  />
          </Grid>
        </Grid>
      </Box >
      {/* <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{marginTop: '30px', marginBottom: '60px', }} fontFamily={'Segoe UI'}> */}
      <Box sx={{ marginBottom: '60px', paddingLeft:'14%', paddingRight:'13%'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} position="relative" display="flex">
            <Box component="img" src="img/main2.png" sx={{ width: '91%' }} />
            <Box borderRadius={5} width="81%" height="100%" position="absolute" left="6%" top="9%">
              <iframe width={'100%'} height="60%" 
                src="https://www.youtube.com/embed/S_KNS9i91gk?playlist=S_KNS9i91gk&loop=1" frameborder="0" allowfullscreen
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
              <Box component="h3" fontFamily={'Segoe UI'}  marginBottom="50px">
                <Box component="span" sx={{ color: '#56C5FF', borderBottom:"2px solid #56C5FF" }} paddingBottom="20px">MegaCapital Insurance Fund</Box>
              </Box>
            <Box component="h3" maginTop="40px" class="text-white mx-3 text-justify" fontFamily={'Segoe UI'} padding="0px 30px">
              To ensure the safety and growth of its community, Megacapital is pleased to announce that it now has an insurance protection fund .
            </Box>
          </Grid>
        </Grid>
          <Grid container marginTop="50px" direction="row">
          <Grid item sm={6}>
            <Box component="h3" fontFamily={'Segoe UI'}  marginBottom="50px">
              <Box component="span" sx={{ color: '#56C5FF', borderBottom:"2px solid #56C5FF" }} paddingBottom="20px">Buyback And Burn</Box>
            </Box>
            <Box component="h3" maginTop="20px" class="text-white mx-3 text-justify" fontFamily={'Segoe UI'}>
              A Share Of Funds Received During Each Token Sale Will Be Used To Buy Back Our Tokens And Burn Them, To Assure The Deflationary Nature Of Our Token.
            </Box>
          </Grid>
          <Grid item sm={6} justifyContent="center" display="flex">
            <Box component="img" width="50%" src="my_public/images/money.png"></Box>
          </Grid>
        </Grid>
      </Box>
      </>
  );
}