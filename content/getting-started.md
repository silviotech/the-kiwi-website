+++
menu = "main"
pagetitle = "How to mine KIWI: A Beginners Guide"
title = "Get Started"
type = ""
weight = 10
+++
<div class="md-modal md-effect-1" id="modal-1">
	<div class="md-content"> 
			<div>
		<iframe style="width: 100%;" width="854" height="480" src="https://www.youtube.com/embed/OzYqiPC7VhE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
					<button style="margin-top:7px" class="md-close btn btn-primary">Close me!</button>
					<div></div>
		</div>
</div>
		
		
		
<button class="md-trigger btn btn-primary btn-lg" data-modal="modal-1">Pool Mining Video</button>

<div class="md-modal md-effect-1" id="modal-1">
	<div class="md-content"> 
	<div>
		<iframe style="width: 100%;" width="854" height="480" src="https://www.youtube.com/embed/n573Fk8MIfY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
					<button style="margin-top:7px" class="md-close btn btn-primary">Close me!</button>
					<div></div>
	</div>
</div>
		
<button class="md-trigger btn btn-primary btn-lg" data-modal="modal-1">Solo Mining Video</button>

Please note that CPU mining is no longer viable. You need to mine with GPU using instructions below.

#### Mining Software
To mine KIWI you need to download and run special software that has been built for the task of mining.
Currently there are 2 miners that can mine KIWI.

1. MVis Token Miner - https://github.com/mining-visualizer/MVis-tokenminer/releases
2. COSMiC - https://bitbucket.org/LieutenantTofu/cosmic-v3/downloads/

**We currently recommend MVis Token Miner and provide details below on how to set up for __solo mining__.**

##### Setting up MVis Token Miner

*These instructions are for CPU mining, it does not make sense to be GPU mining at this stage.*

You need to have the following:

- An ethereum account with some ETH loaded on it.
- Your own infura.io url - signup at http://infura.io/signup
- And the MVis Token Miner - download from link above

*These instructions were written using [MVis-tokenminer 2.1.13](https://github.com/mining-visualizer/MVis-tokenminer/releases/download/v1.1.13/mvis-tokenminer-2.1.13-win64.zip)*

##### Step 1
Download and extract MVis Token Miner software to your computer.

##### Step 2
1. In the extracted folder you will see a folder called _tokenminer_, inside this folder
is a file called __tokenminer.ini__.
2. Open up this file with Notepad and add your information by finding the differnt places in the file. **DO NOT DELETE THE OTHER INFORMATION IN THIS FILE**, just replace where it asks.:
  1. Host=https://mainnet.infura.io/your_api_key
  2. RPCPort=8545
  3. MinerAcct=0x...................
  4. AcctPK=........................
  5. TokenContract=0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d
  6. GasPrice=5

**MinerAcct** is your Ethereum account that should have some ETH. \
**AcctPK** is the private key of your Ethereum account. \
You will need to adjust **GasPrice** as you see fit. Please see the FAQs page for more information.

##### Step 3
Everything is ready to go. Time to get mining!

1. Open up *cmd* window.
2. Browse to where you extracted the miner.
3. Run the following command: `tokenminer.exe -S -G -t 1`

The command above is starting your miner in solo mode, using 1 GPU. You can adjust the number of cards by changing
`-t 1` to the number of cards you want to mine with. `-t 2` for example will use 2 cards and double your hash power used
for mining.

You can try `tokenminer.exe -S -C -t 1` if you would like to try CPU mining, but if the difficulty is above 90 then we recommend
GPU mining.


Good Luck! If you need further help, please ask in the support channel of Discord - https://discord.gg/8fm7Dyk
