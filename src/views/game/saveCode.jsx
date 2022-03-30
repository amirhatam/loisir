import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
// const randomWords = require('random-words');


export const Pendu = () => {
    const [input, setInput] = useState('')
    const [response, setResponse] = useState('')

    // const [mysteryWord, setMysteryWord] = useState(randomWords())

    // const [wordsFound, setWordsFound] = useState([])
    let wordsFound = []

    const mysteryWord = "wellcome"


    let letters = []
    let numMissingLetters = mysteryWord.length


    // function getUnfinishedWord(word) {
    //     return word.split("").map(e => {
    //         return letters.indexOf(e) === -1 ? "_" : e;
    //     }
    //     ).join(" ");
    // }


    function getUnfinishedWord(word) {

        return word.split("").map(e => {
            if (letters.indexOf(e) === -1) {
                wordsFound.push("_")
                return "_";
            } else {
                wordsFound.push(e)
                return e;
            }
        }
        ).join(" ");
    }

    // const getUnfinishedWord = w => w.split('').map(e => letters.indexOf(e) === -1 ? "_" : e).join(" ")

    const getOnlyWrongLetters = w => letters.filter(e => w.indexOf(e) === -1)

    const numberOfMissingLetters = w => w.split("").filter(e => letters.indexOf(e) === -1).length


    console.log("mysteryWord ==> ", mysteryWord);
    console.log("wordsFound ==> ", wordsFound);
    // console.log("getUnfinishedWord ==>", getUnfinishedWord(mysteryWord));
    // console.log("number Of Missing Letters ==>", numberOfMissingLetters(mysteryWord));


    const findMysterWord = (numberOfTriesLeft) => {

        if (input.length === 1) {
            if (letters.indexOf(input) === -1) {
                letters.push(input);
            } else {
                console.log("You've already tried with that letter. I'm not counting this try because I'm nice");

                // displayPrompt(numberOfTriesLeft)
                return;
            }

            if (numberOfMissingLetters(mysteryWord) === 0) {
                console.log("You've won!! Congratulations!! The word was:", mysteryWord);
            } else {
                if (numMissingLetters === numberOfMissingLetters(mysteryWord)) {
                    numberOfTriesLeft--;
                }

                if (numberOfTriesLeft > 0) {
                    // Set the new number of missing letters
                    numMissingLetters = numberOfMissingLetters(mysteryWord);

                    console.log("Your word for now is: ", getUnfinishedWord(mysteryWord));
                    // setWordsFound(getUnfinishedWord(mysteryWord))

                    console.log("The wrong letters you entered are:", getOnlyWrongLetters(mysteryWord).join(" "));

                    console.log(`You still have ${numberOfTriesLeft} number of tries`);

                    // displayPrompt(numberOfTriesLeft);
                } else {
                    console.log(`You've lost :(. The word was ${mysteryWord}`);
                    return;
                }
            }
        } else {
            if (input == mysteryWord) {
                console.log("You've won!! Congratulations!! The word was:", mysteryWord);
            } else {
                numberOfTriesLeft--;

                if (numberOfTriesLeft > 0) {
                    console.log(`No, the word was not ${input}. You still have ${numberOfTriesLeft} number of tries`);

                    // displayPrompt(numberOfTriesLeft);
                } else {
                    console.log(`You've lost :(. The word was ${mysteryWord}`);
                    return;
                }
            }
        }
        // console.log("=========>", numberOfTriesLeft);
    }

    // if (wordsFound) {
    //     console.log(wordsFound);
    // }


    const runFunc = () => {

        findMysterWord(10)
    }

    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Game</MDBCardTitle>
                <MDBCol md='3'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Pendu</MDBCardTitle>
                            <MDBCardText className='my-md-4 fw-lighter'>
                                Test
                            </MDBCardText>
                            <MDBInput label='Please enter a letter or a word' onChange={(e) => setInput(e.target.value)} id='form1' type='text' className='mb-md-3' />
                            {/* {
                                dateResult
                                    ?
                                    <p className='text-center'>{dateResult}  </p>
                                    :
                                    null
                            } */}
                            <MDBBtn onClick={runFunc}>Calculate</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    )
}
