// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract voting {
    using Counters for Counters.Counter;

    Counters.Counter public _voterid;
    Counters.Counter public _candidateid;
    Counters.Counter public _electionid;


    address public votingOrganizer;

    //candidate for voting
    struct Candidate {
        uint256 candidateid;
        uint age;
        string name;
        string image;
        string election;
        uint votecount;
        address _address;
        string ipfs;
    }

    event CandidateCreate(
        uint256 indexed candidateid,
        uint256 age,
        string name,
        string image,
        string election,
        uint256 votecount,
        address _address,
        string ipfs
    );
    struct Election {
        uint256 electionid;
        string name;
        string description;
        string startDate;
        string endDate;
        string election_ipfs;
    }

    event ElectionCreated(
    uint256 indexed electionid,
    string name,
    string description,
    string startDate,
    string endDate,
    string election_ipfs
    );

    address[] public candidateAddress;

    mapping(address => Candidate)public candidates;

    uint256[] public electionIds;

    mapping(uint256 => Election) public elections;

    //------Voter Data



    address[] public votedVoters;
    address[] public votersAddress;


    mapping(address => Voter) public voters;

     struct Voter {
        uint256 voter_voterId;
        string voter_name;
        string voter_image;
        address voter_address;
        uint256 voter_allowed;
        bool voter_voted;
        uint256 voter_vote;
        string voter_ipfs;

    }

    event VoterCreated(
        uint256 indexed voter_voterId,
        string voter_name,
        string voter_image,
        address voter_address,
        uint256 voter_allowed,
        bool voter_voted,
        uint256 voter_vote,
        string voter_ipfs
    );
////----End of voter data ---////s


    constructor (){
        votingOrganizer = msg.sender;
    }

    function setCandidate( address _address, uint256 _age, string memory _name, string memory _image, string memory _election, string memory _ipfs) public {
        console.log("getCandidate function called");
        require (votingOrganizer == msg.sender, "Only organizer can create candidate");
        _candidateid.increment();

        uint256 idNumber = _candidateid.current();
        Candidate storage candidate= candidates[_address];

        candidate.age = _age;
        candidate.name = _name;
        candidate.candidateid = idNumber;
        candidate.image = _image;
        candidate.election = _election;
        candidate.votecount = 0;
        candidate.ipfs = _ipfs;
        candidate._address = _address;

        candidateAddress.push(_address);

        emit CandidateCreate(
             idNumber,
             _age,
             _name,
             _image,
             _election,
             candidate.votecount,
             _address,
             _ipfs
        );
    }

    function createElection(string memory _name, string memory _description, string memory _startDate, string memory _endDate, string memory _ipfs) public {
        require(votingOrganizer == msg.sender, "Only organizer can create an election");
        _electionid.increment();
        uint256 idNumber = _electionid.current();

        elections[idNumber] = Election({
            electionid: idNumber,
            name: _name,
            description: _description,
            startDate: _startDate,
            endDate: _endDate,
            election_ipfs: _ipfs
        });

        electionIds.push(idNumber);

        emit ElectionCreated(idNumber, _name, _description, _startDate, _endDate, _ipfs);
    }


    function getCandidate() public view returns( address[] memory ) {
        console.log("getCandidate function called");
         return candidateAddress;
    }

    function getCandidateLength() public view returns(uint256) {
        return candidateAddress.length;
    }

    // function getCandidateData(address _address) public view returns(uint256, string memory, uint256, string memory, string memory, uint256, string memory, address){
    //     return(
    //         candidates[_address].age,
    //         candidates[_address].name,
    //         candidates[_address].candidateid,
    //         candidates[_address].image,
    //         candidates[_address].election,
    //         candidates[_address].votecount,
    //         candidates[_address].ipfs,
    //         candidates[_address]._address
    //     );
    // }

    function getCandidateData(address _address) public view returns (Candidate memory) {
        return candidates[_address];
    }

    //----Voter section

    function voterRight(address _address, string memory _name, string memory _image, string memory _ipfs) public
    {
        console.log("Voterright function called");
        require (votingOrganizer == msg.sender, "Only organizer can create voter");
        _voterid.increment();
        uint256 idNumber = _voterid.current();
        Voter storage voter= voters[_address];

        require(voter.voter_allowed == 0);

        voter.voter_allowed = 1;
        voter.voter_name = _name;
        voter.voter_image = _image;
        voter.voter_address = _address;
        voter.voter_voterId = idNumber;
        voter.voter_vote = 1000;
        voter.voter_voted = false;
        voter.voter_ipfs = _ipfs;

        votersAddress.push(_address);

        emit VoterCreated(
             idNumber,
             _name,
             _image,
             _address,
             voter.voter_allowed,
             voter.voter_voted,
             voter.voter_vote,
            _ipfs

        );

        console.log("Voterright function called");




    }

    function vote(address _candidateAddress, uint256 _candidateVoteId ) external{
        Voter storage voter =voters[msg.sender];

        require(!voter.voter_voted, "You have already voted");
        require(voter.voter_allowed != 0, "You have no right to vote");

        voter.voter_voted =true;
        voter.voter_vote = _candidateVoteId;
        votedVoters.push(msg.sender);

        candidates[_candidateAddress].votecount +=voter.voter_allowed;
    }

    function getVoterLength() public view returns(uint256) {
        return votersAddress.length;
    }

    function getVoterdata(address _address) public view returns(uint256, string memory, string memory, address , uint256, bool, string memory){
        return(
            voters[_address].voter_voterId,
            voters[_address].voter_name,
            voters[_address].voter_image,
            voters[_address].voter_address,
            voters[_address].voter_allowed,
            voters[_address].voter_voted,
            //voters[_address].voter_vote,
            voters[_address].voter_ipfs
        );
    }

    function getVotedVoterList() public view returns(address[] memory){
        return votedVoters;
    }

    function getVotersList() public view returns(address[] memory){
        return votersAddress;
    }

    //  function getElectionData(uint256 _electionid) public view returns(uint256, string memory, string memory, uint256, uint256, string memory) {
    //     Election storage election = elections[_electionid];
    //     return (
    //         election.electionid,
    //         election.name,
    //         election.description,
    //         election.startDate,
    //         election.endDate,
    //         election.election_ipfs
    //     );
    // }

    function getElections() public view returns(uint256[] memory) {
        return electionIds;
    }



}


