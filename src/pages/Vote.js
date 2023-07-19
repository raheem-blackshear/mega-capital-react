import { useState, useContext, useEffect } from 'react';
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


// ----------------------------------------------------------------------

export default function Vote() {
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

  return (
    <Page title="Megacapital" style={{backgroundColor:'#171819'}}>
      {/* <Container maxWidth='md'> */}
        {isLoading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} />
        ) : (
            <>
            <Grid paddingLeft={'10%'} paddingRight={'10%'} paddingTop="30px">
                <Grid  align="center" justifyContent="center">
                <Box component="h2" class="text-info">VOTE</Box>
                <Box component="h5"  color="white">
                Vote for the next project you'd like to see on mega capital<br/>Launchpads
                </Box>
                </Grid>
                <VoteCard name="Hassan Coin"></VoteCard>
                <VoteCard name="sheraz coin"></VoteCard>
                <VoteCard name="Mega Capital Coin"></VoteCard>
                <VoteCard name="Mega coin 1"></VoteCard>
                <VoteCard name="Clinton Randolph"></VoteCard>
                <AboutCard></AboutCard>
            </Grid>
            </>
        )}
      {/* </Container> */}
    </Page>
  );
}
function VoteCard(props){
    return(
            <Grid borderRadius={1} container bgcolor={'#232323'} direction="row" sx={{width:"100%"}} padding="20px 5px 20px 5px" marginTop="40px">
                <Grid item container md="5" sm="12" direction="row" >
                    <Box item component="img" src="my_public/images/logo.png"></Box>
                    <Box item fontSize="20px" marginTop='13px' marginLeft="10px"  color="white"> {props.name}</Box>
                </Grid>
                <Grid item md="3"sm="3" >
                    <Box marginTop='13px' alignItems="center" justifyContent="center" display="flex" fontSize="16px" borderRadius={1} style={{backgroundColor:"rgba(255, 255, 255, 0.1)", width:"100px", height:'40px', color:"#56C5FF"}}>NFT</Box>
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
function AboutCard(){
    return(
    <Grid container bgcolor={'#272727'} sx={{width:"100%"}} padding="20px"marginTop="20px">
        <Box component="h2" class="text-info">About</Box>
        <Box marginTop="30px" component="p"  color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue volutpat in et, dui, iaculis. Commodo morbi posuere et porta. Velit aliquet imperdiet fringilla faucibus tincidunt quam facilisi. Risus, posuere lacus, vel aliquet ultrices sagittis, ultrices aenean rutrum. Scelerisque elementum porta enim egestas ac tempus eu. Lorem arcu vitae, id risus, faucibus duis sed. Sed egestas quis erat amet orci eu porttitor congue. Eu a at velit feugiat faucibus vitae enim. Cras massa sapien rhoncus natoque nec.Dolor habitant nisl vulputate morbi in ut ultrices dolor. Facilisis elementum est sed interdum amet in aenean sed. Enim porta proin donec sociis consectetur.</Box>
        <Grid container direction="row" marginBottom="20px">
            <Box component="button" href="/" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}><Box component="img" src="my_public/images/twitter_avatar.png"/></Box>
            <Box component="button" marginLeft="10px" href="/" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px"}}><Box component="img" src="my_public/images/Discord.png"/></Box>
            <Box component="button" marginLeft="10px" href="/" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px"}}><Box component="img" src="my_public/images/plane_avatar.png"/></Box>
            <Box component="button" marginLeft="10px" href="/" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px 10px 10px 10px"}}> <Grid container direction="row"><Box component="img" marginTop="7px" width="26px" height="14px" src="my_public/images/homelink.png"/><Box marginLeft="5px" color="white">www.megacapital.com</Box></Grid></Box>
            <Box component="button" marginLeft="10px" href="/" style={{height:"44px", border:"none", borderRadius:4, backgroundColor:"rgba(255, 255, 255, 0.1)", padding:"10px", color:"white"}}><i class="fa-regular fa-file text-info mx-2"></i>Pitch Dock</Box>
        </Grid>
        <Box component="img" width="100%" height="300px" src="my_public/images/projects (2).png"/>
    </Grid>
    );
}