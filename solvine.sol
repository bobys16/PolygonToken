// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MemeToken is ERC20, Ownable {
    uint256 private _maxSupply;
    mapping(address => bool) private _whitelist;

    event MaxSupplyChanged(uint256 newMaxSupply);
    event WhitelistUpdated(address indexed account, bool isWhitelisted);

    constructor(uint256 initialSupply, uint256 maxSupply) ERC20("MemeToken", "MEME") {
        require(maxSupply >= initialSupply, "Max supply must be greater than or equal to initial supply");
        _maxSupply = maxSupply;
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= _maxSupply, "Exceeds max supply");
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function updateMaxSupply(uint256 newMaxSupply) external onlyOwner {
        require(newMaxSupply >= totalSupply(), "New max supply must be greater than or equal to total supply");
        _maxSupply = newMaxSupply;
        emit MaxSupplyChanged(newMaxSupply);
    }

    function addToWhitelist(address account) external onlyOwner {
        _whitelist[account] = true;
        emit WhitelistUpdated(account, true);
    }

    function removeFromWhitelist(address account) external onlyOwner {
        _whitelist[account] = false;
        emit WhitelistUpdated(account, false);
    }

    function isWhitelisted(address account) external view returns (bool) {
        return _whitelist[account];
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(_whitelist[msg.sender] || _whitelist[recipient], "Sender or recipient is not whitelisted");
        return super.transfer(recipient, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        require(_whitelist[sender] || _whitelist[recipient], "Sender or recipient is not whitelisted");
        return super.transferFrom(sender, recipient, amount);
    }
}
