module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,           // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },   
  },
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        optimizer: {
         enabled: true,
         runs: 200
       },
    }
  },
};