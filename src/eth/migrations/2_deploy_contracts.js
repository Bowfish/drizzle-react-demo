var UserFactory    = artifacts.require("UserFactory.sol");
var User           = artifacts.require("User.sol");

module.exports = function(deployer, network, accounts) {
	deployer.then(async () => {
		deployer.deploy(UserFactory);
		deployer.deploy(User, "0x0");
	})
};
