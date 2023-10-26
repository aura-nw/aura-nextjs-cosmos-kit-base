import { useChain } from '@cosmos-kit/react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import C98 from 'images/c98.png';
import Keplr from 'images/keplr.png';
import Leap from 'images/leap.png';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Button, Modal } from '@mui/material';
// import { CustomModal } from '.';
import { Context } from '@/src/context';
import { WalletModalProps, ChainWalletBase } from '@cosmos-kit/core';

export const ConnectWalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  setOpen,
  walletRepo,
}) => {
  const { address, disconnect } = useChain('aura');
  const [errorMsg, setErrorMsg] = useState('');
  const { updateWalletAddress } = useContext(Context);

  const handleConnect = async (wallet: ChainWalletBase) => {
    console.log('wallet', wallet);
    const r = await wallet.connect();
    try {
      if (wallet.address) {
        updateWalletAddress(wallet.address);
        setOpen(false);
      } else {
        setErrorMsg('Link wallet failed');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('Link wallet failed');
    }
  };
  return (
    <Modal
      open={isOpen as boolean}
      onClose={() => setOpen(false)}
      className="flex justify-center bg-white/50 items-center"
    >
      <div
        className={`bg-white rounded-lg flex w-[500px] flex-col p-5 gap-[10px] transition-all duration-300 overflow-hidden justify-start ${
          !address
            ? 'h-[300px] md:w-[380px]'
            : `h-[300px] min-[430px]:h-[320px] md:h-[348px] ${
                errorMsg ? 'h-[312px] min-[430px]:h-[332px] md:h-[360px]' : ''
              }`
        }`}
      >
        <p className="text-2xl leading-7 font-semibold text-center mb-2">
          Link wallet
        </p>
        <div className="relative">
          <div
            className={`top-0 w-full flex flex-col gap-[10px] transition-all duration-300 absolute ${
              !address ? 'opacity-100 z-10 ' : 'opacity-0 -z-10'
            }`}
          >
            {/* {walletRepo?.wallets.map((wallet: ChainWalletBase, index: number) =>
              wallet.walletName.includes('keplr') ? (
                <div
                  key={index}
                  className={`flex items-center justify-between bg-[#F1F2F4] text-subtle-dark p-[10px] rounded-xl ${
                    isMobile || (!isMobile && !window.keplr)
                      ? 'cursor-not-allowed opacity-60 pointer-events-none'
                      : 'cursor-pointer'
                  }`}
                  onClick={() => handleConnect(wallet)}
                >
                  <span className="text-2xl leading-10 font-medium">Keplr</span>
                  <Image src={Keplr} alt="" />
                </div>
              ) : (
                <div
                  key={index}
                  className={`flex items-center justify-between bg-[#F1F2F4] text-subtle-dark p-[10px] rounded-xl ${
                    !isMobile && !window.coin98?.keplr
                      ? 'cursor-not-allowed opacity-60 pointer-events-none'
                      : 'cursor-pointer'
                  }`}
                  onClick={() => handleConnect(wallet)}
                >
                  <span className="text-2xl leading-10 font-medium">C98</span>
                  <Image src={C98} alt="" />
                </div>
              ),
            )} */}
            {walletRepo?.wallets.map((wallet: ChainWalletBase, index: number) =>
              wallet.walletName.includes('keplr') ? (
                <div
                  key={index}
                  className={`flex items-center justify-between bg-[#F1F2F4] text-subtle-dark p-[10px] rounded-xl ${
                    isMobile || !window.keplr
                      ? 'cursor-not-allowed opacity-60 pointer-events-none'
                      : 'cursor-pointer'
                  }`}
                  onClick={() => handleConnect(wallet)}
                >
                  <span className="text-2xl leading-10 font-medium">Keplr</span>
                  <Image src={Keplr} alt="" />
                </div>
              ) : wallet.walletName.includes('coin98') ? (
                <div
                  key={index}
                  className={`flex items-center justify-between bg-[#F1F2F4] text-subtle-dark p-[10px] rounded-xl ${
                    !isMobile && !window.coin98
                      ? 'cursor-not-allowed opacity-60 pointer-events-none'
                      : 'cursor-pointer'
                  }`}
                  onClick={() => handleConnect(wallet)}
                >
                  <span className="text-2xl leading-10 font-medium">C98</span>
                  <Image src={C98} alt="" />
                </div>
              ) : wallet.walletName.includes('leap') ? (
                <div
                  key={index}
                  className={`flex items-center justify-between bg-[#F1F2F4] text-subtle-dark p-[10px] rounded-xl ${
                    !isMobile && !window.leap
                      ? 'cursor-not-allowed opacity-60 pointer-events-none'
                      : 'cursor-pointer'
                  }`}
                  onClick={() => handleConnect(wallet)}
                >
                  <span className="text-2xl leading-10 font-medium">Leap</span>
                  <Image src={Leap} alt="" />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
