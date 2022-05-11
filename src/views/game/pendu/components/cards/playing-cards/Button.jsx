import { MDBBtn, MDBCol } from 'mdb-react-ui-kit'
import React from 'react'

export default function Button(props) {


    const findMysteryWord = () => {
        let numOfPlay = props.numberOfPlay

        if (props.input) {
            if (props.numberOfPlay > 1) {  // Condition: gamer still have token

                if (props.input.length === 1) { // Condition for separate input value (words & alphabet) 

                    if (props.lettersChosen.indexOf(props.input) === -1) { //  Condition for Get input value non repeated 
                        props.lettersChosen.push(props.input)
                        props.setInput('')
                        props.setLettersChosenMsg("The letters you entered are : ")
                        props.setErrMsg("");
                    } else {
                        props.setErrMsg("You've already tried with that letter. I'm not counting this try because I'm nice ;)");
                        return;
                    }
                    if (!props.randomWord.includes(props.input)) {
                        numOfPlay--
                        props.setNumberOfPlay(numOfPlay)
                        props.setImagesFunc(numOfPlay, props.setPenduImg)
                    }

                    const result = []
                    if (props.lettersChosen.length <= 1) {      //  Comparison  user input and Mystery Word
                        props.randomWord.split("").map((e, i) => {
                            if (!props.wordsFound.length > 0) {
                                if (input.indexOf(e) === -1) {
                                    return result.push("_")
                                } else {
                                    return result.push(e)
                                }
                            } else {
                                if (props.input.indexOf(e) === -1) {
                                    return result.push("_")
                                } else {
                                    return result.push(e)
                                }
                            }
                        })

                    } else {
                        props.randomWord.split("").map((e, i) => {
                            if (props.lettersChosen.indexOf(e) === -1) {
                                return result.push("_")
                            } else {
                                return result.push(e)
                            }

                        })
                        if (result.join("") === props.randomWord) {
                            props.setEndGameMsg("Congratulations !! You've won !! The word was: ",);
                        }
                    }

                    return props.setWordsFound(result)

                } else {  // Part input value (Word)
                    if (props.input == props.randomWord) {
                        props.setEndGameMsg("Congratulations !! You've won !! The word was: ");
                        props.setNumberOfPlay(numOfPlay)
                    } else {
                        props.setErrMsg("")
                        numOfPlay--
                        props.setErrMsg(`Sorry ! MYSTERY WORD was not '${props.input}'`);
                        props.setNumberOfPlay(numOfPlay)
                    }
                }

            } else { // Finished user token
                props.setEndGameMsg(`Sorry, you just lost the game, the word was : `)
            }

        } else {
            props.setErrMsg('Please enter a letter !');
        }
    }

    return (

        <MDBCol size='2' className="input-group-prepend px-0">
            <MDBBtn id="btn" onClick={findMysteryWord}>
                Enter
            </MDBBtn>
        </MDBCol>
    )
}
