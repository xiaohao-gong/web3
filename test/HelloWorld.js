const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("HelloWorld", function () {
    it("Should return the correct greeting", async function () {
        // 部署合约
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await HelloWorld.deploy();


        // 调用合约的 greet 方法
        const greeting = await helloWorld.greet();
        console.log("测试结果:", greeting);

        // 验证 greet 方法返回的值
        expect(greeting).to.equal("Hello World!");
    });
});