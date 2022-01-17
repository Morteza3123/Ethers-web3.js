//import web3 module
var Web3 = require('web3');

//set provider ( in this case provider is ganache rpc)
var web3 = new Web3('HTTP://127.0.0.1:7545');

//extract connected accounts
var accounts;
accounts =web3.eth.getAccounts()



//define address of deployed contract
var contractAddress = '0xa680E96a75acDae3e6e69730Cd02BD69fDe8371d'

//ABI of deployed contract
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


// create contract object by abi and cotract address
var contract = new web3.eth.Contract(abi, contractAddress)

//call data from smart cotract
contract.methods.showNumber().call().then(res=>console.log(res.toString()))

//send data to smart contract from first connected account
contract.methods.setNumber('3').send({from : accounts[0]})