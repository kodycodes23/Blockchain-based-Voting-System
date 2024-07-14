import React, { useState, useEffect, useCallback, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

import { VotingContext } from '../context/Voter'
import Styles from '../styles/addelection.module.css'
import images from '../assets'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { ST } from 'next/dist/shared/lib/utils'

const addelection = () => {
  const [fileUrl, setFileUrl] = useState(null)
  const [electionform, setElectionform] = useState({
    name: '',
    description: '',
    startdate: '',
    enddate: ''
  })

  const router = useRouter()
  const { uploadToIPFSElection, createelection, electionArray,  getNewCandidate, voterArray } = useContext(VotingContext)

  //---Voters image drop

  const onDrop = useCallback(async acceptedFil => {
    const url = await uploadToIPFSE(acceptedFil[0])
    setFileUrl(url)
    console.log(url)
  })
  // const onDrop = useCallback(async (acceptedFile) => {
  //   setLoading(true);
  //   try {
  //     const url = await uploadToIPFS(acceptedFile[0]);
  //     setFileUrl(url);
  //   } catch (error) {
  //     console.error('Error uploading to IPFS:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [uploadToIPFS]);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: 'image/*',
//     maxSize: 500000
//   })

  //console.log(fileUrl);


  //------JSX PART

  return (
    <div className={Styles.createVoter}>
      <div>
        {fileUrl && (
          <div className={Styles.voterInfo}>
            <img src={fileUrl} alt='voter Image' />
            <div className={Styles.voterInfo_paragraph}>
              <p>
                Name: <span>&nbps; {electionform.name}</span>
              </p>
              <p>
                Description: <span>&nbps; {electionform.description}</span>
              </p>
              <p>
                startdate:<span>&nbps; {electionform.startdate} </span>
              </p>
              <p>
                enddate:<span>&nbps; {electionform.enddate} </span>
              </p>
            </div>
          </div>
        )}
#
        {!fileUrl && (
          <div className={Styles.sideInfo}>
            <div className={Styles.sideInfo_box}>
              <h4>Create Candidate For Voting </h4>
              <p>Chikaodi's Final Year Project</p>
              <p className={Styles.sideInfo_para}>Elections</p>
              <div className={Styles.card}>
                {/* {candidatesArray.map((el, i) => (
                    <div key={i + 1} className= {Styles.card_box}>
                      <div className={Styles.image}>
                        <img src={el[3]} alt="Profile photo"/>
                      </div>
                      <div className={Styles.card_info}>
                        <p>{el[1]}</p>
                        <p>Address:{el[6].slice(0, 10)}...</p>
                      </div>

                    </div>
                  ))} */}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={Styles.voter}>
        <div className={Styles.voter__container}>
          <h1>Create New Election</h1>
          <div className={Styles.voter__container__box}>
            {/* <div className={Styles.voter__container__box__div}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />

                <div className={Styles.voter__container__box__div__info}>
                  <p>Upload file: JPG, PNG, GIF, WEBM MAX 10MB</p>

                  <div className={Styles.voter__container__box__div__image}>
                      <Image
                        src={images.upload}
                        width={150}
                        height={150}
                        objectFit='contain'
                        alt='File Upload'
                      />
                  </div>
                  <p>Drag and drop</p>
                  <p>or browse media on your device</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className={Styles.input_container}>
        <div className={Styles.input_group}>
            <label htmlFor='electionName'>Election Name</label>
            <select
              id='electionName'
              value={electionform.name}
              onChange={e => setElectionform({ ...electionform, name: e.target.value })}
            >
              <option value=''>Select Election</option>
              <option value='Presidential Election'>Presidential Election</option>
              <option value='Gubernatorial Election'>Gubernatorial Election</option>
              <option value='Senate Election'>Senate Election</option>
              <option value='House of Representatives Election'>House of Representatives Election</option>
            </select>
          </div>
          <div className={Styles.input_group}>
          <Input
            inputType='text'
            title='Description'
            placeholder='Description of election'
            handleClick={e =>
            setElectionform({ ...electionform, description: e.target.value })
            }
          />
          </div>

          {/* <Input
            inputType='text'
            title='Startdate'
            placeholder='Election end-date'
            handleClick={e =>
              setCandidateform({ ...electionform, startdate: e.target.value })
            }
          />
          <Input
            inputType='text'
            title='enddate'
            placeholder='Election End date'
            handleClick={e =>
              setCandidateform({ ...candidateform, enddate: e.target.value })
            }
          /> */}
          <div className={Styles.input_group}>
            <label htmlFor='startDate'>Start Date</label>
            <input
              type='date'
              id='startDate'
              value={electionform.startdate}
              onChange={e => setElectionform({ ...electionform, startdate: e.target.value })}
            />
          </div>
          <div className={Styles.input_group}>
            <label htmlFor='endDate'>End Date</label>
            <input
              type='date'
              id='endDate'
              value={electionform.enddate}
              onChange={e => setElectionform({ ...electionform, enddate: e.target.value })}
            />
          </div>


          <div className={Styles.Button}>
            <Button
              btnName='Create Election'
              handleClick={() => createelection(electionform, router)}
            />
          </div>
        </div>
      </div>
      <div className={Styles.createdVoter}>
        <div className={Styles.createdVoter__info}>
          <Image src={images.creator} alt='user Profiles' />
          <p>Notice for User</p>
          <p>
            Organizer <span>0x939939..</span>
          </p>
          <p> Only organizer of the contract can create Election </p>
        </div>
      </div>
    </div>
  )
}

// const allowedVoters = () => {
//   return <div>allowedVoters</div>;
// };

export default addelection
