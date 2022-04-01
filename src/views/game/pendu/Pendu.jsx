import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow, MDBRipple, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit';
const randomWords = require('random-words');
import { Playing } from './Playing';
// import { findMysteryWord } from './comparisonFunc';



import PenduOne from "../../../assets/pic/pendu/Le-Pendu-1.png"
import PenduTwo from "../../../assets/pic/pendu/Le-Pendu-2.png"
import PenduThree from "../../../assets/pic/pendu/Le-Pendu-3.png"
import PenduFour from "../../../assets/pic/pendu/Le-Pendu-4.png"
import PenduFive from "../../../assets/pic/pendu/Le-Pendu-5.png"
import PenduSix from "../../../assets/pic/pendu/Le-Pendu-6.png"
import PenduSeven from "../../../assets/pic/pendu/Le-Pendu-7.png"
import Win from "../../../assets/pic/smile.webp"


export const Pendu = () => {
    const [randomWord, setRandomWord] = useState(randomWords)
    const [numberOfPlay, setNumberOfPlay] = useState(6)
    const [input, setInput] = useState("")
    const [lettersChosen, setLettersChosen] = useState([])
    const [wordsFound, setWordsFound] = useState([])
    const [penduImg, setPenduImg] = useState([PenduOne])

    const [errMsg, setErrMsg] = useState([])
    const [errValueMsg, setErrValueMsg] = useState("")
    const [EndGameMsg, setEndGameMsg] = useState("")
    const [lettersChosenMsg, setLettersChosenMsg] = useState("")



    let mysteryWord = randomWords();

    if (wordsFound.length === 0) { // Add '_' for each letter of MysteryWord 
        for (let i = 0; i < randomWord.length; i++) {
            wordsFound.push("_")
        }
    }




    const setImageFunc = (n) => { // Function for set Pendu Image

        if (n === 5) {
            setPenduImg([PenduTwo])
        } else if (n === 4) {
            setPenduImg([PenduThree])
        } else if (n === 3) {
            setPenduImg([PenduFour])
        } else if (n === 2) {
            setPenduImg([PenduFive])
        } else if (n === 1) {
            setPenduImg([PenduSix])
        } else {
            setPenduImg([PenduOne])
        }
    }



    const findMysteryWord = () => {

        let numOfPlay = numberOfPlay

        if (numberOfPlay > 1) {  // Condition: gamer still have token

            if (input.length === 1) { // Condition for separate input value (words & alphabet) 

                if (lettersChosen.indexOf(input) === -1) { //  Condition for Get input value non repeated 
                    lettersChosen.push(input)
                    setLettersChosenMsg("The letters you entered are : ")
                    setErrMsg("");
                } else {
                    setErrMsg("You've already tried with that letter. I'm not counting this try because I'm nice ;)");
                    return;
                }
                if (!randomWord.includes(input)) {
                    numOfPlay--
                    setNumberOfPlay(numOfPlay)
                    setImageFunc(numOfPlay)
                }

                const result = []
                if (lettersChosen.length <= 1) {      //  Comparison  user input and Mystery Word
                    randomWord.split("").map((e, i) => {
                        if (!wordsFound.length > 0) {
                            if (input.indexOf(e) === -1) {
                                return result.push("_")
                            } else {
                                return result.push(e)
                            }
                        } else {
                            if (input.indexOf(e) === -1) {
                                return result.push("_")
                            } else {
                                return result.push(e)
                            }
                        }
                    })

                } else {
                    randomWord.split("").map((e, i) => {
                        if (lettersChosen.indexOf(e) === -1) {
                            return result.push("_")
                        } else {
                            return result.push(e)
                        }

                    })
                    if (result.join("") === randomWord) {
                        setEndGameMsg("You've won!! Congratulations!! The word was: ",);
                    }
                }

                return setWordsFound(result)

            } else {  // Part input value (Word)
                if (input == randomWord) {
                    setEndGameMsg("You've won!! Congratulations!! The word was: ");
                    setNumberOfPlay(numOfPlay)
                } else {
                    setErrMsg("")
                    numOfPlay--
                    setErrMsg(`Sorry, MYSTERY WORD was not ${input}`);
                    setNumberOfPlay(numOfPlay)
                }
            }

        } else { // Finished user token
            setEndGameMsg(`Sorry, you just lost the game, the word was : `)
        }

    }



    //Rematch
    const clearState = () => {
        setEndGameMsg("")
        setNumberOfPlay(6)
        setLettersChosen([])
        setWordsFound([])
        setPenduImg([PenduOne])
        setRandomWord(mysteryWord)
    }

    //Accept only alphabets values in input 
    const getInputValue = (e) => {

        const userValue = e.target.value
        if (userValue.match(/[a-z]/i)) {
            setInput(userValue)
            setErrValueMsg("");
        } else if (userValue && userValue.match(/[a-z]/i) === null) {
            setErrValueMsg("Please enter alphabets only");
        } else if (!userValue) {
            setErrValueMsg("");
        }
    }
    console.log(randomWord);




    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Game</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase text-center mb-md-5'>HANGMAN</MDBCardTitle>

                            {
                                EndGameMsg
                                    ?
                                    <>
                                        <MDBCardText className='h4 fw-lighter my-md-4 text-center'>{EndGameMsg}
                                            <strong className='text-uppercase'>{randomWord}</strong>
                                        </MDBCardText>
                                        <MDBRow className='justify-content-center mb-md-5'>
                                            <MDBCol size='6'>
                                                {
                                                    EndGameMsg === `Sorry, you just lost the game, the word was : `
                                                        ?
                                                        <MDBCardImage src={PenduSeven} fluid alt='...' />
                                                        :
                                                        <MDBCardImage src={Win} fluid alt='...' />

                                                }
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className='justify-content-center'>
                                            <MDBCol size='5'>
                                                <MDBBtn onClick={clearState}>Try again <MDBIcon className='fa-lg ' far icon="smile-wink" />
                                                </MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                    </>
                                    :
                                    <>
                                        <Playing />
                                        {/* <MDBRow className="input-group justify-content-center">
                                            <MDBCol size='8' className="input-group-prepend px-0">
                                                <MDBInput
                                                    label='Please enter a letter or a word'
                                                    onChange={getInputValue}
                                                    id='form1'
                                                    type='text'
                                                    className='mb-md-3 form-control'
                                                />
                                            </MDBCol>
                                            <MDBCardText className='text-danger text-center h5 fw-lighter px-md-4'>{errMsg} </MDBCardText>

                                            <MDBCol size='2' className="input-group-prepend px-0">
                                                <MDBBtn onClick={findMysteryWord}>
                                                    Enter
                                                </MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBCardText className='text-danger fw-lighter text-center'>{errValueMsg}</MDBCardText>

                                        <MDBCardText className=' text-center mt-md-4'>Your
                                            <strong> MYSTERY WORD </strong> has
                                            <strong className='text-success h5'> {randomWord.length} </strong>
                                            letters,
                                            <br />
                                            and you have
                                            <strong className='text-danger h5'> {numberOfPlay} </strong>
                                            number of tries.
                                        </MDBCardText>

                                        <MDBCardText className='display-6 my-md-4 text-center'>{wordsFound.join(" ")}</MDBCardText>
                                        <MDBRow className='justify-content-center'>
                                            <MDBCol size='6'>
                                                <MDBCardImage src={penduImg} fluid alt='...' />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBCardText className='text-center'> {lettersChosenMsg}
                                            <br />
                                            <strong className='text-uppercase'>{lettersChosen.join(", ")}</strong>
                                        </MDBCardText> */}
                                    </>
                            }
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
