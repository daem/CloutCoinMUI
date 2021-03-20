const { assert, expect } = require("chai");

describe("Contract", function () {
    let contract;
    let sender;
    let reciever;
    let checker;

    const deposit = ethers.utils.parseEther("1");

    beforeEach(async () => {
        sender = ethers.provider.getSigner(0);
        reciever = ethers.provider.getSigner(1);
        checker = ethers.provider.getSigner(2);
        const Escrow = await ethers.getContractFactory("Escrow");

        contract = await Escrow.deploy(
            checker.getAddress(),
            reciever.getAddress(),
            {
                value: deposit,
            }
        );

        await contract.deployed();
    });

    it("should be funded initially", async function () {
        let balance = await ethers.provider.getBalance(contract.address);
        assert.equal(balance.toString(), deposit.toString());
        console.log(ethers.utils.formatEther(balance));
    });
});

// describe("Contract", function () {
//     it("Should return the new greeting once it's changed", async function () {
//         const [owner] = await ethers.getSigners();
//         const Escrow = await ethers.getContractFactory("Escrow");
//         const escrow = await Escrow.deploy("Hello, world!");
//         await greeter.deployed();

//         assert.equal(
//             await greeter.greet(),
//             "Hello, world!",
//             "should be the same"
//         );

//         await greeter.setGreeting("Hola, mundo!");

//         assert.equal(
//             await greeter.greet(),
//             "Hola, mundo!",
//             "should be the same"
//         );

//         assert.equal(
//             await greeter.getOwner(),
//             owner.address,
//             "this is not the owner"
//         );
//     });
// });
