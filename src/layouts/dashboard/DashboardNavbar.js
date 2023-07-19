import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Grid, Box, Stack, AppBar, Toolbar, IconButton, Link, Menu, MenuItem, Popover, Button } from '@mui/material';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import { MHidden} from '../../components/@material-extend';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NetworkPopover from './NetworkPopover';
import LanguagePopover from './LanguagePopover';
import * as React from 'react';
import {Modal} from '@mui/material'

// ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;
const DRAWER_WIDTH = 0;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  backgroundColor:"#171819",
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 1),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  backgroundColor:"#171819",
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  },
  borderBottom:"2px solid white"
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const [mopen, setOpen] = React.useState(false);
  const mhandleOpen = () => setOpen(true);
  const mhandleClose = () => setOpen(false);
  const { isCollapse } = useCollapseDrawer();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <RootStyle
      sx={{
        backgroundColor:"#171819",
        paddingLeft: '13%',
        paddingRight: '13%',
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
        }),
      }} 
    >
      
      <ToolbarStyle id="navbarSupportedContent">
        <MHidden width="mdUp" paddingLeft="13%" paddingRight="13%">
          <Grid container sx={{position:'relative'}}>
          <IconButton sx={{ mr: 1, color: 'text.primary' }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={mhandleOpen}>
             <Icon icon={menu2Fill} />
          </IconButton>
          <Box component="a" position="absolute" left="40%" top="-10px" width="80%" href="/home"><Box component="img" src="/logo.png" sx={{ width: '60px' }}></Box></Box>
          <Box sx={{position:'absolute', right:'0px'}}><LanguagePopover /></Box>
          
          <Modal open={mopen} onClose={mhandleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box style={{blurRadius:12, width:"90%", height:"100%"}}> 
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
              <Grid direction="row" container height="100%">
                <Grid item container xs={10} backgroundColor="#000000" height="100%">
                  <Grid item container columnSpacing={1}>
                    <Grid item xs={12} height="130px" justifyContent="center" display="flex" alignItems="center">
                      <Box component="a" href="/home"><Box component="img" src="/logo.png" sx={{ width: '80px' }}></Box></Box>
                    </Grid>
                    <Grid item xs={12} fontSize={17}>
                    <NavMenuItem onClick={handleClose} title="Projects" link="/idodeals" />
                    </Grid>
                    <Grid item xs={12} fontSize={17}>
                    <NavMenuItem onClick={handleClose} title="Stakepad" link="/stakepad" />
                    </Grid>
                    <Grid item xs={12} fontSize={17}>
                    <NavMenuItem onClick={handleClose} title="Vote" link="/vote" />
                    </Grid>
                    <Grid item xs={12} fontSize={17}>
                    <NavMenuItem onClick={handleClose} title="Dashboard" link="/dashboard" />
                    </Grid>
                    <Grid item xs={12} fontSize={17}>
                    <NavMenuItem onClick={handleClose} title="Blog" link="/blog" />
                    </Grid>
                    <Grid item xs={12} marginTop="30px" justifyContent="center" display="flex" >
                      <NetworkPopover />
                    </Grid>
                    <Grid item xs={12} marginTop="30px" justifyContent="center" display="flex" >
                      <AccountPopover onClick={handleClose} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} justifyContent="center" display="flex" height="40px" width="80px">
                  <Box component="button" backgroundColor="rgb(255, 255, 255, 0)" onClick={mhandleClose}><Box component="img" src="my_public/images/closebutton.png"></Box></Box>
                </Grid>
              </Grid>
            </Box>
          </Modal>
          </Grid>
        </MHidden>
        {/* <Searchbar /> */}
        <MHidden width="mdDown">
        <Box component="a" href="/home"><Box component="img" src="/logo.png" sx={{ width: '80px' }}></Box></Box>
        <NavMenuItem onClick={handleClose} title="Deals" link="/idodeals" />
        <NavMenuItem onClick={handleClose} title="Pools" link="/stakepad" />
        <NavMenuItem onClick={handleClose} title="Vote" link="/vote" />
        <NavMenuItem onClick={handleClose} title="Dashboard" link="/dashboard" />
        <NavMenuItem onClick={handleClose} title="Blog" link="/blog" />
        <NavMenuItem onClick={handleClose} title="Help Center" link="/helpcenter" />


        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <Link
            href={
              process.env.REACT_APP_MODE == 'testnet'
                ? process.env.REACT_APP_MAINNET_URL
                : process.env.REACT_APP_TESTNET_URL
            }
            color="primary"
            fontSize={16}
          >
            {process.env.REACT_APP_MODE == 'testnet' ? 'To Mainnet' : 'To Testnet'}
          </Link> */}
          <LanguagePopover />
          <NetworkPopover />
          <AccountPopover />
        </Stack>
        </MHidden>
      </ToolbarStyle>
    </RootStyle>
  );
}

function NavMenuItem(props) {
  return (
    <a class="nav-link mx-1 text-light" href={props.link}>
      {props.title}
    </a>
  );
}
function NavMenuItem1(props) {
  return (
    <a class="nav-link mx-3 text-light" href={props.link}
      style={{
        fontSize: '17px', color: 'white', cursor: 'pointer',
        marginLeft: '30px', textDecoration: 'none'
      }}>
      {props.title}
    </a>
  );
}