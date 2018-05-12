+++
menu = "main"
title = "FAQs"
type = ""
weight = 11
Comments = false
+++

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">

    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Why can't I see KIWI in my address on Etherscan?
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        When you sucessfully mine KIWI, the contract adds you to it's list of KIWI owners. This is held within the contract.
        However, there is no easy way for Etherscan to know that your account has KIWI until you either receive KIWI from
        another address or you send KIWI to another address.
      </div>
    </div>
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          How can I see how many KIWI I have?
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        You can see how many KIWI you have in several different ways:
        <ol>
          <li>By adding the KIWI token to Metamask.</li>
          <li>By calling the contract function <mark>balanceOf</mark> on <a href="https://etherscan.io/address/0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d#readContract">etherscan</a>.
          </li>
          <li>By going to our homepage and looking at the wallet info box with Metamask turned on and the correct
          address chosen</li>
          <li>By visiting <a href="http://thekiwi.info">http://thekiwi.info</a> and looking at the top of the
          page</li>
          <li>If you have either received / sent KIWI from your address then you can visit <a href="http://etherscan.io">Etherscan</a> and see your KIWI
           balance.</li>
        </ol>  
      </div>
    </div>
  </div>
</div>
