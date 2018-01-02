var Stratum = require('stratum-pool');

var myCoin = {
    "name": "DASH",
    "symbol": "DASH",
    "algorithm": "scrypt",
    "nValue": 1024, //optional - defaults to 1024
    "rValue": 1, //optional - defaults to 1
    "txMessages": false, //optional - defaults to false,
    "getblocktemplate": "POS", //optional - Used for POS coins with the old getblocktemplate parameters
    "reward": "POS", //optional - Used for hybrid POW/POS coins

    /* Magic value only required for setting up p2p block notifications. It is found in the daemon
       source code as the pchMessageStart variable.
       For example, litecoin mainnet magic: http://git.io/Bi8YFw
       And for litecoin testnet magic: http://git.io/NXBYJA */
     "peerMagic": "fbc0b6db" //optional
     "peerMagicTestnet": "fcc1b7dc" //optional
};

var pool = Stratum.createPool({
  "coin": myCoin,

  "address": 'Xu7PWxCzQrQBWKHjBCrM4r469ceY1GiEj4',
  "blockRefreshInterval": 1000,
});
