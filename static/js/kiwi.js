if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
   var eth = new Eth(window.web3.currentProvider);
   console.log("full web3")
} else {
   var eth = new Eth(new Eth.HttpProvider("https://mainnet.infura.io/MnFOXCPE2oOhWpOCyEBT"));
   console.log("warning: no web3 provider found, using infura.io as backup provider")
}

var contract_address = "0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D";
var account = "";
var token = eth.contract(tokenABI).at(contract_address);

var contractInfo = []; // stores current contract metrics

eth.coinbase().then((result) => {
   // display connected account
   el_safe('#coinbaseAccount').innerHTML = result.substr(0, 30) + '...';
   account = result;
   //display Kiwi account owned by connected account
   token.balanceOf(result).then((balance) => {
       el_safe('#kiwiCount').innerHTML = (balance.balance / 100000000).toLocaleString('en-US', { minimumFractionDigits: 8 }) + ' KIWI';
   });

  }).catch((error) => {});

var seconds = 30
updateFromBlockchain(seconds);

$(function() {
  setInterval(function() {

    updateFromBlockchain(seconds);

  },seconds * 1000);
});


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

var interval = seconds;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 30 - --interval;
  if(interval <= 0)
    interval = 30;
},1000);

function updateFromBlockchain(seconds) {

  token.getChallengeNumber().then((challengeNumber) => {
    el_safe('#challengeNumber').innerHTML = challengeNumber[0];
  }).catch((error) => {});

  token.tokensMinted().then((minted) => {
      el_safe('#kiwiMinted').innerHTML = (minted[0].toString(10) / 100000000).toLocaleString() + ' ~ ' + (minted[0]/7000000000000000).toLocaleString() + '%';

  }).catch((error) => {});

  token.getMiningDifficulty().then((difficulty) => {
      el_safe('#difficulty').innerHTML = difficulty[0].toLocaleString();
  }).catch((error) => {});

  token.rewardEra().then((rewardera) => {
    el_safe('#currentRewardEra').innerHTML = rewardera[0].toLocaleString() + ' / 39';
  }).catch((error) => {});

  token.epochCount().then((epochcount) => {
    el_safe('#epochCount').innerHTML = epochcount[0].toLocaleString();
  }).catch((error) => {});

}


/* -- Wallet -- */
$("#send-kiwi-button").on('click',function( event ){
  event.preventDefault();
  amount = $('#transferAmount').val();
  addressto = $('#transferAddress').val();

  startTransfer(amount, addressto, function(error,response){
    console.log(response)
    //$('#messagebar').show();
  }).catch((error) => {

    console.log(error)
    if(error == 'invalid address') {
      $('#transferAddressGroup').addClass('has-error');
      alert('Address is invalid. Please check');
    }

  });

});

async function startTransfer(amount, addressTo, callback) {

  //validate addressTo
  if(Eth.isAddress(addressTo)) {
    amt = amount * Math.pow(10,8);  //convert to base unit (i.e 1 KIWI = 100000000)
    token.transfer(addressTo,amt, {from:account}); //this will trigger metamask for signing
  } else {
    throw "invalid address";
  }

}
