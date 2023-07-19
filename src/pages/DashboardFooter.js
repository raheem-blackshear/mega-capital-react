// material
import {
    Container,
    Box,
    Grid,
  } from '@mui/material';
  export default function DashboardFooter(){
      return(
          <>
          <Grid container spacing={0} sx={{height:'50%', marginTop:'50px', paddingLeft:'14%', paddingRight:'14%'}}>
              <Grid item sm={6} bgcolor='#232323' paddingLeft='30px' paddingTop='30px'>
              <Box component='h4' color="white">Join MEGA Army</Box>
              <div class="d-flex">
                  <div class="bg-img_09">
                  <Box component="p" class="mb-0" style={{color:"white"}}>Promote tweets for additional <br/> Score Points</Box>
                  <Box component="a"  href="https://docs.google.com/forms/d/e/1FAIpQLSd1Z4Ju-Xzr0qvrbLpw3ffY8DpaJYSkW7TDIvx9hdeHlGGUhg/viewform">
                      <button class="join-army-btn">Join Now</button>
                  </Box>
                  </div>
                  <div class="bg-img_09">
                  <div class="a-image">
                      <Box component="img" src="my_public/images/army.png" army-img alt="Army-Image" sx={{width:'80%', height:'80%'}}/>
                  </div>
                  </div>
              </div>
              </Grid>
              <Grid container item sm={6} alignItems={'center'} justifyContent="center" display="flex" padding='30px' style={{background: 'linear-gradient(to bottom right, #56C5ff  10%, #67CBFF 73%)'}}  >
              {/* <div class="col-md-6 p-0"> */}
                <Grid item sm={12} component="h4" direction="column" color="white" alignItems={'center'} justifyContent="center" display="flex"><Grid>Want to launch your project</Grid><Grid> on Megacapital?</Grid></Grid>
                <Grid item sm={12} component="a"  alignItems={'center'} justifyContent="center" display="flex" style={{textDecoration:"none" }} href="https://docs.google.com/forms/d/e/1FAIpQLSccomiCjlviokNn0_zuOHpStCNb3x_0OQreV4qEaGLpIyTMzg/viewform" >
                    <Box component="button" class="btn btn-dark" >
                    <i class="fa-solid fa-rocket text-info"></i> Apply to Launch</Box></Grid>
              {/* </div> */}
              </Grid>
          </Grid>
          <Grid container direction={'column'} marginTop='70px' sx={{paddingLeft:'14%', paddingRight:'14%'}}>
              <Grid container direction={'row'}>
              <Grid container item md={2} direction='column'>
                  <Grid item mg='5'><Box component="img" src="my_public/images/logo.png"></Box></Grid>
                  <Grid container item mg='2' direction={'row'} marginTop='40px' spacing={2}>
                    <Box component="a" justifyContent="flex-start"  marginRight='12px' marginTop="12px" style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://discord.gg/dzjkkBfxug"} alignItems="center" sx={{width: 40, height: 40, borderRadius : '50%', bgcolor : "#232323", padding : '7px' }}>
                        <Box component="img"   src={"my_public/images/github.png"}/>
                    </Box>
                    <Box component="a" justifyContent="flex-start"  marginRight='12px' marginTop="12px" style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://twitter.com/Megacapitals"} alignItems="center" sx={{width: 40, height: 40, borderRadius : '50%', bgcolor : "#232323", padding : '7px' }}>
                        <Box  component="img"  src={"my_public/images/twitter.png"}/>
                    </Box>
                    <Box component="a" justifyContent="flex-start"  marginRight='12px' marginTop="12px" style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://t.me/MegacapitalVC"} alignItems="center" sx={{width: 40, height: 40, borderRadius : '50%', bgcolor : "#232323", padding : '7px' }}>
                        <Box  component="img"  src={"my_public/images/paper-plane.png"}/>
                    </Box>
                    <Box component="a" justifyContent="flex-start"  marginRight='12px' marginTop="12px" style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://medium.com/@megacapital.io"} alignItems="center" sx={{width: 40, height: 40, borderRadius : '50%', bgcolor : "#232323", padding : '7px' }}>
                        <Box component="img"   src={"my_public/images/medium (2).png"}/>
                    </Box>
                    <Box component="a" justifyContent="flex-start"  marginRight='12px' marginTop="12px" style={{boxShadow: "inset -1px -1px 3px rgba(224, 229, 230, 0.29)"}} href={"https://megacapital-io.gitbook.io/megacapital.io"} alignItems="center" sx={{width: 40, height: 40, borderRadius : '50%', bgcolor : "#232323", padding : '7px' }}>
                        <Box component="img"   src={"my_public/images/gitbook-pngrepo-com.png"}/>
                    </Box>
                  </Grid>
              </Grid>
              <Grid item md='2'>
                  <Box component="h3" color="white">General</Box>
                  <Box marginTop='20px'><Box component="a" href="Introduction - Megacapital.io (gitbook.io)" style={{textDecoration:"none"}} color="white">Introduction</Box></Box>
                  <Box marginTop='20px'><Box component="a" href="Vision & Mission - Megacapital.io (gitbook.io)" style={{textDecoration:"none"}} color="white">Mission</Box></Box>
                  <Box marginTop='20px'><Box component="a" href="Vision & Mission - Megacapital.io (gitbook.io)" style={{textDecoration:"none"}} color="white">Vision</Box></Box>
                  <Box marginTop='20px'><Box component="a" href="/Attachment/FAQ.docx" color="white" style={{textDecoration:"none"}} >FAQ</Box></Box>
              </Grid>
              <Grid item md='2.5'>
                  <Box component="h3" color="white">About Us</Box>
                  <Box marginTop='20px' color="white">Tokennomics</Box>
                  <Box marginTop='20px'><Box component="a" href="/Attachment/MegaCapital.io wheitpaper.pdf" style={{textDecoration:"none"}} color="white">whitepaper</Box></Box>
                  <Box marginTop='20px'><Box component="a" href="/Attachment/Megacapital Pitch Deck.pdf" style={{textDecoration:"none"}} color="white">Pitch Deck</Box></Box>
                  <Box marginTop='20px'><Box component="a" href="/blog" color="white" style={{textDecoration:"none"}}>Blog</Box></Box>
              </Grid>
              <Grid item md='2.5'>
                  <Box component="h3" color="white">community</Box>
                  <Box  marginTop='20px'><Box component="a" href="https://t.me/MegacapitalVC" style={{textDecoration:"none"}} color="white">English</Box></Box>
                  <Box  marginTop='20px'><Box component="a" href="https://t.me/+y_azriUrGYoyNzJk" style={{textDecoration:"none"}} marginTop='20px' color="white">Chinese</Box></Box>
                  <Box  marginTop='20px'><Box component="a" href="https://t.me/+Kd6DXRhpTj5hMjJk" style={{textDecoration:"none"}} marginTop='20px' color="white">Russian</Box></Box>
                  <Box  marginTop='20px'><Box component="a" href="https://t.me/+ko2vIRtwBYpmOTk0" style={{textDecoration:"none"}} marginTop='20px' color="white">Turkey</Box></Box>
              </Grid>
              <Grid item md='2.5'>
                  <Box component="h3" color="white">&nbsp; </Box>
                  <Box marginTop='20px'><Box component="a" style={{textDecoration:"none"}} href="/Attachment/Terms & Conditions privacy policy .docx" color="white">Privacy Policy</Box></Box>
                  <Box marginTop='20px'><Box component="a" style={{textDecoration:"none"}} href="/Attachment/Terms & Conditions privacy policy .docx" color="white">Terms & Conditions</Box></Box>
                  <Box marginTop='20px' color="white">Purchase</Box>
                  <Box marginTop='20px' color="white">Our team</Box>  </Grid>
              </Grid>
              <Box borderRadius={'30%'} sx={{width:'100%', height:'4px', bgcolor:'#3b3b3b'}} marginTop="20px" />
              <Grid container marginTop="20px" >
              <Grid item lg={9}><Box  color="white">copyright @ 2022, megacapital . All Right Reserved</Box></Grid>
              <Grid item lg={3}><Box position='relative' justifyContent={'flex-end'} color="white">privacy policy terms & conditions</Box></Grid>
              </Grid>
          </Grid>
          </>
      );
  }