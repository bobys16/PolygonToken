const SolvineT = artifacts.require("SolvineT");

module.exports = function(deployer) {
  const initialSupply = "20000000000000000000000000"; // Adjusted initial supply with decimal factor (18 decimal places)
  const maxSupply = "1520000000000000000000000000000"; // Adjusted max supply with decimal factor (18 decimal places)

  deployer.deploy(SolvineT, initialSupply, maxSupply);
};
