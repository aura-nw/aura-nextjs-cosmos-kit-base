import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface ContextProps {
  walletAddress: string;
  updateWalletAddress: (address: string) => void;
}

export const Context = createContext<ContextProps>({
  walletAddress: '',
  updateWalletAddress: () => {},
});

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const storedAddress = localStorage.getItem('walletAddress');
    if (storedAddress) {
      setWalletAddress(storedAddress);
    }
  }, []);

  const updateWalletAddress = (address: string) => {
    setWalletAddress(address);
    localStorage.setItem('walletAddress', address);
  };

  return (
    <Context.Provider value={{ walletAddress, updateWalletAddress }}>
      {children}
    </Context.Provider>
  );
};