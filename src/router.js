import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from 'layouts/main';
import DashboardLayout from 'layouts/dashboard';
import LogoOnlyLayout from 'layouts/LogoOnlyLayout';
// components
import LoadingScreen from 'components/LoadingScreen';
import { useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { ADMIN_ADDRESS } from 'config/constants';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const network = useSelector((state) => state.network.chainId);
  const { account } = useWeb3React();
  return useRoutes([
    // Dashboard Routes
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" replace /> },
        { path: '/presale/:address', element: <DetailPage /> },
        { path: '/home', element: <HomePage /> },
        { path: '/project', element: <ProjectDetail /> },
        { path: '/create', element: <CreatePage /> },
        { path: '/create-lock', element: <CreateLock /> },
        { path: '/idodeals', element: <IdoDeals /> },
        { path: '/vote', element: <Vote /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/vcdeals', element: <VCDeals /> },
        { path: '/stakingpool', element: <StakingPool /> },
        { path: '/helpcenter', element: <HelpCenter /> },
        { path: '/farmingpool', element: <FarmingPool /> },
        { path: '/inodeals', element: <InoDeals /> },
        { path: '/mycalendar', element: <MyCalendar /> },
        { path: '/blog', element: <Blog /> },
        { path: '/lock', element: <LockListPage /> },
        { path: '/token-lock-detail/:token/:owner', element: <TokenLockDetailPage /> },
        { path: '/liquidity-lock-detail/:token/:owner', element: <LiquidityLockDetailPage /> },
        { path: '/presales', element: <Presales /> },
        { path: '/stakepad', element: <Stakepad /> },
        { path: '/staking/:address', element: <StakingCard /> },
        { path: '/admin-presales', element: account == ADMIN_ADDRESS[network] ? <AdminPresales /> : '' }
      
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [{ path: '/', element: <LandingPage /> }]
    // },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
const Presales = Loadable(lazy(() => import('pages/Presales')));
const Stakepad = Loadable(lazy(() => import('pages/Stakepad')));
const StakingCard = Loadable(lazy(() => import('pages/StakingCard')));
const HomePage = Loadable(lazy(() => import('pages/HomePage')));
const IdoDeals = Loadable(lazy(() => import('pages/IdoDeals')));
const InoDeals = Loadable(lazy(() => import('pages/InoDeals')));
const VCDeals = Loadable(lazy(() => import('pages/VCDeals')));
const HelpCenter = Loadable(lazy(() => import('pages/HelpCenter')));
const ProjectDetail = Loadable(lazy(() => import('pages/ProjectDetail')));
const MyCalendar = Loadable(lazy(() => import('pages/MyCalendar')));
const Vote = Loadable(lazy(() => import('pages/Vote')));
const Dashboard = Loadable(lazy(() => import('pages/Dashboard')));
const StakingPool = Loadable(lazy(() => import('pages/StakingPool')));
const FarmingPool = Loadable(lazy(() => import('pages/FarmingPool')));
const Blog = Loadable(lazy(() => import('pages/Blog')));
const DetailPage = Loadable(lazy(() => import('pages/DetailPage')));
const CreatePage = Loadable(lazy(() => import('pages/CreatePage')));
const CreateLock = Loadable(lazy(() => import('pages/CreateLock')));
const LockListPage = Loadable(lazy(() => import('pages/LockListPage')));
const TokenLockDetailPage = Loadable(lazy(() => import('pages/TokenLockDetailPage')));
const LiquidityLockDetailPage = Loadable(lazy(() => import('pages/LiquidityLockDetailPage')));
const PageFour = Loadable(lazy(() => import('pages/PageFour')));
const AdminPresales = Loadable(lazy(() => import('pages/AdminPresales')));
const NotFound = Loadable(lazy(() => import('pages/Page404')));

// Main
const LandingPage = Loadable(lazy(() => import('pages/LandingPage')));
