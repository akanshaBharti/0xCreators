const hre = require("hardhat");

async function main() {
    const deployedContract = await hre.ethers.deployContract("Drive");
    await deployedContract.waitForDeployment();
    console.log(
        `Drive contract deployed to https://explorer.public.zkevm-test.net/address/${deployedContract.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

