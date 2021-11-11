require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name recipe stereo purpose harvest glide equal gauge'; 
let testAccounts = [
"0x7e58a6ec72931c05566166cd09437bca03ceb6c4670ed40dd86e07802288a962",
"0x34220fa0f227af0ff25b907dd03b1a783fff17d33f97c1fbf2a3cc82d6c2c5f5",
"0xa9429114b878c18f57981175ccaea7c90791fdd63420fd078469999602cb5ba7",
"0x3bc5dc4e153ecbf77aac46c229bc7997d2f8f422a2290d6efa482db0d6894134",
"0x17595d205770960b56af32298970c4250b67d0e4ac251e474658523412653d4b",
"0x462c7f32f48f889a5eaaf10fe0b9aebde2b69d6cf0ed629d336216543dce41e0",
"0xa1ce427481d828478317cb7ee45e1a6643b7bbe7d87f89455344ca3a4ff5f256",
"0xd340407dc1fec787d08376128903cea3491679d1c56229e56199c0db351a567f",
"0x357d3783b995ac4563384253f4bb505267bd573d66a697307e36f14a8508dc11",
"0xc4d3966bb7ae398fe86e41b412d3166f3b32d1b10aa86b5f75907c12d6b136bf"
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
            version: '^0.8.0'
        }
    }
};

