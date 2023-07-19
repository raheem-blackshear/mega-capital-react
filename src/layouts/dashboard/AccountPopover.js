import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink } from 'react-router-dom';
import { useWalletModal } from 'redrum-pancake-uikit';
import { useWeb3React } from '@web3-react/core';
import useAuth from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';
// material
import { alpha } from '@mui/material/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography } from '@mui/material';
// components
import { MIconButton } from 'components/@material-extend';
import MenuPopover from 'components/MenuPopover';
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'Home', icon: homeFill, linkTo: '/' },
  { label: 'Profile', icon: personFill, linkTo: '#' },
  { label: 'Settings', icon: settings2Fill, linkTo: '#' }
];

// ----------------------------------------------------------------------
const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, 
    options: {
      appName: "Web 3 Modal Demo",
      infuraId: process.env.INFURA_KEY 
    }
  },
  walletconnect: {
    package: WalletConnect, 
    options: {
      infuraId: process.env.INFURA_KEY 
    }
  }
 };
export default function AccountPopover() {
  const { account } = useWeb3React();
  const network = useSelector((state) => state.network.chainId);
  const auth = useAuth(network);
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const web3Modal = new Web3Modal({
    providerOptions // required
  });
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    auth.login,
    auth.logout,
    (t)=>t,
    account,
    Number(network)
  );
  return (
    <>
      {account ? (
        <Button variant="contained" onClick={onPresentAccountModal} sx={{ bgcolor: 'primary.light' }}>
          {account.substr(0, 4) + '...' + account.substr(account.length - 4, 4)}
        </Button>
      ) : (
        <Box><button className="btn btn-info text-light mx-1 position-relative" onClick={onPresentConnectModal} >
          Connect Wallet
        </button></Box>
      )}

      {/* <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            displayName
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            email
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>
      </MenuPopover> */}
    </>
  );
}
