// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./RiskyLibrary.sol";

contract SafeContractWithLibraryCall is Initializable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function safe() public view returns (bool) {
        return RiskyLibrary.isContract(address(this));
    }
}
