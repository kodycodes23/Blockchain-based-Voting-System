import React, { useState, useEffect, useCallback, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

import { VotingContext } from '../context/Voter'
import Styles from '../styles/allowedVoter.module.css'
import images from '../assets'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { ST } from 'next/dist/shared/lib/utils'

const allowedVoter = () => {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, setFormInput] = useState({
    name: '',
    address: '',
    position: '',
  })

  const router = useRouter()
  const {uploadToIPFS, createVoter, voterArray, getAllVoterData} = useContext(VotingContext)

  //---Voters image drop

  const onDrop = useCallback(async acceptedFil => {
    const url = await uploadToIPFS(acceptedFil[0])
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 500000
  })

  //  useEffect(() => {
  //   getAllVoterData();

  //     }, []);
  console.log(voterArray);

  console.log(voterArray);

  //------JSX PART

  return (
    <div className={Styles.createVoter}>
      <div>
        {fileUrl && (
          <div className={Styles.voterInfo}>
            <img src={fileUrl} alt='voter Image' />
            <div className={Styles.voterInfo_paragraph}>
              <p>
                Name: <span>&nbps; {formInput.name}</span>
              </p>
              <p>
                Add: <span>&nbps; {formInput.address.slice(0, 20)}</span>
              </p>
              <p>
                Pos:<span>&nbps; {formInput.position} </span>
              </p>
            </div>
          </div>
        )}
        {!fileUrl && (
          <div className={Styles.sideInfo}>
            <div className={Styles.sideInfo_box}>
              <h4>Create Candidate For Voting </h4>
              <p>Chikaodi's Final Year Project</p>
              <p className={Styles.sideInfo_para}>Contract Candidate</p>
              <div className={Styles.card}>
                {voterArray.map((el, i) => (
                    <div key={i + 1} className= {Styles.card_box}>
                      <div className={Styles.image}>
                        <img src={el[6]} alt="Profile photo"/>
                      </div>
                      <div className={Styles.card_info}>
                        <p>{el[1]}</p>
                        <p>Address:{el[3].slice(0, 10)}...</p>
                      </div>

                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={Styles.voter}>
        <div className={Styles.voter__container}>
          <h1>Create New Voter</h1>
          <div className={Styles.voter__container__box}>
            <div className={Styles.voter__container__box__div}>
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
            </div>
          </div>
        </div>
        <div className={Styles.input_container}>
          <Input
            inputType='text'
            title='Name'
            placeholder='Voter Name'
            handleClick={e =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
          <Input
            className={Styles.input_container}
            inputType='text'
            title='Address'
            placeholder='Voter Address'
            handleClick={e =>
              setFormInput({ ...formInput, address: e.target.value })
            }
          />
          <Input
            inputType='text'
            title='Position'
            placeholder='Voter Position'
            handleClick={e =>
              setFormInput({ ...formInput, position: e.target.value })
            }
          />

          <div className={Styles.Button}>
            <Button
              btnName='Authorized Voter'
              handleClick={() => createVoter(formInput, fileUrl, router)}
            />
          </div>
        </div>
      </div>
      <div className={Styles.createdVoter}>
        {/* </div> <div className={Styles.createdVoter__info}> */}
        <div className={Styles.createdVoter_Info}>
          <Image src={images.creator} alt='user Profiles' />
          <p>Notice for User</p>
          <p>
            Organizer <span>0x939939..</span>
          </p>
          <p> Only organizer of the contract can create Voter for voting</p>
        </div>
      </div>
    </div>
  )
}

// const allowedVoters = () => {
//   return <div>allowedVoters</div>;
// };

export default allowedVoter
