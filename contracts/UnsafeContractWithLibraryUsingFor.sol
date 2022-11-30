// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./RiskyLibrary.sol";

contract UnsafeContractWithLibraryUsingFor is Initializable {
    using RiskyLibrary for address;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function unsafe(address target, bytes memory data) public {
        target.internalDegateCall(data);
    }
}
