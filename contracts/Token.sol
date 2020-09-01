pragma solidity ^0.5.0;


contract Token {
    string public name = "botany";
    string public symbol = "BOT";  
    uint256 public decimals = 18;
    uint256 public totalSupply;

    //Track Balance
    //Send Tokens

    constructor() public {
        totalSupply = 1000000 * (10 ** decimals);
    }
}