// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./TransitiveRiskyLibrary.sol";

contract SafeContractWithTransitiveLibraryCall is Initializable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function safe() public view returns (bool) {
        return TransitiveRiskyLibrary.isContract(address(this));
    }
}
