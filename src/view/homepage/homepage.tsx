import { Button, InputBase, Theme, styled } from '@mui/material';
import DesignTag from 'components/Status/Status';

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  backgroundColor: '#EF6236 !important',
  fontFamily: 'Inter ',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '17.5px',
  padding: '10px 18px 10px 18px',
  borderRadius: '6px',
  border: 'none',
  ':hover': {
    backgroundColor: '#EF6236 50%',
  },
}));
export const HomePage = () => {
  return (
    <div
      className="pt-[60px]"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      <video
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://nft.aurascan.io/name-service/bg_name.mp4"
          type="video/mp4"
        />
      </video>
      <div
        style={{ width: '100%', height: '100%' }}
        className="flex items-center flex-col relative z-[1]"
      >
        <div className="text-white">
          <span
            style={{ fontFamily: 'Product Sans' }}
            className="text-[42px] font-bold flex items-center leading-[63px]"
          >
            Base Connect
            <img
              className="mx-[15px]"
              src="/icons/wallet-icon.svg"
              style={{ width: '44px', height: '44px' }}
            />
            Wallet
          </span>
        </div>
        <div className="gap-8 flex flex-col">
          <span className="text-[#A3A3A3]">
            No more unmemorable and meaningless long addresses{' '}
          </span>
          <div
            className="flex w-full items-center px-3 bg-white h-[36px] rounded-lg"
            style={{
              border: '1px solid #9AAEBE',
            }}
          >
            <img
              src="/icons/search-icon.svg"
              alt="menu icon"
              width="24px"
              height="24px"
            />
            <InputBase
              className="py-0 w-full"
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Blog"
            />
          </div>
          <div className="flex justify-between text-white">
            <div className="flex items-center gap-5">
              <span>Name.domaind</span>
              <DesignTag isAvailable={true} />
            </div>
            <span>300 AURA</span>
          </div>
          <StyledButton>Buy Now</StyledButton>
        </div>
      </div>
    </div>
  );
};
