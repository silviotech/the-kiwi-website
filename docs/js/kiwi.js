if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
   var eth = new Eth(window.web3.currentProvider);
} else {
   var eth = new Eth(new Eth.HttpProvider("https://mainnet.infura.io/MnFOXCPE2oOhWpOCyEBT"));
   log("warning: no web3 provider found, using infura.io as backup provider")
}

var contract_address = "0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D";
var token = eth.contract(tokenABI).at(contract_address);

var contractInfo = []; // stores current contract metrics

eth.coinbase().then((result) => {
   // display connected account
   el_safe('#coinbaseAccount').innerHTML = result.substr(0, 30) + '...';

   //display Kiwi account owned by connected account
   token.balanceOf(result).then((balance) => {
       el_safe('#kiwiCount').innerHTML = (balance.balance / 100000000).toLocaleString() + ' KIWI';
   });

  }).catch((error) => {});

token.getChallengeNumber().then((challengeNumber) => {
  el_safe('#blockchain-loader').innerHTML = "";
  el_safe('#challengeNumber').innerHTML = challengeNumber[0].substr(0,14) + '...';
}).catch((error) => {});

token.tokensMinted().then((minted) => {
    el_safe('#kiwiMinted').innerHTML = (minted[0].toString(10) / 100000000).toLocaleString() + ' ~ ' + (minted[0]/7000000000000000).toLocaleString() + '%';

}).catch((error) => {});


/** FUNCTIONS **/
var el = function(id){ return document.querySelector(id); };
var el_safe = function(id) {
  let e = el(id);
    if (e) {
      return e;
    } else {
      return {};
    }
}
