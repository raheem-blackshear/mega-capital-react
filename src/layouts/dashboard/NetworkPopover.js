import { useRef, useState } from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Link, ListItemIcon, ListItemText, Button, Stack, Typography, Divider } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
import { MIconButton } from '../../components/@material-extend';
import { useDispatch,useSelector } from 'react-redux';
import { setupNetwork } from 'utils/wallet';
import { switchNetwork } from "redux/slices/network";
import useActiveWeb3React from "hooks/useActiveWeb3React";

// ----------------------------------------------------------------------

const CHAINS = [
  {
    value: Number(process.env.REACT_APP_NETWORKS_CHAINED),
    label: 'Networks',
    icon: '/chains/eth.png'
  },
  {
    value: Number(process.env.REACT_APP_BSC_CHAINID),
    label: 'Binance Smart Chain',
    icon: '/chains/bsc.png'
  },
  {
    value: Number(process.env.REACT_APP_ETHEREUM_CHAINID),
    label: 'Ethereum',
    icon: '/chains/eth.png'
  },
  {
    value: Number(process.env.REACT_APP_FTM_CHAINID),
    label: 'FTM',
    icon: '/chains/eth.png'
  },
  {
    value: Number(process.env.REACT_APP_AVAX_CHAINID),
    label: 'AVAX',
    icon: '/chains/eth.png'
  }
];

// ----------------------------------------------------------------------

export default function NetworkPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const network = useSelector((state) => state.network.chainId);
  const dispatch = useDispatch();
  const { chainId } = useActiveWeb3React();  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = async (id) => {

    console.log(id);
    setOpen(false);
    
    const result=await setupNetwork(id);
    if(result===-1)
      dispatch(switchNetwork(id));

    
  };

  return (
    <>
    <Box component="select"
        marginRight="10px"
        variant="outlined"
        ref={anchorRef}
        height="50px"
        // onClick={handleOpen}
        // sx={{ color: 'primary.light', borderColor: 'primary.light' }}
        className="p-2 rounded bg-dark btn text-white shadow-0 position-relative"
        id="cars"
      >
        {/* {(process.env.REACT_APP_MODE == 'testnet' ? TEST_CHAINS : CHAINS).find((ele) => ele.value == network)?.label} */}
        <option>Networks</option>
        <option>BSC</option>
        <option>ETH</option>
        <option>FTM</option>
        <option>AVAX</option>
        <option>MATIC</option>
      </Box>
      {/* <Button
        variant="outlined"
        ref={anchorRef}
        onClick={handleOpen}
        // sx={{ color: 'primary.light', borderColor: 'primary.light' }}
        className="p-2 rounded bg-dark btn text-white shadow-0 position-relative"
      >
        {CHAINS.find((ele) => ele.value == network)?.label}
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          {CHAINS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === network}
              onClick={() => handleClose(option.value)}
              sx={{ py: 1, px: 2.5 }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box component="img" alt={option.label} src={option.icon} sx={{ width: 20 }} />
                <Typography variant="body2">{option.label}</Typography>
              </Stack>
            </MenuItem>
          ))} */}
          {/* <Divider />
          {(CHAINS).map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === network}
              onClick={() => handleClose(option.value)}
              sx={{ py: 1, px: 2.5 }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box component="img" alt={option.label} src={option.icon} sx={{ width: 20 }} />
                <Typography variant="body2">{option.label}</Typography>
              </Stack>
            </MenuItem>
          ))}
          <Divider />
          <MenuItem sx={{ py: 1, px: 2.5 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Link
                href={
                  process.env.REACT_APP_MODE == 'testnet'
                    ? process.env.REACT_APP_MAINNET_URL
                    : process.env.REACT_APP_TESTNET_URL
                }
                target="_blank"
                color="primary"
                fontSize={16}
              >
                {process.env.REACT_APP_MODE == 'testnet' ? 'Switch to Mainnet' : 'Switch to Testnet'}
              </Link>
            </Stack>
          </MenuItem>
        </Box>
      </MenuPopover> */}
    </>
  );
}
