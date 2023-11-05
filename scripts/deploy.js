const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  const contract = await hre.ethers.deployContract("Drive");
    await contract.waitForDeployment();
  console.log(
    `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${contract.target}`
);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
