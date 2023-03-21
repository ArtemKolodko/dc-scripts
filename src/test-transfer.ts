// import Web3 from 'web3'
// import {ethers} from "ethers";
// import BaseRegistarAbi from './abi/baseRegistarAbi.json'
// import NameWrapperAbi from './abi/nameWrapperAbi.json'
// import DcAbi from './abi/dcAbi.json'
// import {AbiItem, hexToBytes, keccak256} from "web3-utils";
//
// require('dotenv').config()
//
// const privateKey = process.env.PRIVATE_KEY || ''
// const addressTo = process.env.ADDRESS_TO || ''
// const tokenId = process.env.TOKEN_ID || ''
//
// const runTest = async () => {
//   const provider = new Web3.providers.HttpProvider('https://api.harmony.one')
//   const web3 = new Web3(provider)
//
//   const dcContract = new web3.eth.Contract(
//     DcAbi as AbiItem[],
//     '0xeFC73fB07660464aA03A5790D011DA0512c5854f'
//   );
//
//   const nameWrapperContract = new web3.eth.Contract(
//     NameWrapperAbi as AbiItem[],
//     '0x69e756d56762fc66ade2ea8da4ced4f888d0cf8a'
//   );
//
//   const baseRegistarContract = new web3.eth.Contract(
//     BaseRegistarAbi as AbiItem[],
//     '0x91cA002f8217b939a4f24EeCB992e07dCDecA32c'
//   );
//
//   if(!privateKey) {
//     console.error('Create .env file with owner private key. Check .env.example.')
//     process.exit(1)
//   }
//
//   const account = web3.eth.accounts.privateKeyToAccount(privateKey);
//   web3.eth.accounts.wallet.add(account);
//   const { address: accountAddress } = account
//
//   console.log('Address from: ', accountAddress)
//   console.log('Address to: ', addressTo)
//   console.log('tokenId: ', tokenId)
//
//   const baseRegistarTransfer = async (from: string, to: string, domainName: string) => {
//     const callObj = { from: accountAddress }
//
//     const nameHash = keccak256(domainName)
//     const tokenId = hexToBytes(nameHash)
//
//     const gasPrice = await web3.eth.getGasPrice();
//     const gasEstimate = await baseRegistarContract.methods
//       .safeTransferFrom(from, to, tokenId)
//       .estimateGas(callObj);
//
//     console.log('gasEstimate', gasEstimate)
//
//     const tx = await baseRegistarContract.methods
//       .safeTransferFrom(from, to, tokenId)
//       .send({ ...callObj, gasPrice: gasPrice, gas: gasEstimate })
//     return tx
//   }
//
//   const safeTransferFromRegistar = async (from: string, to: string, tokenId: string) => {
//     const callObj = { from: accountAddress }
//
//     const gasPrice = await web3.eth.getGasPrice();
//     const gasEstimate = await baseRegistarContract.methods
//       .safeTransferFrom(from, to, tokenId)
//       .estimateGas(callObj);
//
//     console.log('gasEstimate', gasEstimate)
//
//     const tx = await baseRegistarContract.methods
//       .safeTransferFrom(from, to, tokenId)
//       .send({ ...callObj, gasPrice: gasPrice, gas: gasEstimate })
//     return tx
//   }
//
//   const safeTransferFrom = async (from: string, to: string, tokenId: string) => {
//     const callObj = { from: accountAddress }
//
//     const bytes = web3.utils.hexToBytes('0x')
//
//     const gasPrice = await web3.eth.getGasPrice();
//     const gasEstimate = await nameWrapperContract.methods
//       .safeTransferFrom(from, to, tokenId, 1, bytes)
//       .estimateGas(callObj);
//
//     console.log('gasEstimate', gasEstimate)
//
//     const tx = await nameWrapperContract.methods
//       .safeTransferFrom(from, to, tokenId, 1, bytes)
//       .send({ ...callObj, gasPrice: gasPrice, gas: gasEstimate })
//     return tx
//   }
//
//   const getTokenUri = () => {
//     return baseRegistarContract.methods.totalSupply().call()
//   }
//
//   const ownerOf = (tokenId: string) => {
//     return dcContract.methods.ownerOf(tokenId).call()
//   }
//
//   const getEns = () => {
//     return baseRegistarContract.methods.ens().call()
//   }
//
//
//   try {
//     // const hash = keccak256('beijing')
//     // const owner = await baseRegistarContract.methods.ownerOf(hash).call()
//     // console.log('owner', owner)
//     // const txTransfer = await safeTransferFromRegistar(accountAddress, addressTo, tokenId)
//     // console.log('txTransfer hash:', txTransfer.transactionHash)
//     // const txTransfer = await baseRegistarTransfer(accountAddress, addressTo, tokenId)
//     // console.log('txTransfer hash:', txTransfer.transactionHash)
//     // const ownerAddress = await ownerOf('testtesttest110')
//     // console.log('current owner address', ownerAddress)
//     // const ens = await getEns()
//     // console.log('ens', ens)
//
//     // const tokenIDString = '34846181885503021053629076463922845170203885287627569501314158760714537052813'
//     // const node = ethers.BigNumber.from(tokenIDString).toHexString()
//     // console.log('node', node)
//     // const name = await nameWrapperContract.methods.names(node).call()
//     // const domain = Buffer.from(name.slice(2), 'hex').toString()
//     // console.log('name', name, 'domain', domain)
//   } catch (e) {
//     console.log('Error:', e)
//   }
// }
//
// runTest()
