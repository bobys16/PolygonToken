const solvine = artifacts.require("solvine");

module.exports = function(deployer) {
  deployer.deploy(solvine, 10000000, 30000000);
};
