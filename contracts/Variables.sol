pragma solidity ^0.8.24;

contract Variables {
    string public text = "Hello";
    uint256 public num = 123;

    function doSomething() public {
        uint256 i = 456;
  

        uint256 timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller

    }
}