const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  console.log("Deploying Token A...");
  const TokenA = await hre.ethers.getContractFactory("SimpleToken");
  const tokenA = await TokenA.deploy("Token A", "TKNA");
  await tokenA.waitForDeployment();
  console.log("Token A deployed to:", await tokenA.getAddress());

  console.log("Deploying Token B...");
  const TokenB = await hre.ethers.getContractFactory("SimpleToken");
  const tokenB = await TokenB.deploy("Token B", "TKNB");
  await tokenB.waitForDeployment();
  console.log("Token B deployed to:", await tokenB.getAddress());

  const fs = require("fs");
  const deploymentInfo = {
    tokenA: await tokenA.getAddress(),
    tokenB: await tokenB.getAddress(),
    deployer: deployer.address,
  };
  
  fs.writeFileSync("deployment.json", JSON.stringify(deploymentInfo, null, 2));
  console.log("\n✅ Deployment complete!");
}

main().catch(console.error);