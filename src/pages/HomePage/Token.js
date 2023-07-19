import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
  
import ReactApexChart from 'react-apexcharts'
export default function Token(){
    const font_Family = 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
    return(
        <>
        <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  sx={{ marginTop: '50px', marginBottom: '50px', paddingLeft:'14%', paddingRight:'14%'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, borderRadius: 1,}}>
            <Box  component="img"  src={"my_public/images/h-5.png"}></Box>
          </Box>
          <Typography align='center'>
            <Box data-aos="zoom-in" fontFamily={font_Family} sx={{display:'flex', position:'relative', justifyContent:'center'}}>
              <h1 class="text-mute text-center fw-bold position-absolute start-50 translate-middle" style={{fontSize:120, top:'30px', left:'50%', color:"#232323", fontFamily:{font_Family}}}>TOKEN</h1>
              <h2 class="text-light text-center position-absolute start-50 translate-middle-x" style={{top:'13px',fontFamily:{font_Family}}}>Features & Token Utility</h2>
            </Box>
            <Box component="p" fontSize="18px" fontFamily={font_Family}  marginTop="80px" style={{ marginBottom: '25px' }} color="white">The Megacapital token is developed on the BEP-20 Binance Smart Chain and will serve as <br/>the native token for the megacapital platform. Megacapital users will use this token <br/>for a variety of activities within our ecosystem as we will be mentioning some of them <br/>below.</Box>
          </Typography>
        </Box>
        <Grid data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  container spacing={2} paddingLeft='14%' paddingRight='9%'>
          <Grid item sm={6}>
            <Typography variant="h4" component="div" fontFamily={'Arial'} sx={{ color: '#56C5FF', marginBottom: '25px' }}>
              Key Features
              <Box  component="img"  src={"my_public/images/border.png"} width='25%'></Box>
            </Typography>
            <ul style={{ fontSize: '25px', color:'#56C5FF'}}>
              <li><span style={{color:"white"}}>Incubator Launchpad</span></li>
              <li><span style={{color:"white"}}>Multi-chain networks</span></li>
              <li><span style={{color:"white"}}>Nft pad</span></li>
              <li><span style={{color:"white"}}>VC Deals (Private and seed)</span></li>
              <li><span style={{color:"white"}}>Stakepad</span></li>
              <li><span style={{color:"white"}}>Yield Farming</span></li>
              <li><span style={{color:"white"}}>Buyback & Burn Program</span></li>
              <li><span style={{color:"white"}}>Mega insurance fund</span></li>
            </ul>
          </Grid>
          <Grid item sm={6} style={{ textAlign: 'center' }}>
            <Box component="img" src="img/main3.png" sx={{ width: '80%' }} />
          </Grid>
        </Grid>

        {/* Token Distribution*/}
        <Grid data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  container spacing={2} sx={{ marginTop: '20px', marginBottom: '20px', paddingLeft:'14%', paddingRight:'5%'}}>
          <Grid item sm={6} style={{ textAlign: 'center' }}>
            {/* <Box component="img" src="img/main4.png" sx={{ width: '60%' }} /> */}
            <Box width="90%" height="90%" position="relative">
              <MyChart1></MyChart1>
              
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Typography fontFamily={'Segoe UI'} variant="h3" component="div" sx={{ color: '#56C5FF', marginBottom: '25px' }}>
              Token Distribution
              <Box  component="img"  src={"my_public/images/border.png"} width='30%'></Box>
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <ul style={{ fontSize: '25px', color:'white' }}>
                  <li>Seed sale 9%</li>
                  <li>Private sale 12%</li>
                  <li>Public sale 3%</li>
                  <li>Liquidity & Market Making 5%</li>
                  <li>Team 14%</li>
                </ul>
              </Grid>
              <Grid item sm={6}>
                <ul style={{ fontSize: '25px', color:'white' }}>
                  <li>Marketing 10%</li>
                  <li>Development 6%</li>
                  <li>Staking Rewards 25 %</li>
                  <li>Reserve 10%</li>
                  <li>Advisors 6%</li>
                </ul>
              </Grid>
            </Grid>
            <ul style={{ fontSize: '25px', marginTop: '20px', color:'#56C5FF' }}>
              <li><span style={{color:"white"}}>Initial Market cap $ 148,000</span></li>                  
              <li><span style={{color:"white"}}>Dex Listing Price 0.006 BUSD</span></li>                  
              <li><span style={{color:"white"}}>TGE circulating supply: 7.4 % (including liquidity)</span></li>                  
              <li><span style={{color:"white"}}>Tokens sold at TGE 24%</span></li>                  
              <li><span style={{color:"white"}}>Fully Diluted Market Cap $6,000,000</span></li>                  
              <li><span style={{color:"white"}}>TOTAL SUPPLY 1,000,000,000</span></li>                  
            </ul>


          </Grid>
        </Grid>
        </>
    );
}

function MyChart1(props){
    const data = {
      series: [25, 14, 12, 10, 10, 9, 6, 6, 5, 3],
      options: {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ["Staking Rewards", "Team", "Private sale", "Reserve", "Marketing", "Seed sale", "Advisors", "Development", "Liquidity & Market Making", "Public sale"],
        theme: {
          monochrome: {
            enabled: true
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        // title: {
        //   text: "Monochrome Pie"
        // },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [val.toFixed(1) + '%']
          }
        },
        legend: {
          show: false
        }
      },  
    };
    const COLLAPSE_WIDTH = 118;
    return (
      <div id="chart">
        <ReactApexChart options={data.options} series={data.series} type="pie" />
        {/* <Box position="absolute" borderRadius="50%" width="100px" height="100px" top={ `calc(50% - ${COLLAPSE_WIDTH}px)`} left={ `calc(50% - ${COLLAPSE_WIDTH}px)`} padding="10px" style={{backgroundColor:"white", justifyContent: "center", alignContent:"center", display:"flex"}}> */}
        <Box position="absolute" top={ `calc(50% - ${COLLAPSE_WIDTH}px)`} left={ `calc(50% - ${COLLAPSE_WIDTH}px)`} style={{justifyContent: "center", alignContent:"center", display:"flex"}}>
            <Box component="img" src="my_public/images/circle_mega.png"></Box></Box>
        {/* <Box borderRadius="50%" width="12%" justifyContent={"center"} display="flex" align="center" style={{backgroundColor:"white"}}><Box component="img" src="my_public/images/logo.png"></Box></Box> */}
      </div>
    );
  }