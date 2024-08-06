const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
    let Counter;
    let counter;

    beforeEach(async function () {
        // 获取合约工厂并部署合约
        Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
    });

    it("Should return the initial count of 0", async function () {
        expect(await counter.get()).to.equal(0);
    });

    it("Should increment the count", async function () {
        await counter.inc();
        expect(await counter.get()).to.equal(1);
    });

    it("Should decrement the count", async function () {
        await counter.inc(); // 先增加1
        await counter.dec();
        expect(await counter.get()).to.equal(0);
    });

    it("Should fail when decrementing the count below 0", async function () {
        await expect(counter.dec()).to.be.reverted;
    });
});
