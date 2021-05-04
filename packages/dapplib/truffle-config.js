require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember protect just private bottom tail'; 
let testAccounts = [
"0xd64720b33f8760f51fe2be340821ae968cd05a8e7f432a5851efd0b12955bc1d",
"0x6a7acc9e9c41fc7f6d17acb5209eb6025a060a18ae495611b051f1ed65b3ebb1",
"0x4cafbd35b7dcd5f60667f8a8d798a5c6860d29dd5ba7afdca41b30903f4c0179",
"0xe5caec4bdbab6cda7e88362e1da2337e09dc2cc30c2df03417796b4d64cd124a",
"0xcbafae0447619212936d9f1cd68412633666886e243c133e6e58d16e45c26d5a",
"0x5d046cc9f0b5176f3d256216bf3e896db8142494bba21dad1ffd155a3851afe2",
"0xf63e6ae6423acf75a6746bbc131e29116ec4b350d7cdc1ca51acea1b10a036fd",
"0xf0e377ab25b54c1d363056e04ab3895e1c9b163705ec0120a59d785e292e2bea",
"0x0e4563dcd2ff7e72f16360644288470bb792e39750d4f0810a895ab7ac72f815",
"0x6a96f4895aa841c13d574ea721036dc8cf720a460404dd0235f077190680f107"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
