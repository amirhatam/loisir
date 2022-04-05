import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
const randomWords = require('random-words');
import { Playing } from './PlayingCard';
import { EndGame } from './EndGameCard';
import { setImagesFunc } from './imagesFunc';
import { Dictionary } from './Dictionary';


import PenduOne from "../../../assets/pic/pendu/Le-Pendu-1.png"



export const Pendu = () => {
    const [randomWord, setRandomWord] = useState(randomWords)
    const [numberOfPlay, setNumberOfPlay] = useState(6)
    const [input, setInput] = useState("")
    const [lettersChosen, setLettersChosen] = useState([])
    const [wordsFound, setWordsFound] = useState([])
    const [penduImg, setPenduImg] = useState([PenduOne])

    //Dictionary
    const [partOneOfSpeech, setPartOneOfSpeech] = useState([])
    const [partTwoOfSpeech, setPartTwoOfSpeech] = useState([])
    const [nounDefinition, setNounDefinition] = useState([])
    const [nounSynonyms, setNounSynonyms] = useState([])
    const [nounAntonyms, setNounAntonyms] = useState([])
    const [verbDefinition, setVerbDefinition] = useState([])
    const [verbSynonyms, setVerbSynonyms] = useState([])
    const [verbAntonyms, setVerbAntonyms] = useState([])


    //Message for user 
    const [errMsg, setErrMsg] = useState([])
    const [errValueMsg, setErrValueMsg] = useState("")
    const [EndGameMsg, setEndGameMsg] = useState("")
    const [lettersChosenMsg, setLettersChosenMsg] = useState("")

    // let mysteryWord = randomWords();

    if (wordsFound.length === 0) { // Add '_' for each letter of MysteryWord 
        for (let i = 0; i < randomWord.length; i++) {
            wordsFound.push("_")
        }
    }

    Dictionary(
        setPartOneOfSpeech,
        setPartTwoOfSpeech,
        randomWord,
        setNounDefinition,
        setNounSynonyms,
        setNounAntonyms,
        setVerbDefinition,
        setVerbSynonyms,
        setVerbAntonyms
    )



    // console.log("nounDefinition", nounDefinition);
    // console.log("nounSynonyms", nounSynonyms);
    // console.log("nounAntonyms", nounAntonyms);
    // console.log("verbDefinition", verbDefinition);
    // console.log("verbSynonyms", verbSynonyms);
    // console.log("verbAntonyms", verbAntonyms);



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
                    setImagesFunc(numOfPlay, setPenduImg)
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
                        setEndGameMsg("Congratulations !! You've won !! The word was: ",);
                    }
                }

                return setWordsFound(result)

            } else {  // Part input value (Word)
                if (input == randomWord) {
                    setEndGameMsg("Congratulations !! You've won !! The word was: ");
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
    const clearState = async () => {
        window.location.reload(false); //Refresh a Page
        // setEndGameMsg("")
        // setNumberOfPlay(6)
        // setLettersChosen([])
        // setWordsFound([])
        // setPenduImg([PenduOne])
        // setRandomWord(mysteryWord)
        // setNounDefinition([])
        // setNounSynonyms([])
        // setNounAntonyms([])
        // setVerbDefinition([])
        // setVerbSynonyms([])
        // setVerbAntonyms([])

    }

    //Accept only alphabets values in input 
    const getInputValue = (e) => {

        const userValue = e.target.value.toLowerCase()
        if (userValue.match(/[a-z]/i)) {
            setInput(userValue)
            setErrValueMsg("");
        } else if (userValue && userValue.match(/[a-z]/i) === null) {
            setErrValueMsg("Please enter alphabets only");
        } else if (!userValue) {
            setErrValueMsg("");
        }
    }

    // console.log(randomWord);

    return (
        <section style={{ backgroundColor: "#4B515D" }}>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center'>
                    <MDBCardTitle className='text-center text-light my-md-5 my-4 display-4'>Game</MDBCardTitle>
                    <MDBCol >
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase text-center mb-md-5'>HANGMAN</MDBCardTitle>
                                {
                                    EndGameMsg
                                        ?
                                        <EndGame
                                            EndGameMsg={EndGameMsg}
                                            randomWord={randomWord}
                                            clearState={clearState}
                                        />
                                        :
                                        < Playing
                                            getInputValue={getInputValue}
                                            findMysteryWord={findMysteryWord}
                                            errValueMsg={errValueMsg}
                                            errMsg={errMsg}
                                            randomWord={randomWord}
                                            numberOfPlay={numberOfPlay}
                                            penduImg={penduImg}
                                            wordsFound={wordsFound}
                                            lettersChosenMsg={lettersChosenMsg}
                                            lettersChosen={lettersChosen}
                                            nounDefinition={nounDefinition}
                                            nounSynonyms={nounSynonyms}
                                            nounAntonyms={nounAntonyms}
                                            verbDefinition={verbDefinition}
                                            verbSynonyms={verbSynonyms}
                                            verbAntonyms={verbAntonyms}
                                            partOneOfSpeech={partOneOfSpeech}
                                            partTwoOfSpeech={partTwoOfSpeech}
                                        />
                                }
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}
