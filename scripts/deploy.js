const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log("Library deployed to:", upload.address);

  // Write the contract address to a local file for the frontend to use
  const addressConfig = { address: upload.address };
  const filePath = path.join(__dirname, "../client/src/contractAddress.json");
  fs.writeFileSync(filePath, JSON.stringify(addressConfig, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
