const NekoCoin = artifacts.require("NekoCoin");

module.exports = async function (deployer, network) {
    if (network === 'bscTestnet' || network === 'develop') {
        await deployer.deploy(NekoCoin, 1000000);
    }
};
