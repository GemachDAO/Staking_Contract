const MyContract = artifacts.require("./rewards.sol");


module.exports = function(deployer, network, accounts) {

  



     deployer.deploy(MyContract, accounts[0], accounts[1]);



}