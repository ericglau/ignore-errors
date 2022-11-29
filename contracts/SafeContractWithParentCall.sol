// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./RiskyParentContract.sol";

contract SafeContractWithParentCall is Initializable, RiskyParentContract {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function safe() public view returns (bool) {
        return isContract(address(this));
    }
}
