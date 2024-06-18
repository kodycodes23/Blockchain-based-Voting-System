import React, { useState, useEffect, Children } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
//import {create as ipfsHttpClient} from 'ipfs-http-client';
import { create } from 'ipfs-http-client'
import axios from 'axios'
import { useRouter } from 'next/router'
//import VotingContract from '../artifacts/contracts/VotingContract.sol/voting.json'
//const votingAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';

import { VotingAddress, VotingAddressABI } from './constants'

const pinataApiKey = '11b5e229c928f30cd344'
const pinataSecretApiKey =
  '7b55447a649b863f88d8f94526c5ea9b94428ef685823204822db5105d676458'

//const client = ipfsHttpClient(`https://ipfs.infura.io:5001/api/v0`);
const client = create({
  apiUrl: 'https://api.pinata.cloud',
  headers: {
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataSecretApiKey
  }
})
const fetchContract = (signerOrProvider) => {
  return new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvider);
}
  //  //console.log('Signer or Provider:', signerOrProvider);
  //  new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvider);



export const VotingContext = React.createContext()

export const VotingProvider = ({ children }) => {
  const VotingTitle = 'My Final Year Project'
  const router = useRouter()
  const [  currentAccount, setCurrentAccount ] = useState('')
  const [candidateLength, setCandidateLength ] = useState('')
  const pushCandidate = []
  const candidateIndex = []
  const [ candidatesArray, setCandidateArray ] = useState(pushCandidate)

  const [ error, setError ] = useState('')
  const highestVote = []
  //-----voter
  const pushVoter = []
  const [voterArray, setVoterArray] = useState(pushVoter)
  const [voterLength, setVoterLength] = useState('')
  const [voterAddress, setVoterAddress] = useState([])


  //---metamask
  const IsWalletConnected = async () => {
    if (!window.ethereum) return setError('Please install Metamask')
    const account = await window.ethereum.request({ method: 'eth_accounts' })

    if (account.length) {
      setCurrentAccount(account[0])
    } else {
      setError('Please install Metamask & connect , Reload')
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) return setError('Please install Metamask')
    const account = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    setCurrentAccount(account[0])
  }

  ///upload to ipfs voter image
  // const uploadToIPFS = async(file) =>{
  //     try{
  //         const added =await client.add({content: file});
  //         const url = `https://ipfs.infura.io/ipfs/${added.path}`;

  //         return url;
  //     }catch (error){
  //         console.log(error);
  //         //setError("Error Uploading file to IPFS");
  //     }
  // };

  const uploadToIPFS = async file => {
    if (file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const resFile = await axios.post(
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          formData,
          {
            headers: {
              pinata_api_key: '11b5e229c928f30cd344',
              pinata_secret_api_key:
                '7b55447a649b863f88d8f94526c5ea9b94428ef685823204822db5105d676458',
              'Content-Type': 'multipart/form-data'
            }
          }
        )

        const url = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`
        return url
      } catch (error) {
        console.log('Error sending File to IPFS: ')
        console.log(error)
      }
    }
  }

  //Upload to IPFS Candidate image
  const uploadToIPFSCandidate = async file => {
    if (file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const resFile = await axios.post(
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          formData,
          {
            headers: {
              pinata_api_key: '11b5e229c928f30cd344',
              pinata_secret_api_key:
                '7b55447a649b863f88d8f94526c5ea9b94428ef685823204822db5105d676458',
              'Content-Type': 'multipart/form-data'
            }
          }
        )

        const url = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`
        return url
      } catch (error) {
        console.log('Error sending File to IPFS: ')
        console.log(error)
      }
    }
  }

  //-------CREATE VOTER
  const createVoter = async (formInput, fileUrl, router) => {
    try {
      const { name, address, position } = formInput

      if (!name || !address || !position)
        //if (!name || !address || !position)
        //return console.log(name, address, position, fileUrl)
        return console.log('Input data is missing')

      //---------CONNECTING SMART CONTRACTS
      const web3Modal = new Web3Modal()
      //console.log(web3Modal)
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = fetchContract(signer)
      //console.log(contract);

      const data = JSON.stringify({ name, address, position, image: fileUrl })
      //const added = await client(data);
      const formData = new FormData()
      formData.append('file', data)

      const resFile = await axios.post(
        'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        formData,
        {
          headers: {
            pinata_api_key: '11b5e229c928f30cd344',
            pinata_secret_api_key:
              '7b55447a649b863f88d8f94526c5ea9b94428ef685823204822db5105d676458',
            'Content-Type': 'application/json'
          }
        }
      )
      const url = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`
      console.log(url)
      console.log(fileUrl)

      const voter = await contract.voterRight(address, name, url, fileUrl)
      voter.wait()
      console.log(voter)
      //router.push('/voterList')


    } catch (error) {
      //setError('Error in creating voter')
      //console.log('Error in creating voter')
      //console.log('Something wrong creating voter')
      console.log(error)
    }
  }

  //////----GET VOTER-----////
  const getAllVoterData = async () => {
    try {
     //---------CONNECTING SMART CONTRACTS
     const web3Modal = new Web3Modal()
     //console.log(web3Modal)
     const connection = await web3Modal.connect()
     const provider = new ethers.providers.Web3Provider(connection)
     const signer = provider.getSigner()
     const contract = fetchContract(signer)
     //console.log(contract);

      // Fetch voter list data from the smart contract
      const voterListData = await contract.getVotersList()

      //Update state with voter list data
      setVoterAddress(voterListData)
      console.log(voterAddress)
      console.log(voterListData);
      voterListData.map(async el => {
      const singleVoterData = await contract.getVoterdata(el)
      pushVoter.push(singleVoterData)
      //console.log(singleVoterData);
      })

      ///VOTER LENGTH
      const voterList = await contract.getVoterLength()
      setVoterLength(voterList.toNumber())
    } catch (error) {
      // Handle error
      console.error('Error fetching voter data:', error)
      // Optionally, display a user-friendly message to indicate the error
    }
  }

  // Call the function to fetch voter data


  useEffect(() => {
    getAllVoterData()
  }, [])

  /////-----GIVE VOTE
  const giveVote = async(id) => {
    try {
      const voterAdress = id.address;
      const voterId = id.id
      const web3Modal = new Web3Modal()
      //console.log(web3Modal)
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = fetchContract(signer)


      const voteredList = await contract.vote(voterAdress, voterId);
      console.log(voteredList);

    } catch (error) {
      console.log(error);

    }
  }



  //////-------CANDIDATE SECTION-------///////
  const setCandidate = async (candidateform, fileUrl, router) => {
    try {
      const { name, address, age } = candidateform

      if (!name || !address || !age)
        //if (!name || !address || !position)
        //return console.log(name, address, position, fileUrl)
        return console.log('Input data is missing');

        console.log(name, address, age, fileUrl);

      //---------CONNECTING SMART CONTRACTS
      const web3Modal = new Web3Modal()
      //console.log(web3Modal)
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = fetchContract(signer)
      //console.log(contract);

      const data = JSON.stringify({ name, address, image: fileUrl, age })
      //const added = await client(data);
      const formData = new FormData()
      formData.append('file', data)

      const resFile = await axios.post(
        'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        formData,
        {
          headers: {
            pinata_api_key: '11b5e229c928f30cd344',
            pinata_secret_api_key:
              '7b55447a649b863f88d8f94526c5ea9b94428ef685823204822db5105d676458',
            'Content-Type': 'application/json'
          }
        }
      )
      const ipfs = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`
      //console.log(url)
      //console.log(fileUrl)

      const candidate = await contract.setCandidate(address, age, name, fileUrl, ipfs)
      candidate.wait()
      console.log(candidate)
      console.log(ipfs);
      //router.push('/voterList')

      useEffect(() => {
        getAllVoterData();
      }, []);
    } catch (error) {
      //setError('Error in creating voter')
      //console.log('Error in creating voter')
      //console.log('Something wrong creating voter')
      console.log(error)
    }
  }

  ///////-----GET CANDIDATE DATA-----/////
  const getNewCandidate = async() => {
    try {
       //---------CONNECTING SMART CONTRACTS
       const web3Modal = new Web3Modal();
       //console.log(web3Modal)
       const connection = await web3Modal.connect();
       const provider = new ethers.providers.Web3Provider(connection);
       const signer = provider.getSigner();
       const contract = fetchContract(signer);


       /////---ALL CANDIDATE
       const allCandidate = await contract.getCandidate();
       //console.log(allCandidate);
       allCandidate.map(async(el)=> {
        const singleCandidateData = await contract.getCandidateData(el);
        pushCandidate.push(singleCandidateData);
        candidateIndex.push(singleCandidateData[2].toNumber());

        //console.log(singleCandidateData);
       });
       //console.log(singleCandidateData)


       /////---GET CANDIDATE LENGTH
       const allCandidateLength = await contract.getCandidateLength();
       setCandidateLength(allCandidateLength.toNumber());

      //  console.log(allCandidateLength);


    } catch (error) {
      console.log(error);

    }
  }

  // const getNewCandidate = async () => {
  //   if (typeof window.ethereum !== 'undefined') {
  //       try {
  //           await window.ethereum.request({ method: 'eth_requestAccounts' });
  //           const provider = new ethers.providers.Web3Provider(window.ethereum);
  //           const signer = provider.getSigner();
  //           const contract = new ethers.Contract(votingAddress, VotingContract.abi, signer);

  //           const candidateAddresses = await contract.getCandidate();
  //           setCandidateArray(candidateAddresses);
  //       } catch (err) {
  //           console.error("Error fetching candidates: ", err);
  //           setError(err.message);
  //       }
  //   }
  // };



  useEffect(() => {
    getNewCandidate();
      }, []);

    console.log(candidatesArray)






  return (
    <VotingContext.Provider
      value={{
        VotingTitle,
        IsWalletConnected,
        connectWallet,
        uploadToIPFS,
        createVoter,
        getAllVoterData,
        giveVote,
        setCandidate,
        getNewCandidate,
        error,
        voterArray,
        voterLength,
        voterAddress,
        currentAccount,
        candidateLength,
        candidatesArray,
        uploadToIPFSCandidate,
      }}
    >
      {children}
    </VotingContext.Provider>
  )
}

const Voter = () => {
  return <div>index</div>
}

// export default Voter;
