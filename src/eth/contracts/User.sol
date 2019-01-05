//pragma solidity ^0.4.23;
pragma solidity ^0.5.0;

contract User {

    address owner;
    address factory;
    uint count = 0;

    struct UserData {
      bytes32 firstName;
      bytes32 lastName;
      bytes32 email;
      bytes32 birthDate;
    }

    UserData userData;

    // Meine Vertreter
    address[] delegates;

    // User von denen ich Vertreter bin
    address[] trustees;

    constructor(address _owner) public {
        owner = _owner;
        factory = msg.sender;
    }

    modifier isOwner(address _caller) {
        require(msg.sender == factory);
        require(_caller == owner);
        _;
    }

    function setUserData(
      address caller,
      bytes32 firstName,
      bytes32 lastName,
      bytes32 email,
      bytes32 birthDate
    ) public isOwner(caller) {
      userData.firstName = firstName;
      userData.lastName  = lastName;
      userData.email     = email;
      userData.birthDate = birthDate;
    }

    function getUserData() view public returns(bytes32, bytes32, bytes32, bytes32) {
        return (
          userData.firstName,
          userData.lastName,
          userData.email,
          userData.birthDate
        );
    }

}
