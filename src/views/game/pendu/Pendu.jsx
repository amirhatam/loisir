import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
const randomWords = require('random-words');
import { Playing } from './components/cards/PlayingCard';
import { EndGame } from './components/cards/EndGameCard';
import { setImagesFunc } from './util/imagesFunc';
import { Dictionary } from './components/Dictionary';


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

    const dictionary = Dictionary(
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
                                            errValueMsg={errValueMsg}
                                            errMsg={errMsg}
                                            randomWord={randomWord}
                                            numberOfPlay={numberOfPlay}
                                            penduImg={penduImg}
                                            setPenduImg={setPenduImg}
                                            wordsFound={wordsFound}
                                            setWordsFound={setWordsFound}
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
                                            setErrValueMsg={setErrValueMsg}
                                            setInput={setInput}
                                            input={input}
                                            setErrMsg={setErrMsg}
                                            setImagesFunc={setImagesFunc}
                                            setNumberOfPlay={setNumberOfPlay}
                                            setLettersChosenMsg={setLettersChosenMsg}
                                            setEndGameMsg={setEndGameMsg}
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
