import { ethers } from "ethers";
import { createContext, useContext, useState, useEffect } from "react";
import { loadContract } from "./utils";

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
      try {
        const ethereum = window.ethereum;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const contract = await loadContract("NftMarket", provider);
        console.log(ethereum);
        console.log(provider);
        setWeb3api({
          ethereum,
          provider,
          contract,
          isLoading: false,
        });
      } catch (err) {
        console.error("Please! Install Metamask");
        setWeb3api((abi) => ({ ...abi, isLoading: false }));
      }
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
