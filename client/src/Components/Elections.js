import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap"
import Web3 from 'web3'
import Electionabi from '../contracts/Election.json'
import ElectionBody from '../Components/ElectionBody'


function Elections(props) {

    useEffect(() => {
        loadWeb3();
        LoadBlockchainData();
    }, [])
  
    const[currentAccount, setCurrentAccount] = useState("");
    const[loader, setLoader] = useState(true);
    const[electionSmartContract, setElectionSmartContract] = useState();
    const[Candidate1, setCandidate1] = useState();
    const[Candidate2, setCandidate2] = useState();
  
    const loadWeb3 = async () => {
        
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }
        else{
            window.alert("Non Ethereum browser detected, consider trying MetaMask!")
        }
    }
  
    const LoadBlockchainData = async () =>{
        setLoader(true)
        const web3 = window.web3;
  
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
  
        setCurrentAccount(account);
        
        const networkId = await web3.eth.net.getId();
        
        // when the network id will get the 5777 from Ganache - we wil lbe connected
        const networkData = Electionabi.networks[networkId];
  
        if(networkData) {
          const election = new web3.eth.Contract(Electionabi.abi, networkData.address);
            
          const candidate1 = await election.methods.candidates(1).call();
          const candidate1Id = candidate1.id;
          const candidate1Name = candidate1.name;
          const candidate1Count = candidate1.voteCount;
  
          const candidate2 = await election.methods.candidates(2).call();
          const candidate2Id = candidate2.id;
          const candidate2Name = candidate2.name;
          const candidate2Count = candidate2.voteCount;
          
          setCandidate1(candidate1);
          setCandidate2(candidate2);
          setElectionSmartContract(election);
  
          console.log(candidate1);
          console.log(candidate2);
          console.log(election);
          
          setLoader(false)
  
        } else {
            window.alert("The smart contract is not deployed to current network")
        }
    }

    const voteCandidate = async(candidateId) => {
        setLoader(true);
        await electionSmartContract
        .methods
        .vote(candidateId)
        .send({from: currentAccount})
        .on('transactionhash', () => {
            console.log('succesfully run');
        });
        setLoader(false);
    }


    if(loader) {
        return (<div>loading...</div>)

    }

    return (
        <div>
            <ElectionBody 
                candidate1={Candidate1} 
                candidate2={Candidate2} 
                account={currentAccount}
                voteCandidate={voteCandidate}/>
        </div>

    )

}

export default Elections;