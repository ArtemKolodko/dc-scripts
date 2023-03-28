const web3 = require("web3");
const runTest = async () => {
    const ethers = require('ethers')
    const BigNumber = ethers.BigNumber
    const utils = ethers.utils

    // Get erc721 tokenId
    const name = 'crypthulhu' // delendum testtesttest14
    const labelHash = utils.keccak256(utils.toUtf8Bytes(name))
    const erc721TokenId = BigNumber.from(labelHash).toString()
    console.log('erc721TokenId', erc721TokenId)

    // Get erc1155 tokenId from erc721 tokenId
    let labelHashReverse = web3.utils.toBN(erc721TokenId).toString('hex', 64)
    labelHashReverse = '0x' + labelHashReverse
    console.log('labelHash', labelHash, labelHash.length)
    console.log('labelHashReverse', labelHashReverse, labelHashReverse.length)
    const tldNode = '0xad4be81514036b9f6ff6c5f69394daacc516c82bd6dc4756d7f6ef1b3f9ea717'
    const encodePacked = web3.utils.encodePacked(
        {value: tldNode, type: 'bytes32'},
            {value: labelHashReverse, type: 'bytes32'},
    );
    const erc1155TokenId = BigNumber.from(utils.keccak256(encodePacked)).toString()

    console.log('erc721TokenId', erc721TokenId) // 14212827259789138176508155550148755607121532689651225418988837524479410071227
    console.log('erc1155TokenId', erc1155TokenId) // 63541040439838539350251294457914022046546728442044028716309593463882779079456
}

runTest()
