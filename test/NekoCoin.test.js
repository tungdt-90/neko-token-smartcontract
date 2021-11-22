const Neko = artifacts.require("NekoCoin");

contract("NekoCoin", (account) => {
    before( async () => {
       nekoCoin = await Neko.deployed();
    });

    it("give owner 1M tokens", async () => {
      let balance = await nekoCoin.balanceOf(account[0]);
      balance = web3.utils.fromWei(balance, 'ether');
      assert.equal(balance, '1000000', 'Balance should be 1M')
    })

    it("can transfer 1K tokens", async () => {
        let amount = web3.utils.toWei('1000', 'ether');
        await nekoCoin.transfer(account[1], amount, {from: account[0]})
        let balance = await nekoCoin.balanceOf(account[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, '1000', 'Balance should be 1K')
    })
})
