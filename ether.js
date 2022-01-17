const { ethers, Wallet } = require('ethers')
const { zeroPad } = require('ethers/lib/utils')

//url of provider (in this case ganache)
var url = 'HTTP://127.0.0.1:7545'

//create provider with RPC url
const provider = new ethers.providers.JsonRpcProvider(url)

//or create a provider with wallet
// const provider2 = new ethers.providers.Web3Provider(window.ethereum)

//set signer of provider
const signer = provider.getSigner()

signer.getAddress().then(res => console.log(res.toString()))
//show BlockNumber of provider
provider.getBlockNumber().then((res)=> console.log('Block Number is :',res))

//get balance of a account (it should be convert to ether from wei)
provider.getBalance('0xCE8333BC33e6D2Ce189A2638466Ef7D88899aB18').then((res)=> console.log('Your equivally is :',ethers.utils.formatEther(res)))



// set contract address and abi for using it in new contract
var contractAddress = '0xa680E96a75acDae3e6e69730Cd02BD69fDe8371d'

var abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "showNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

//create a contract with contracatAddress and abi
var contract = new ethers.Contract(contractAddress, abi, provider)

//create a cotract that can writes a signer
var sigCotract = contract.connect(signer)

//how call data from smart contract
contract.showNumber().then(res => console.log('Your Number is :',(res.toString())))

//how whrite data on smart contract
sigCotract.setNumber('2')

//create a new wallet
var wallet = Wallet.createRandom()

console.log(wallet.mnemonic)