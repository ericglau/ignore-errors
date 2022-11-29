// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./TransitiveRiskyLibrary.sol";

contract UnsafeContractWithTransitiveLibraryCall is Initializable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function unsafe(address target, bytes memory data) public {
        TransitiveRiskyLibrary.internalDegateCall(target, data);
    }
}
