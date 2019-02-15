// const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const walletAPIUrl = 'https://kovan.infura.io/'; // Infura URL

// const walletMnemonic =
//   "seed sock milk update focus rotate barely fade car face mechanic mercy"; // Your mnemonic
// const provider = new HDWalletProvider(walletMnemonic, walletAPIUrl);
// export const web3 = new Web3(provider);

export const web3 = new Web3(new Web3.providers.HttpProvider(walletAPIUrl));
