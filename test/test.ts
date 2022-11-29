import assert from "assert";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("MyContract", function () {
  it("Test SafeContract", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContract");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();
  });

  it("Test SafeContractWithLibraryCall", async function () {
    const ContractFactory = await ethers.getContractFactory("SafeContractWithLibraryCall");

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

  it("Test UnsafeContractWithLibraryCall", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithLibraryCall");

    try {
      await upgrades.deployProxy(ContractFactory);
    } catch (e: any) {
      expect(e.message).to.include('Use of delegatecall is not allowed');
    }
  });

  it("Test UnsafeContractWithParentCall", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithParentCall");

    try {
      await upgrades.deployProxy(ContractFactory);
    } catch (e: any) {
      expect(e.message).to.include('Use of delegatecall is not allowed');
    }
  });

  it("Test UnsafeContractWithTransitiveLibraryCall", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithTransitiveLibraryCall");

    try {
      await upgrades.deployProxy(ContractFactory);
    } catch (e: any) {
      expect(e.message).to.include('Use of delegatecall is not allowed');
    }
  });

  it("Test UnsafeContractWithInheritedParent", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithInheritedParent");

    try {
      await upgrades.deployProxy(ContractFactory);
    } catch (e: any) {
      expect(e.message).to.include('Use of delegatecall is not allowed');
    }
  });

  it("Test UnsafeContractWithInheritedTransitiveParent", async function () {
    const ContractFactory = await ethers.getContractFactory("UnsafeContractWithInheritedTransitiveParent");

    try {
      await upgrades.deployProxy(ContractFactory);
    } catch (e: any) {
      expect(e.message).to.include('Use of delegatecall is not allowed');
    }
  });
});
