require('babel-register');
require('babel-polyfill');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
  },

  contracts_directory: './contracts',
  contracts_build_directory: './abis',

  mocha: {},

  compilers: {
    solc: {
      settings: { 
       optimizer: {
         enabled: true,
         runs: 200
       },
      }
    },
  },
};
