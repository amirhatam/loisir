

export const findMysteryWord = () => {

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

