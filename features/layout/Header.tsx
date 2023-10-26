import { useMounted } from '@/hooks';
import {
  Box,
  Button,
  MenuItem,
  Menu,
  Divider,
  Avatar,
  styled,
} from '@mui/material';
import { useContext, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { Context } from '@/src/context';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Notifications } from '@mui/icons-material';
import Wallet from 'images/wallet-icon.svg';
import Copy from 'images/copy-icon.svg';
import Image from 'next/image';
import { CopyText } from './common/CopyText';
import { formatAddress } from '@/utils/contract';

const WalletButton = styled(Button)(({ theme }) => ({
  color: '#EF6236',
  border: '1px solid #FAFAFA',
  padding: '10px 18px',
  borderRadius: '6px',
  ':hover': {
    opacity: 0.75,
    borderColor: '#FAFAFA',
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const { walletAddress, updateWalletAddress } = useContext(Context);
  const { connect, disconnect } = useChain('aura');
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }
  const handleDisconnect = () => {
    updateWalletAddress('');
    if (disconnect) {
      disconnect();
    } else {
      console.log('Disconnect function not available');
      // Handle the scenario when disconnect is not available
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'black',
        padding: '32px 40px',
      }}
    >
      <Box alignItems="center">
        <Box sx={{ width: 112, cursor: 'pointer' }}>
        <span className='text-[80px] text-white font-bold'>LOGO </span>
          {/* <img
            src="/imgs/main-logo.png"
            style={{ width: '120px', height: '30px' }}
            alt="logo"
          /> */}
        </Box>
      </Box>

      <div style={{ gap: '20px' }} className="flex items-center">
        <Notifications sx={{ fontSize: 24, color: 'white' }} />
        {walletAddress ? (
          <WalletButton variant="outlined" onClick={handleOpenMenu}>
            <div style={{ gap: '8px' }} className="flex items-center">
              <span>{formatAddress(walletAddress)}</span>
              <CopyText text={walletAddress}>
                <Image src={Copy} alt="" />
              </CopyText>
            </div>
          </WalletButton>
        ) : (
          <WalletButton variant="outlined" onClick={() => connect()}>
            <div style={{ gap: '8px' }} className="flex items-center">
              <Image src={Wallet} alt="" />
              <span>Connect wallet</span>
            </div>
          </WalletButton>
        )}

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleCloseMenu}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleDisconnect}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Disconnect
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
