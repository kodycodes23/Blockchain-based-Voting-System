const hre = require("hardhat");

async function main() {
  //const currentTimestampInSeconds = Math.round(Date.now() / 1000);

  const Voting = await hre.ethers.getContractFactory("voting");
  //const voting = await voting.deploy(proposalnames, {value: lockedAmount,});
  const voting = await Voting.deploy();

  await voting.deployed();

  console.log("Deployed contract address:", voting.address);

    // // Set a candidate
    // await voting.setCandidate('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', 30, "Samuel", "https://gateway.pinata.cloud/ipfs/QmQoehwPJoedBnZh4QhWQ3NQSrGsnLeCcHY74jnY47TybK", "https://gateway.pinata.cloud/ipfs/QmXP14H2wDKuE2JWvJM8t93Wu8oaAMzAcvSNJjvpSNzAgU");

    // // Get and print candidate addresses
    // const candidates = await voting.getCandidate();
    // //const voters = await voting.getVotersList();
    // console.log("Candidate Addresses:", candidates);
    // //console.log("Voters:",  voters);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//0x8942d18b87070e5a4875122c30A547003BE9a195
