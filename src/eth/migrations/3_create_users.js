const UserFactory = artifacts.require("UserFactory.sol");
const User        = artifacts.require("User.sol");

console.log(web3.eth.accounts);
const accounts = web3.eth.accounts;

module.exports = function(deployer) {
  var userFactoryContract;
  var userContract;

  UserFactory.deployed()
  .then(function(instance) {
    userFactoryContract = instance;
    return User.deployed();
  })
  .then(function(instance) {
    userContract = instance;
    console.log('Creating User contract for: ' + accounts[0])
    return userFactoryContract.createUser({from: accounts[0]})
  }).then(function(success) {
    return userFactoryContract.setUserData("Damian", 'Hischier', '1234.123.123.123', '20.05.1970', {from: accounts[0]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[1])
    return userFactoryContract.createUser({from: accounts[1]})
  }).then(function(success) {
    return userFactoryContract.setUserData("Sandy", 'Rauch', '1234.123.123.123', '08.12.1978', {from: accounts[1]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[2])
    return userFactoryContract.createUser({from: accounts[2]})
  }).then(function(success) {
    return userFactoryContract.setUserData("Sanna", 'Rauch', '1234.123.123.123', '12.02.2009', {from: accounts[2]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[3])
    return userFactoryContract.createUser({from: accounts[3]})
  }).then(function(success) {
    return userFactoryContract.setUserData("Beat", 'Lüthi', '1234.123.123.123', '12.03.1963', {from: accounts[3]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[4])
    return userFactoryContract.createUser({from: accounts[4]})
  }).then(function(success) {
    return userFactoryContract.setUserData("Rene", 'Hischier', '1234.123.123.123', '14.03.1938', {from: accounts[4]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[5])
    return userFactoryContract.createUser({from: accounts[5]})
  }).then(function(success) {
    return userFactoryContract.setUserData("Marie-Antaoniette", 'Hischier', '1234.123.123.123', '01.11.1945', {from: accounts[5]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[6])
    return userFactoryContract.createUser({from: accounts[6]})
  }).then(function(success) {
    return userFactoryContract.setUserData("User 6", 'user 6', '1234.123.123.123', '01.11.1945', {from: accounts[6]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[7])
    return userFactoryContract.createUser({from: accounts[7]})
  }).then(function(success) {
    return userFactoryContract.setUserData("User 7", 'user 7', '1234.123.123.123', '01.11.1945', {from: accounts[7]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[8])
    return userFactoryContract.createUser({from: accounts[8]})
  }).then(function(success) {
    return userFactoryContract.setUserData("User 8", 'user 8', '1234.123.123.123', '01.11.1945', {from: accounts[8]})
  }).then(function(success) {
    console.log('Creating User contract for: ' + accounts[9])
    return userFactoryContract.createUser({from: accounts[9]})
  }).then(function(success) {
    return userFactoryContract.setUserData("User 9", 'user 9', '1234.123.123.123', '01.11.1945', {from: accounts[9]})
  });
}
