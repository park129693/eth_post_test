import Web3 from "web3";
import ABI from "./abi.json";

let web3 = {
    http: undefined,
    ws: undefined,    
};

const wsEndpoint = "wss://ropsten.infura.io/ws/v3/c4ec6797bc41447480e6352bef001d68"
const httpEndpoint = "https://ropsten.infura.io/v3/c4ec6797bc41447480e6352bef001d68"