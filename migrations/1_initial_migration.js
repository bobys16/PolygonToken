const Solvine = artifacts.require("Solvine");

module.exports = function(deployer) {
  const initialSupply = 1000000; // Example initial supply
  const maxSupply = 10000000; // Example max supply

  deployer.deploy(Solvine, initialSupply, maxSupply);
};
