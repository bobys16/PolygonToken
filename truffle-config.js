const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "31f36f1fbef5c77042ceecf16b7d275f842d632e5ecfc543ec539a57e9969230"; 
module.exports = {
  networks: {
    polygon_testnet: {
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl: `https://rpc-mumbai.maticvigil.com`
      }),
      network_id: 80001,
      gas: 8000000,
      gasPrice: 1000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
};
