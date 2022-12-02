import { Contract, ethers } from 'ethers';
import { abi } from '../abi/topsecret';

export function getTopSecretContract(
  provider: ethers.providers.Provider
): Contract {
  return new ethers.Contract(
    '0x3210ecB7A8Ea2E6595BE559f215a1Ff98828DfF7',
    abi,
    provider
  );
}
