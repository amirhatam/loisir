import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
// const randomWords = require('random-words');


export const Pendu = () => {
    const [randomWord, setRandomWord] = useState("wellcome")
    const [input, setInput] = useState("")
    const [lettersChosen, setLettersChosen] = useState([])
    const [wordsFound, setWordsFound] = useState([])
    const [errMsg, setErrMsg] = useState([])


    const findMysteryWord = () => {
        if (input.length === 1) {
            if (lettersChosen.indexOf(input) === -1) {
                lettersChosen.push(input)
            } else {
                console.log("You've already tried with that letter. I'm not counting this try because I'm nice");
                setErrMsg("You've already tried with that letter. I'm not counting this try because I'm nice");
                return;
            }
        }


        const result = []
        if (lettersChosen.length <= 1) {
            randomWord.split("").map((e, i) => {
                if (!wordsFound.length > 0) {
                    if (input.indexOf(e) === -1) {
                        return result.push("_")
                    } else {
                        return result.push(e)
                    }
                } else {
                    if (input.indexOf(e) === -1) {
                        // if (wordsFound[i] === "_") {
                        return result.push("_")
                        // }
                    } else {
                        return result.push(e)
                    }
                }
            }
            )
        } else {
            randomWord.split("").map((e, i) => {
                if (lettersChosen.indexOf(e) === -1) {
                    return result.push("_")
                } else {
                    return result.push(e)
                }

            }
            )
        }

        return setWordsFound(result)
    }

    console.log("==>", wordsFound);
    console.log("=======>", lettersChosen);

    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Game</MDBCardTitle>
                <MDBCol md='3'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Pendu</MDBCardTitle>
                            <MDBCardText className='my-md-4 fw-lighter'>
                                Comming Soon ...
                            </MDBCardText>
                            <MDBInput label='Please enter a letter or a word' onChange={(e) => setInput(e.target.value)} id='form1' type='text' className='mb-md-3' />
                            {/* {
                                wordsFound
                                    ?
                                    <p className='text-center'>{wordsFound.join(" ")}  </p>
                                    :
                                    null
                            } */}
                            <MDBBtn onClick={findMysteryWord}>Calculate</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    )
}
