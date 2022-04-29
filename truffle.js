const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "YOUR-INFURA-KEY";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  compilers: {
    solc: {
      version: "^0.8.8"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 5500000,
    },
  }
};