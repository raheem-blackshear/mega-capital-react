import { useState, useContext, useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { useNavigate } from 'react-router';
// material
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent
} from '@mui/material';

import { getPools } from 'redux/slices/pools';
import { SearchContext } from 'contexts/SearchContext';
import { useIDOContract } from 'hooks/useContract';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import DashboardFooter from './DashboardFooter';
import Slider from 'theme/overrides/Slider';


// ----------------------------------------------------------------------

export default function Stakepad() {
  const { themeStretch } = useSettings();
  const { hash } = useLocation();

  const dispatch = useDispatch();
  const { account } = useActiveWeb3React();
  const idoContract = useIDOContract();

  const [search, setSearch] = useContext(SearchContext);

  //Pagination part
  const [pageSize, setPageSize] = useState(50);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState(0);
  const [paneTab, setPaneTab] = useState(0);
  const [filter, setFilter] = useState(-1);
  const [sort, setSort] = useState('createdAt');
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = React.useState(30);

  const network = useSelector((state) => state.network.chainId);
  const pools = useSelector((state) => state.pools.pools);
  const totalPage = useSelector((state) => state.pools.totalPage);
  const handlePageChange = (e, value) => {
    setPage(value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //--------------------
  useEffect(() => {
    let unmounted = false;
    (async () => {
      setIsLoading(true);
      await dispatch(getPools(network, page, search, tab, sort, filter, account));
      if (!unmounted)
        setIsLoading(false);
    })();
    return () => unmounted = true;
  }, [account, dispatch, filter, network, page, search, sort, tab]);

  useEffect(() => {
    switch (hash) {
      case '#my-contributions':
        setTab(1);
        break;
      case '#my-alarms':
        setTab(2);
        break;
      case '#my-presales':
        setTab(3);
        break;
      default:
        setTab(0);
    }
  }, [hash]);
  const TabPanes = [
      { index : 0, name : "MGV BSC"},
      { index : 1, name : "MEGA MATIC"},
      { index : 2, name : "MEGA AVAX"},
      { index : 3, name : "MEGA PHANTOM"},
      { index : 4, name : "MEGA ETH"},
  ]
  return (
    <Page title="Megacapital"  style={{backgroundColor:"#171819"}} >
      {/* <Container maxWidth='md'> */}
        {isLoading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} />
        ) : (
            <>
            <Grid paddingLeft={'10%'} paddingRight={'10%'} paddingTop="30px"  >
                <Grid container direction="row" position="relative" display="flex" borderRadius={2}>
                    <Grid item direction="row" height="60px" display="flex"  bgcolor={'#232323'}>
                        {TabPanes.map(pane => (
                        paneTab === pane.index ?
                        <Box component="button" onClick={() => setPaneTab(pane.index)} style={{color:"white", backgroundColor:"#56C5FF", border:"none", borderRadius:4}} padding="10px">{pane.name}</Box> : 
                        <Box component="button" onClick={() => setPaneTab(pane.index)} style={{color:"#56C5FF", backgroundColor:"#232323", border:"none"}} padding="10px">{pane.name}</Box>
                        ))}
                    </Grid>
                    <Box component="button" position="absolute" right="5px" style={{backgroundColor: "#24B6E6", border:"none", height:'58px', color:"white", borderRadius:8, width:"120px" }}> KYC </Box>
                </Grid>
                <ProgressCard></ProgressCard>
                <Grid container direction={"row"} marginTop="30px" spacing={2} >
                    <Grid item md="6"><AddressCard src="my_public/images/email.svg" title="Email" address="Info@megacapital.io"></AddressCard></Grid>
                    <Grid item md="6"><AddressCard src="my_public/images/solana-sol-logo 1.png" title="Solana address" address="1231sdsxssds....124" token={1}></AddressCard></Grid>
                </Grid>
                <Grid marginTop="20px" color="#56C5FF" fontSize="34px">
                    Projects
                </Grid>
                <Grid container direction={"row"} marginTop="30px" spacing={2} >
                    <Grid item md="6"><ProjectCard title="Allocated Projects" amount="23"></ProjectCard></Grid>
                    <Grid item md="6"><ProjectCard title="Total Allocated" amount="$12345"></ProjectCard></Grid>
                </Grid>
                <Grid marginTop="20px" color="#56C5FF" fontSize="34px">
                    My Projects
                </Grid>
                <MyProjectCard angle="down"></MyProjectCard>
                <MyProjectCard angle="up"></MyProjectCard>
                <MyLocationCard></MyLocationCard>
            </Grid>
            </>
        )}
      {/* </Container> */}
    </Page>
  );
}
function VoteCard(props){
    return(
            <Grid container bgcolor={'#272727'} direction="row" sx={{width:"100%"}} padding="5px" marginTop="40px">
                <Grid item container md="7" sm="12" direction="row" >
                    <Box item component="img" src="img/catecoin.webp"></Box>
                    <Box item marginTop='13px' marginLeft="10px"> {props.name}</Box>
                </Grid>
                <Grid item md="1"sm="3" >
                    <Box marginTop='13px'>NFT</Box>
                </Grid>
                <Grid item md="1.5" sm="3">
                    <Button class="btn btn-info text-light mx-2 px-5 mt-2">YES</Button>
                </Grid>
                <Grid item md="1.5" sm="3">
                    <Button class="btn btn-outline-info mx-2 px-5 mt-2">NO</Button>
                </Grid>
                <Grid item md="1" sm="3">
                    <Button><i class="Nft-arrow fa-solid fa-angle-down text-info mx-5 pt-3"></i></Button>
                </Grid>
            </Grid>
    );
}
function ProgressCard(){
    const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
    <Grid container direction="row" marginTop="30px">
        <Grid item container md="3" direction="column" style={{backgroundColor:"#232323", borderRadius:5}}>
            <Grid item  padding="10px"><Box component="img" width="100%" height="100px" position="relative" src="my_public/images/bit.png"></Box></Grid>
            <Grid item  padding="10px" display="flex" position="relative" marginTop="10px">
                <Box fontSize="19px">MEGA</Box>
                <Box position="absolute" padding="5px 10px 5px 10px" borderRadius={0.5} right="12px" style={{backgroundColor:"rgba(255, 255, 255, 0.1)", color:"white"}}>Alpha</Box>
            </Grid>
            <Grid item marginTop="10px"><Box component="button" border="none" borderRadius={1} height="30px" width="100%" style={{backgroundColor:"#56C5FF", color:"white"}}>INFO</Box></Grid>
        </Grid>
        <Grid container item width="73%" marginLeft="2%" paddingLeft="20px" style={{backgroundColor:"#232323", borderRadius:5}}>
            <Grid md="8"> <Box marginTop="20px" component="h3" color="#56C5FF">Progress</Box></Grid>
            <Grid container direction="row">
                <Grid item md="2.4"><MySlideBar current={100} title="Alpha"></MySlideBar></Grid>
                <Grid item md="2.4"><MySlideBar current={100} title="Beta"></MySlideBar></Grid>
                <Grid item md="2.4"><MySlideBar current={100} title="Gamma"></MySlideBar></Grid>
                <Grid item md="2.4"><MySlideBar current={20} title="Epilson"></MySlideBar></Grid>
                <Grid item md="2.4"><MySlideBar current={30} title="Zeta"></MySlideBar></Grid>
            </Grid>
        </Grid>
    </Grid>
    );
}
function MySlideBar(props){
    return(
        <>
        <Box sx={{ width: "97%" }}>
        
        <Box position="relative" display="flex">
            <Box width="100%" height="10px" borderRadius={2} backgroundColor="white"/>
            <Box position="absolute" left="0px" borderRadius={2} height="10px" width={`calc(${props.current}/100*100%)`} backgroundColor="#56C5FF"/>
        </Box>
        </Box>
        <Box position="relative">
            <Box position="absolute" left="1px" color="white">{props.title}</Box>
            <Box position="absolute" right="15px" color="#696974">0 MEGA</Box>
        </Box>
        </>
    );
}
function AddressCard(props){
    return(
        <>
        <Grid container direction="row" bgcolor={"#303030"} padding="20px" borderRadius={1}>
            <Grid item md="2" display="flex" align="center" justifyContent="center">
                {/* <Box component="i" class="e-icon fa-solid fa-envelope text-info"></Box> */}
                <Box backgroundColor="rgba(255, 255, 255, 0.1)" width="100px" height="100px" borderRadius="50%" padding="30px"><Box component="img" src={props.src}></Box></Box>
                {/* src="my_public/images/address-logo.png" */}
            </Grid>
            <Grid item md="8" spacing={3} direction="column" alignItems="left" display="flex" >
                <Grid fontSize="24px" color="white" sm="12">{props.title}</Grid>
                <Grid fontSize="15px" color="white" sm="12">{props.address}
                    {(props.token === 1) ? <Box component="button" backgroundColor="#303030" border="none"><Box component="img" src="my_public/images/copy.png"/></Box> : <Box/>}
                    </Grid>
            </Grid>
            <Grid item container md="2" display="flex" alignItems="center" justifyContent="center">
                <Button class="btn btn-info text-light" style={{
                    backgroundColor: "#56C5FF",
                    fontSize: "18px",
                    color:'#FFFFFF',
                    height:'50%',
                    width : '130px'
                }}>EDIT</Button>
            </Grid>
        </Grid>
        </>
    );
}
function ProjectCard(props){
    return(
        <>
        <Grid bgcolor={"#232323"} padding="20px" borderRadius={1}>
        <Grid fontSize="24px" color="white">{props.title}</Grid>
        <Grid color="#56C5FF" fontSize="34px">{props.amount}</Grid>
        </Grid>
        </>
    );
}
function MyProjectCard(props){
    return(
        <>
        <Grid container direction="row" bgcolor={"#232323"} borderRadius={1} padding="15px" marginTop="20px">
            <Grid item md="1">
                <Box component="img" src="my_public/images/geni-logo.png"></Box>
            </Grid>
            <Grid item md="2" align="left" justifyCenter="flex-start">
                <Grid><Box backgroundColor="rgba(255, 255, 255, 0.1)" display="flex" justifyContent="center" width="50%" color="white">Ended</Box></Grid>
                <Grid color="white">GemUni IDO</Grid>
            </Grid>
            <Grid item md="2" align="left" justifyCenter="flex-start">
                <Grid color="white">Start In</Grid>
                <Grid color="white">17/01/22</Grid>
            </Grid>
            <Grid item md="2" align="left" justifyCenter="flex-start">
                <Grid color="white">End In</Grid>
                <Grid color="white">17/01/22</Grid>
            </Grid>
            <Grid item md="2" align="left" justifyCenter="flex-start">
                <Grid color="white">Allocation</Grid>
                <Grid color="white">300</Grid>
            </Grid>
            <Grid item md="3" align="center" justifyCenter="center">
                {props.angle === "down" ? <i class="Nft-arrow fa-solid fa-angle-down text-info mx-5 pt-4"></i>
                : <i class="Nft-arrow fa-solid fa-angle-up text-info mx-5 pt-4"></i>}
            </Grid>
        </Grid>
        </>
    );
}
function MyLocationCard(){
    return(
        <Grid container direction="row" bgcolor="#232323" width="100%" marginTop="30px" borderRadius={1}>
            <Grid container padding='15px'>
                <Grid item sm="12" md="6" display="flex" justifyContent={'flex-start'}><Box component="h5" fontFamily={'system-ui'} color="#56C5FF">
                    Your Location</Box></Grid>
                <Grid item sm="12" md="6" display="flex" justifyContent={'flex-end'}><Box component="button" backgroundColor="#56C5FF" color="white" borderRadius={0.5} border="none" fontFamily={'system-ui'} padding="5px">Add token to metamask</Box></Grid>
            </Grid>
            <Grid container direction="row" bgcolor="rgba(86, 197, 255, 0.1)" height="40px" paddingTop="5px">
                <Grid md="0.5" display="flex" justifyContent="center" color="white">No.</Grid>
                <Grid md="1.5" display="flex" justifyContent="center" color="white">Allocations</Grid>
                <Grid md="1.5" display="flex" justifyContent="center" color="white">Percentage</Grid>
                <Grid md="3" display="flex" justifyContent="center" color="white">Date</Grid>
                <Grid md="3" display="flex" justifyContent="center" color="white">Listing Date</Grid>
                <Grid md="1.5" display="flex" justifyContent="center" color="white">Claimed</Grid>
                <Grid md="1" display="flex" justifyContent="center" color="white">Action</Grid>
            </Grid>
            <AllocationList number={1}/>
            <AllocationList number={2}/>
        </Grid>
    );
}
function AllocationList(props){
    return(
        <Grid container marginTop='10px' direction="row" height="40px"  fontSize="19px">
            <Grid md="0.5" display="flex" justifyContent="center" color="white">{props.number}</Grid>
            <Grid md="1.5" display="flex" justifyContent="center" color="white">4000 GOLD</Grid>
            <Grid md="1.5" display="flex" justifyContent="center" color="white">10.00%</Grid>
            <Grid md="3" display="flex" justifyContent="center" color="white">22/02/2022 to 22/10/2022</Grid>
            <Grid md="3" display="flex" justifyContent="center" color="white">22/02/2022</Grid>
            <Grid md="1.5" display="flex" justifyContent="center" color="white">0.0000</Grid>
            <Grid md="1" display="flex" justifyContent="center" bgColor="#303030" width="100%" color="#56C5FF">
                <Box  display="flex" justifyContent="center" backgroundColor="rgba(255, 255, 255, 0.1)" width="70px" height="30px">Claim</Box>
            </Grid>
        </Grid>
    );
}