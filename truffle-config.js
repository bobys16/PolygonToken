const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    polygon_testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      gas: 8000000,        // Gas limit
      gasPrice: 1000000000,  // Gas price (1 gwei)
      confirmations: 2,    // Number of confirmations to wait before deployment is considered successful
      timeoutBlocks: 200,  // Number of blocks before a deployment times out
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",   // Compiler version
      settings: {          // Compiler settings
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
};
