const { expect } = require("chai");

const toWei = (num) => ethers.utils.parseEther(num.toString());
const fromWei = (num) => ethers.utils.formatEther(num);

describe("NFTMarketplace", function () {

    let NFT;
    let nft;

    let MarketPlace;
    let marketplace;
    let deployer;
    let addr1;
    let addr2;
    let addrs;
    let feePercent = 1;

    let URI = "sample URI";

    beforeEach(async function () {
        NFT = await ethers.getContractFactory("NFT");
        MarketPlace = await ethers.getContractFactory("Marketplace");
        [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();

        nft = await NFT.deploy();
        marketplace = await MarketPlace.deploy(feePercent);
    });

    describe("Deployment", function () {

        it("Should track name and symbol of nft collection", async function () {
            const nftName = "DApp NFT";
            const nftSymbol = "DAPP";

            expect(await nft.name()).to.equal(nftName);
            expect(await nft.symbol()).to.equal(nftSymbol);
        });

        it("Should track feeAccount and feePercent", async function () {
            expect(await marketplace.feeAccount()).to.equal(deployer.address);
            expect(await marketplace.feePercent()).to.equal(feePercent);
        });
    });
})