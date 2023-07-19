import {
    Box, Grid, Card, CardContent, Typography, Stack, Button, Input
} from '@mui/material'
import Page from 'components/Page'
export default function ProjectDetail(props){
    return(
        <Page style={{backgroundColor:"#171819"}}>
        <Grid paddingLeft="13%" paddingRight="13%">
            <Grid container spacing={1} paddingTop="30px">
                <Grid item sm={3}><CustomCard name="Token Price" number="0.05USDC"></CustomCard></Grid>
                <Grid item sm={3}><CustomCard name="Pool Size" number="0.05USDC"></CustomCard></Grid>
                <Grid item sm={3}><CustomCard name="Hard Cap" number="0.05USDC"></CustomCard></Grid>
                <Grid item sm={3}><CustomCard name="Type" number="unlocked"></CustomCard></Grid>
            </Grid>
            <Grid marginTop="30px">
                <Detail></Detail>
            </Grid>
            <Typography marginTop="30px" style={{fontSize:"34px", fontFamily:"Segoe UI", color:"#56C5FF"}}>290 Followers</Typography>
            <Grid container direction="row" spacing={1} marginTop="10px">
                <Grid item><Box component="img" src="my_public/images/avatar1.png"/></Grid>
                <Grid item><Box component="img" src="my_public/images/avatar2.png"/></Grid>
                <Grid item><Box component="img" src="my_public/images/avatar3.png"/></Grid>
            </Grid>
            <Grid marginTop="30px" container direction="row" spacing={1}>
                <Grid item><Button style={{borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", fontFamily:"Segoe UI", fontSize:"14px", color:"white", padding:"10px 20px 10px 20px"}}><Box component="img" src="my_public/images/Vector.png"/>WhitePaper</Button></Grid>
                <Grid item><Button style={{borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", fontFamily:"Segoe UI", fontSize:"14px", color:"white", padding:"10px 20px 10px 20px"}}><Box component="img" src="my_public/images/Vector_www.png"/><span>www.megacapital.com</span></Button></Grid>
                <Grid item><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/plane_avatar.png"/></Box></Grid>
                <Grid item><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/twitter_avatar.png"/></Box></Grid>
                <Grid item><Box component="button" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/Discord.png"/></Box></Grid>
                <Grid item alignItems="center" display="flex"><Box component="a" href="#" color="white" >Add To Google Calendar</Box></Grid>
            </Grid>
            <Grid marginTop="50px">
                <ProjectInformation></ProjectInformation>
            </Grid>
            <Grid marginTop="60px" justifyContent="center" display="flex">
                <Box component="img" src="my_public/images/roadmap-icon.png"></Box>
            </Grid>
            <Grid container marginTop="60px">
                <Box color="white">
                    Jan 2022<br/><br/>
                    Public Sale on Solanium<br/><br/>
                    Feb 2022<br/><br/>
                    TGE for all holders. Playable Demo - for early investors<br/><br/>
                    Mar 2022<br/><br/>
                    DEX listing. MVP = demo plus blockchain layer - for early investors<br/><br/>
                    Apr 2022<br/><br/>
                    CEX listing. Back end dev also fully underway<br/><br/>
                    May 2022<br/><br/>
                    Key NFT Sales. Alpha version - for key online leaders<br/><br/>
                    Jun 2022<br/><br/>
                    Announcement of Key Game theme Challenges<br/><br/>
                    Jul 2022<br/><br/>
                    Beta version - for key online leaders<br/><br/>
                    Aug 2022<br/><br/>
                    Partnerships Announced<br/><br/>
                    Sep 2022<br/><br/>
                    Game Launch on Stores
                </Box>
            </Grid>
        </Grid>
        </Page>
    );
}
function CustomCard(props){
    return(
        <Grid style={{backgroundColor:"#232323", borderRadius: 10, padding: "20px"}}>
            <Typography style={{fontSize:"15px", color:"#24B6E6"}}>{props.name}</Typography>
            <Typography marginTop="20px" style={{fontSize:"20px", color:"white"}}>{props.number}</Typography>
        </Grid>
    );
}
function ProjectInformation(props){
    return(
        <>
        <Grid container border="1px solid #56C5FF" borderRadius={1} bgColor="#232323" padding="30px" rowSpacing={2}>
            <Grid item sm={7} color="#56C5FF" fontSize={48}>Project Information</Grid>
            <Grid item sm={5} color="#56C5FF" fontSize={48}>Token Information</Grid>
            <Grid container item direction="row">
                <Grid container item sm={3} direction="column">
                    <Grid item color="white">HARDCAP</Grid>
                    <Grid item color="white">OPEN TIME</Grid>
                    <Grid item color="white">CLOSE TIME</Grid>
                    <Grid item color="white">LISTING DATE</Grid>
                    <Grid item color="white">DEAL</Grid>
                </Grid>
                <Grid container item sm={2} direction="column">
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">2,000,000 USDC</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Jan 29, 2022, 9:00:00 PM</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Jan 31, 2022, 9:00:00 PM</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Jan 31, 2022, 9:00:00 PM</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">INO</Grid>
                </Grid>
                <Grid container item sm={2}>
                </Grid>
                <Grid container item sm={2} direction="column">
                    <Grid item color="white">SYMBOL</Grid>
                    <Grid item color="white">CATEGORY</Grid>
                    <Grid item color="white">BLOCKCHAIN</Grid>
                    <Grid item color="white">TGI</Grid>
                    <Grid item color="white">TYPE</Grid>
                </Grid>
                <Grid container item sm={2} direction="column">
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">PRGC</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Metaverse</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Solana</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">Solana</Grid>
                    <Grid item color="#56C5FF" justifyContent="right" display="flex">unlocked</Grid>
                </Grid>
            </Grid>
            <Grid sm={12} marginTop="50px">
                <Box color="#56C5FF">35700/100000</Box>
                <Box position="relative" display="flex">
                    <Box width="100%" height="10px" borderRadius={2} backgroundColor="white"/>
                    <Box position="absolute" left="0px" borderRadius={2} height="10px" width={`calc(35700/100000*100%)`} backgroundColor="#56C5FF"/>
                </Box>
            </Grid>
            <Grid item container marginTop="50px">
                <Grid item sm={3} color="#56C5FF">your Contribution</Grid>
                <Grid item sm={3} color="#56C5FF">Personal Max</Grid>
                <Grid item sm={6} color="#56C5FF">Token Price</Grid>
                <Grid item sm={3} fontSize={28} color="white">$1000</Grid>
                <Grid item sm={3} fontSize={28} color="white">247854</Grid>
                <Grid item sm={6} fontSize={28} color="white">$0.04</Grid>
            </Grid>
            <Grid item container marginTop="50px">
                <Grid item sm={12} color="#56C5FF">your BUSD balance: 244.64</Grid>
                <Grid item container sm={6} bgColor="#232323" position="relative" display="flex">
                    <Box component="input" padding="5px" width="100%" height="50px" placeholder='0.0' style={{backgroundColor:"#232323", border:"none", borderRadius:5}}></Box>
                    {/* <Input width="100%" placeholder='0.0' bgColor="none"></Input> */}
                    <Box component="button" position="absolute" right="8px" top="7px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
                </Grid>
            </Grid>
            <Grid marginTop="20px">
                <Box component="button" style={{backgroundColor:"#56C5FF", border:"none", borderRadius:6}} color="white" padding="15px 23px 15px 23px">APPROVE</Box>
                <Box marginLeft="20px" component="button" style={{backgroundColor:"#232323", borderRadius:4, border:"1px solid #56C5FF", color:"#56C5FF", padding:"15px 37px 15px 37px"}}>BUY</Box>
            </Grid>
        </Grid>
        </>
    );
}
function Detail(props){
    return(
        <>
            <Grid style={{backgroundColor:"#232323", borderRadius: 10, padding: "20px"}}>
                <Grid container direction="row">
                    <Grid item sm={9}><Box component="img" src="my_public/images/game-logo.png"></Box></Grid>
                    <Grid item sm={1}><Box component="button" style={{backgroundColor: "rgba(242, 188, 26, 0.1)", border:"none", borderRadius: 8, color:"#F9C013", padding:"15px 40px 15px 40px"}}>BSC</Box></Grid>
                    <Grid item SM={1}><Box component="button" marginLeft="20px" style={{background: "#000000", border:"none", borderRadius:8, color:"#56C5FF", padding:"15px"}}>LaunchPad</Box></Grid>
                </Grid>
                <Grid marginTop="20px">
                    <Typography component="p" style={{fontFamily: "Segoe UI", fontSize:"48px", color:"#56C5FF"}}>ProtReality Games</Typography>
                    <Typography marginTop="15px" component="p" style={{width:"55%", fontFamily: "Segoe UI", fontSize:"20px", color:"#56C5FF"}}>Computers have their own language called Machine Code which tells them what to do. As you can see, it doesn't make a lot of sense to humans!</Typography>
                    <Typography marginTop="15px" component="p" style={{width:"55%", fontFamily: "Segoe UI", fontSize:"15px", color:"#F1F0F0"}}>Computers have their own language called Machine Code which tells them what to do. As you can see, it doesn't make a lot of sense to humans!</Typography>
                    
                </Grid>
                <Grid marginTop="20px">
                    <Box component="button" style={{padding:"10px", backgroundColor:"#56C5FF", color:"white", border:'none', borderRadius:4}} >CONNECT WALLET</Box>
                    <Box component="button" marginLeft="20px" style={{padding:"10px", backgroundColor:"#232323", borderRadius:4, border: "1px solid #56C5FF", color:"#56C5FF"}} >FOLLOW US</Box>
                    <Box component="a" marginLeft="20px" href="#" style={{fontFamily: "Segoe UI", fontSize:"15px", color:'#56C5FF'}} >VIEW CONTRACT</Box>
                </Grid>
                <Grid marginTop="20px" align="center" justifyContent="center" alignItems="center">
                    <Typography component="p" style={{width:"55%", fontFamily: "Segoe UI", fontSize:"34px", color:"#56C5FF"}}>project process</Typography>
                    <Box marginTop="30px" component="img" src="my_public/images/projects-process.png"></Box>
                    
                </Grid>
            </Grid>
        </>
    );
}