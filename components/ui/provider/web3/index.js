import { ethers } from "ethers";
import { createContext, useContext, useState, useEffect } from "react";

const Web3Context = createContext();

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3api] = useState({
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const ethereum = window.ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      setWeb3api({
        ethereum,
        provider,
        contract: null,
        isLoading: false,
      });
    };
    loadProvider();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
