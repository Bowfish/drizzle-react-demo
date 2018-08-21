/*
UserFactory.deployed().then(function(instance){u=instance})
u.createUser({from: '0xa35c6eb16d0061feb92b1e4979e94e2f99630d6a'});
*/
pragma solidity ^0.4.23;

import './User.sol';

contract UserFactory {

    mapping(address => address) public users;

    function createUser() public {
        if (users[msg.sender] == 0) {
            users[msg.sender] = new User(msg.sender);
        }
    }

    function setUserData(
      bytes32 firstName,
      bytes32 lastName,
      bytes32 email,
      bytes32 birthDate
    ) public {
      require (users[msg.sender] != 0);
      User(users[msg.sender]).setUserData(
        msg.sender,
        firstName,
        lastName,
        email,
        birthDate
      );
    }

    function getUserData(address account) public constant returns (
      bytes32,
      bytes32,
      bytes32,
      bytes32
    ) {
      if (users[account] != 0) {
        return (
          User(users[account]).getUserData()
        );
      }
    }

}
