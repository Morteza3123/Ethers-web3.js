// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.1;

contract Counter {
    uint number = 1;

    function setNumber(uint _number) public {
        number = _number;
    }
    
    function showNumber() public view returns(uint){
        return number;
    }


}