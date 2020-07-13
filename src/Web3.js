import Web3 from "web3";
import ABI from "./abi.json";

let web3 = {
    http: undefined,
    ws: undefined,
    postsave: undefined,    
};

const wsEndpoint = "wss://ropsten.infura.io/ws/v3/c4ec6797bc41447480e6352bef001d68"
const httpEndpoint = "https://ropsten.infura.io/v3/c4ec6797bc41447480e6352bef001d68"

web3.ws = new Web3(wsEndpoint);

if (window.ethereum) {
    web3.http = new Web3(window.ethereum);
} else {
    web3.http = new Web3(httpEndpoint);
}

web3.postsave = new web3.http.eth.Contract(ABI, "0x357d3fcd57b96f3d930ded90178efb8cef38893e");

export { web3 };
