require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks: {
    qtestnet: {
      chainId: 35443,
      url: "https://rpc.qtestnet.org",
      accounts: ["e43d4bd78b54835dd75544c692c81e6e56ef447e2d0a89c1b543fd7c95d8c730"],
      //accounts: ["0x34324b30b2Fc8895D79b05A0791c6f4A357e9088"],

    },
    // hardhat: {
    //   //chainId: 31337,
    //   chainId: 35443,
    //  // chainId: 1337,
    // },
  },
};
