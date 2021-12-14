import { useEffect, useState } from 'react';
import Web3 from 'web3';


//import logo from './images/logo.svg';
import logos from './images/meta.png'
import './css/App.css';
import './css/main.css';
import 'font-awesome/css/font-awesome.min.css';
import { MyHeader } from './components/my_header';
import { MyFooter } from './components/my_footer';




function App() {

    
  

const [approve, setApprove] = useState(false);
const [unstake, setUnstake] = useState(false);
//const [account, setAccount] = useState();
const [shortAddress, setShortAddress] = useState();
const [balance, setBalance] = useState();
const [totalStacked, setTotalStacked] = useState();
const [totalClaimed, setTotalClaimed] = useState();
const [rewardPerToken, setRewardPerToken] = useState();
const [earned, setEarned] = useState();


//Connect to Eth Wallet
useEffect(() => {
 async function init() {
      const web3 = new Web3(Web3.givenProvider ||'http://localhost:8545');
   const accounts = await web3.eth.requestAccounts();
//setAccount(accounts[0]); //This shows the full connected Eth Wallet Address

//Get abbrievated address 
var string = accounts[0];
var end= accounts[0].length;
var start = end - 4;
var string1 = string.substring(0,5);
var string2 = string.substring(start, end);
const _address = string1 + '...' + string2;
setShortAddress(_address);

////Connect to Smart Contract
const Rewards = require('./build/contracts/Rewards.json')
//const id = web3.eth.net.getId();
const deployedNetwork = Rewards.networks[5777]; //id = 5777
const contract = new web3.eth.Contract(
    Rewards.abi,
    deployedNetwork.address
);

///Get Balance
const Balance = await contract.methods.balanceOf(accounts[0]).call()
//console.log(Balance);
setBalance(Balance);

///Get Total Stacked
const totalStacked = await contract.methods.totalStaked().call()
//console.log(totalStacked);
setTotalStacked(totalStacked);

///Get Claimed Rewards
const totalClaimed = await contract.methods.totalClaimed().call()
//console.log(totalClaimed);
setTotalClaimed(totalClaimed);

///Get RewardPer Token
const rewardPerToken = await contract.methods.rewardPerToken().call()
//console.log(rewardPerToken);
setRewardPerToken(rewardPerToken);

///Get Total Earned
const earned = await contract.methods.earned(accounts[0]).call()
//console.log(earned);
setEarned(earned);


///Function For Stake 
//const stake = await contract.methods.stake().call()
//Set State Function for staking so that you can call the function from anywhere


/// Function Withdraw
//const withdraw = await contract.methods.withdraw(1).call()
//Set State Function for staking so that you can call the function from anywhere


 } init();
}, []);


//On Clicking Approve Button  
const toApprove = () => {
    setApprove(true);
    setTimeout(() => setApprove(false), 300); 
    // Call stake function

}

//On Clicking Unstake Button 
const toUnstake = () => {
    setUnstake(true);
    setTimeout(() => setUnstake(false), 300);  
     // UseState for unstaking function
}

//On Clicking Withdraw Button 
//const toWithdraw = () => {
     // UseState for withrawing function
//}



  return (
  
    <div className="App">
    <MyHeader/>
      <br/>
        <div id="main">

            <div className="section-header">Account Overview
            <span id='address'>
                {shortAddress}
            </span>
            
            </div>
            <div className='home'>

                <div className='card'>
                    <div className='details'>
                        <label>Total Amount Staked</label>
                        <h3>{totalStacked ? '$ ' + totalClaimed : '$0'}</h3>
                        <span>PATH</span>

                    </div>
                    <div className='details'>
                        <label>Estimated Rewards</label>
                        <h3>{rewardPerToken ? rewardPerToken : '0%'}</h3>
                        <span>APR</span>
                    </div>

                </div>


                <div className='card'>
                    <div className='details'>
                        <label>Your Amount Staked</label>
                        <h3>{balance ? '$ ' + balance : '$0'}</h3>
                        <span>         <button onClick = {toApprove} id = {approve ? `approve` : null}>
                APPROVE
                    </button></span>

                    </div>
                    <div className='details'>
                        <label>Unstake</label>
                        <h3>Token</h3>
                        <span> <button onClick={toUnstake} id = {unstake ? `unstake` : null}>
                        UNSTAKE TOKEN
                            </button></span>
                    </div>
                </div>

                <div className='card'>
                    <div className='details'>
                        <label>Your Claimable Rewards</label>
                        <h3>{earned ? '$' + earned : '$0'}</h3>
                        <span>     <button className="export">
                ADD TO  <img src={logos} style={{height:20, width:20}} alt=''/>
                    </button></span>

                    </div>
                    <div className='details'>
                        <label>Claim</label>
                        <h3>Rewards</h3>
                        <span>     <button className="claim">
                CLAIM TOKEN
                    </button></span>
                    </div>
                </div>

            </div>
        </div>
    <MyFooter/>
</div>


  );


}

export default App;
