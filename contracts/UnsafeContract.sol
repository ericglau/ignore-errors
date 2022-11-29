// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract UnsafeContract is Initializable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function externalDegateCall(
        address target,
        bytes memory data
    ) external returns (bytes memory) {
        (, bytes memory returndata) = target.delegatecall(data);
        return returndata;
    }
}
