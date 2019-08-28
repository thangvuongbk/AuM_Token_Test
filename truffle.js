var PrivateKeyProvider = require("truffle-privatekey-provider");
  var privateKey = "A2B60E9CF6F6CC6ACFEAD0A670C4A8F9A5309403116315DFF1B38A675EA6C2EC";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  

  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gas: 4700000
    },      
    ropsten: {
      provider: function() {
        return new PrivateKeyProvider(privateKey, "https://ropsten.infura.io/v3/c567e6deb0c74854b5b0b83758d3f09a")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
