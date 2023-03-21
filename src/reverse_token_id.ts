// import Web3 from 'web3'
// import {AbiItem} from 'web3-utils'
// import fetch from 'node-fetch'
// import NameWrapperABI from './NameWrapperABI.json'
// import {config} from 'src/config'
//
// const countryPostfix = 'country'
// const {relayerUrl, nameWrapperContractAddress} = config.indexer.oneCountry
//
// const fetchMetadataLink = async (domain: string) => {
//   const response = await fetch(`${relayerUrl}/gen`, {
//     method: 'POST',
//     body: JSON.stringify({
//       domain,
//     }),
//     headers: {'Content-Type': 'application/json'},
//   })
//   const {metadata, error} = await response.json()
//   if (error) {
//     throw Error(error)
//   }
//   return metadata.erc1155Metadata
// }
//
// const fetchMetadataByName = async (domain: string) => {
//   const link = await fetchMetadataLink(domain)
//   const response = await fetch(link)
//   const data = await response.json()
//   return data
// }
//
// const createNameWrapperContract = (contractAddress: string) => {
//   const provider = new Web3.providers.HttpProvider('https://api.harmony.one')
//   const web3 = new Web3(provider)
//   return new web3.eth.Contract(NameWrapperABI as AbiItem[], contractAddress)
// }
//
// const getDomainByTokenId = async (tokenId: string) => {
//   const nameWrapper = createNameWrapperContract(nameWrapperContractAddress)
//   const node = BigInt(tokenId).toString(16)
//   const name = await nameWrapper.methods.names('0x' + node).call()
//   let parsedName = name ? Buffer.from(name.slice(2), 'hex').toString() : ''
//   parsedName = parsedName.replace(/[^a-zA-Z0-9.\- ]/g, '')
//
//   if (parsedName.endsWith(countryPostfix)) {
//     return parsedName.slice(0, parsedName.length - countryPostfix.length)
//   }
//   return parsedName
// }
//
// // export const getOneCountryTokenMetadata = async (tokenId: string) => {
// //   const domain = await getDomainByTokenId(tokenId)
// //   const metadata = await fetchMetadataByName(domain + '.' + countryPostfix)
// //   return metadata
// // }
//
// export const getOneCountryTokenMetadata = async (uri: string) => {
//
//   return metadata
// }
