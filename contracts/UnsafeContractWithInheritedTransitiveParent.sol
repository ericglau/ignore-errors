// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./TransitiveUnsafeParent.sol";

contract UnsafeContractWithInheritedTransitiveParent is Initializable, TransitiveUnsafeParent {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }
}
