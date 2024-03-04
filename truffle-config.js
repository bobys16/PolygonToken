const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "your private key"; // Alternatively, you can use your private key

module.exports = {
  networks: {
    polygon_testnet: {
      provider: () => new HDWalletProvider({
        // Or you can use privateKey instead of mnemonic
        privateKey: privateKey,
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
