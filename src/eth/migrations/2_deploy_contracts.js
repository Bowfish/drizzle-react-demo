var UserFactory    = artifacts.require("UserFactory.sol");
var User           = artifacts.require("User.sol");

module.exports = function(deployer) {
  deployer.deploy(UserFactory);
  deployer.deploy(User, "0x0");
};
