import { ethers } from "ethers";
import { useEffect, useState } from "react";

export const useConnectWallet =  () => {
    const [error, setError] = useState<String | null>(null);
    const [provider, setProvider] = useState<any>(null);
    const [address, setAddress] = useState<String | null>(null);
    const [signer, setSigner] = useState<any>(null);
    useEffect(  () => {
    if(window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then(  () => {
            window.ethereum.request({ method: 'eth_chainId'}).then((chainId : string) => {
                if(chainId !== '0x5') {
                    setError('Please connect to Goerli Testnet');
                    } else {
                        setProvider(new ethers.providers.Web3Provider(window.ethereum));
                        setAddress(window.ethereum.selectedAddress);
                        setSigner(new ethers.providers.Web3Provider(window.ethereum).getSigner());
                    }
            });
        });  
        
    } else {
        setError("Please install MetaMask");
    }
    }, []);
    return [
        provider,
        address,
        signer,
        error,
    ]
  }
  