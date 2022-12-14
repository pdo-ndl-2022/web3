export const abi = [
{
    "inputs": [
        {
            "internalType": "address",
            "name": "_who",
            "type": "address"
        },
        {
            "internalType": "string",
            "name": "_codeName",
            "type": "string"
        }
    ],
    "name": "addMember",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint32",
            "name": "_key",
            "type": "uint32"
        },
        {
            "internalType": "string",
            "name": "_teamName",
            "type": "string"
        }
    ],
    "name": "claimKey",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint32",
            "name": "_key",
            "type": "uint32"
        },
        {
            "internalType": "int8",
            "name": "_value",
            "type": "int8"
        }
    ],
    "name": "createKey",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "string",
            "name": "_msg",
            "type": "string"
        }
    ],
    "name": "sendMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "string",
            "name": "_codeName",
            "type": "string"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "members",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "messageCount",
    "outputs": [
        {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "messages",
    "outputs": [
        {
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "internalType": "string",
            "name": "message",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}
]
