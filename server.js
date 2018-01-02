var Stratum = require('stratum-pool');

var pool = Stratum.createPool({
  "coin": Dash,

  "address": 'Xu7PWxCzQrQBWKHjBCrM4r469ceY1GiEj4',
  "blockRefreshInterval": 1000,
});
