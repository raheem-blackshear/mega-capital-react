import { useEffect } from "react";
import {
  connectorLocalStorageKey,
  ConnectorNames,
} from "redrum-pancake-uikit";
import useAuth from "./useAuth";
import { useSelector, useDispatch } from "react-redux";
import { switchNetwork } from "redux/slices/network";

const _binanceChainListener = async () =>
  new Promise((resolve) =>
    Object.defineProperty(window, "BinanceChain", {
      get() {
        return this.bsc;
      },
      set(bsc) {
        this.bsc = bsc;

        resolve();
      },
    })
  );

const useEagerConnect = () => {
  const network = useSelector((state) => state.network.chainId);
 
  const { login } = useAuth(network);
  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey);
    if (connectorId) {
      if (network ==  Number(process.env.REACT_APP_BSC_CHAINID)) {
        const isConnectorBinanceChain = connectorId === ConnectorNames.BSC;
        const isBinanceChainDefined = Reflect.has(window, "BinanceChain");

        // Currently BSC extension doesn't always inject in time.
        // We must check to see if it exists, and if not, wait for it before proceeding.
        if (isConnectorBinanceChain && !isBinanceChainDefined) {
          _binanceChainListener().then(() => login(connectorId));

          return;
        }
      }

      login(connectorId);
    }
  }, [login]);
};

export default useEagerConnect;
