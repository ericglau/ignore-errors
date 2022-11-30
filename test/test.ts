import assert from "assert";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("MyContract", function () {
  it("Test SafeContract", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContract");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test SafeContractWithFreeFunctionCall", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContractWithFreeFunctionCall");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test SafeContractWithLibraryCall", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContractWithLibraryCall");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test SafeContractWithLibraryImport", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContractWithLibraryImport");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test SafeContractWithLibraryUsingFor", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContractWithLibraryUsingFor");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test SafeContractWithParentCall", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContractWithParentCall");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test SafeContractWithTransitiveLibraryCall", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContractWithTransitiveLibraryCall");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test UnsafeContract", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContract");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });

  it("Test UnsafeContractWithFreeFunctionCall", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithFreeFunctionCall");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });

  it("Test UnsafeContractWithLibraryCall", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithLibraryCall");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });

  it("Test UnsafeContractWithLibraryUsingFor", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithLibraryUsingFor");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });

  it("Test UnsafeContractWithParentCall", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithParentCall");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });

  it("Test UnsafeContractWithTransitiveLibraryCall", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithTransitiveLibraryCall");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });

  it("Test UnsafeContractWithInheritedParent", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithInheritedParent");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });

  it("Test UnsafeContractWithInheritedTransitiveParent", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithInheritedTransitiveParent");

    await expect(upgrades.deployProxy(ContractFactory)).to.be.rejectedWith('Use of delegatecall is not allowed');
  });
});
