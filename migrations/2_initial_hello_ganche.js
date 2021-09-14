const hello = artifacts.require("hello_ganche");

module.exports = function(deployer) {
    deployer.deploy(hello);
};