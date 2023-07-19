import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { useNavigate } from 'react-router';
import StakePadCard from 'components/StakePadCard'
import ViewAllPools from 'components/ViewAllPools'
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
  const [filter, setFilter] = useState(-1);
  const [sort, setSort] = useState('createdAt');
  const [isLoading, setIsLoading] = useState(true);

  const network = useSelector((state) => state.network.chainId);
  const pools = useSelector((state) => state.pools.pools);
  const totalPage = useSelector((state) => state.pools.totalPage);
  const handlePageChange = (e, value) => {
    setPage(value);
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
  function changeScrollPos(curPos){
    window.scrollBy(curPos, 0);
  }
  return (
    <Page title="Megacapital" style={{backgroundColor:"#171819"}}>
      {/* <Container maxWidth='md'> */}
          <Grid >
        {isLoading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} />
        ) : (
          <>
          <Grid paddingLeft={'10%'} paddingRight={'10%'} paddingTop="30px">
            <Grid align="center" justifyContent="center">
              <Box component="a" href="#"><Button class="btn btn-light text-info mx-1">Stakepad</Button></Box>
              <button class="btn btn-dark text-info mx-1" onClick={() => window.scrollTo({ left: 0,top: 580, behavior: "smooth", })}>Staking Pools</button>
              <button class="btn btn-dark text-info mx-1" onClick={() => window.scrollTo({ left: 0,top: 1480, behavior: "smooth", })}>Farming Pools</button>
            </Grid>
            <Grid  align="center" justifyContent="center" marginTop="30px">
              <Box component="p" fontSize="34px" style={{color:"white"}}>
                Earn high yield by staking mega capital token or join other<br/>attractive staking pools from IDO projects
              </Box>
            </Grid>
            <Grid marginTop="50px">
              <Grid container position="relative" display="flex" marginBottom="60px">
                <Box fontSize="34px" sx={{position:'absolute', left:'10px', color:"#56C5FF"}}>Stakepad</Box>
                <Box fontSize="24px" sx={{position:'absolute', right:'10px'}}><ViewAllPools to="#" title="View All Pools"/></Box>
              </Grid>
              <StakePadCard></StakePadCard>
              <StakePadCard></StakePadCard>
              <StakePadCard></StakePadCard>
            </Grid>
            <StakingPool></StakingPool>
            <FarmingPools></FarmingPools>
          </Grid>
            
          </>
        )}
      {/* </Container> */}
        </Grid>
    </Page>
  );
}
function StakingPool(){
  return(
    <>
    <Grid marginTop="50px">
      <Grid container position="relative" marginBottom="60px">
        <Box fontSize="34px" sx={{position:'absolute', left:'10px', color:"#56C5FF"}}>Staking Pools</Box>
        <Box fontSize="24px" sx={{position:'absolute', right:'10px', color:'white'}}><ViewAllPools to="#" title="View All Pools"/></Box>
      </Grid>
      <PoolBox></PoolBox>
      <PoolBox></PoolBox>
      <PoolBox></PoolBox>
      <Grid container borderRadius={1} bgcolor={'#232323'} marginTop="20px" marginLeft="0px" columnSpacing={4} rowSpacing={2} width="100%">
        <Grid sm="6" item color="#56C5FF">your BUSD balance : 244.64</Grid>
        <Grid sm="6" item color="#56C5FF">your staked : 6,000</Grid>
        <Grid container item sm="6" display="flex" position="relative" height="60px">
          <Box component="input" padding="5px" width="100%" height="50px" placeholder='0.0' style={{backgroundColor:"rgba(255, 255, 255, 0.1)", border:"none", borderRadius:5}}></Box>
          <Box component="button" position="absolute" right="7px" top="20px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
        </Grid>
        <Grid container item sm="6" display="flex" position="relative" height="60px">
          <Box component="input" padding="5px" width="99%" height="50px" placeholder='0.0' style={{backgroundColor:"rgba(255, 255, 255, 0.1)", border:"none", borderRadius:5}}></Box>
          <Box component="button" position="absolute" right="17px" top="20px" style={{backgroundColor:"#56C5FF", height:"70%", border:"none", borderRadius:6}} color="white" paddingLeft="20px" paddingRight="20px">MAX</Box>
        </Grid>
        <Grid container item direction="row" marginTop="10px">
          <Button class="btn btn-info mx-1 px-4 text-light">STAKE</Button>
          <Button class="btn btn-outline-secondary mx-1 px-4 text-info">UNSTAKE</Button>
        </Grid>
        <Grid item>
          <Button class="btn btn-outline-secondary mx-1 px-4 mt-2 text-light" width="100px">HARVEST 43.66 MGV</Button>
          <Box marginTop="8px">Harvesting will reset the lock time</Box>
        </Grid>
        <Grid container item direction="row" marginTop="10px">
          <Grid item sm='2' ><Box color="white">DEPOSIT FEE</Box></Grid>
          <Grid item color="#56C5FF" sm='1' justifyContent="right" display="flex">None</Grid>
        </Grid>
        <Grid container item direction="row" marginTop="10px">
          <Grid sm='2'><Box color="white">WITHDRAW FEE</Box></Grid>
          <Grid sm='1' color="#56C5FF" justifyContent="right" display="flex"><Box>None</Box></Grid>
        </Grid>
        <Grid container item direction="row" marginTop="10px">
          <Grid sm='2'><Box color="white">PERFORMANCE FEE TIME</Box></Grid>
          <Grid color="#56C5FF" sm='1' justifyContent="right" display="flex"><Box>None</Box></Grid>
        </Grid>
        <Grid container item direction="row" marginTop="10px">
          <Grid sm='2'><Box color="white">LOCK TIME</Box></Grid>
          <Grid color="#56C5FF" sm='1' justifyContent="right" display="flex"><Box>30 Days</Box></Grid>
        </Grid>
        <Grid item color="#56C5FF" marginBottom="25px" marginTop="10px">Buy Token</Grid>
      </Grid>
    </Grid>
    </>
  );
}
function PoolBox() {
  const navigate = useNavigate();
  return (
    <Box borderRadius={1} sx={{ bgcolor: '#272727', p: '10px', marginBottom: '15px' }}>
      <Grid container spacing={2}>
        <Grid item sm={7}>
          <Box sx={{ display: 'flex', flexDirection: 'row', }}>
            <Box component="img" src="my_public/images/pool-logo.png" sx={{ width: '50px', marginRight: '10px' }} />
            <Box fontSize="20px" sx={{ marginTop: '10px', color:'white' }}>Megacapital</Box>
          </Box>
        </Grid>
        <Grid item sm={1.2} sx={{ marginRight: '10px' }}>
          <Box sx={{ fontSize: 15, color:'white' }}>Duration</Box>
          <Box sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          1 Month
          </Box>
        </Grid>
        <Grid item sm={1.2} sx={{ marginRight: '10px' }}>
          <Box sx={{ fontSize: 15, color:'white' }}>Staked</Box>
          <Box sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            6,000
          </Box>
        </Grid>
        <Grid item sm={1.2} sx={{ marginRight: '10px' }}>
          <Box sx={{ fontSize: 15, color:'white' }}>bonus</Box>
          <Box sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          20%
          </Box>
        </Grid>
        <Grid item sm={1} sx={{ marginRight: '10px' }}>
          <button class="btn btn-info text-light mt-2 mx-4">Discover</button>
        </Grid>
      </Grid>
    </Box>
  );
}
function FarmingPools(){
  return(
    <Grid marginTop="50px">
      <Grid container position="relative" marginBottom="30px">
        <Box component="h4" class="text-info" sx={{position:'absolute', left:'10px'}}>Farming Pools</Box>
        <Box component="h4" sx={{position:'absolute', right:'10px'}}><ViewAllPools to="#" title="View All Pools"/></Box>
      </Grid>
      <StakePadCard></StakePadCard>
      <StakePadCard></StakePadCard>
      <StakePadCard></StakePadCard>
    </Grid>
  );
}