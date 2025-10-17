// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 public count;

    event CountIncremented(address indexed user, uint256 newCount);
    event CountDecremented(address indexed user, uint256 newCount);

    function increment() public {
        count += 1;
        emit CountIncremented(msg.sender, count);
    }

    function decrement() public {
        require(count > 0, "Counter: already zero");
        count -= 1;
        emit CountDecremented(msg.sender, count);
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}

