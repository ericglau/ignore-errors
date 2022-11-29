// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./RiskyLibrary.sol";

contract UnsafeContractWithLibraryCall is Initializable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function unsafe(address target, bytes memory data) public {
        RiskyLibrary.internalDegateCall(target, data);
    }
}
