import { useEffect } from 'react'
import axios from "axios";

export const Dictionary = (
    setPartOneOfSpeech,
    setPartTwoOfSpeech,
    randomWord,
    setNounDefinition,
    setNounSynonyms,
    setNounAntonyms,
    setVerbDefinition,
    setVerbSynonyms,
    setVerbAntonyms
) => {
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${randomWord}`)
                let nounSyns = []
                let nounAnts = []
                let verbSyns = []
                let verbAnts = []

                if (response.status === 200) {
                    const nounData = response.data[0].meanings[0]
                    const verbData = response.data[0].meanings[1]
                    // console.log(response.data[0].meanings[0].partOfSpeech);
                    // console.log(response.data[0].meanings[1].partOfSpeech);
                    // PartOfSpeech Noun
                    nounData.synonyms.map(e => nounSyns.push(e))
                    nounData.antonyms.map(e => nounAnts.push(e))

                    setNounDefinition(nounData.definitions[0].definition)
                    setNounSynonyms(nounSyns)
                    setNounAntonyms(nounAnts)
                    setPartOneOfSpeech(response.data[0].meanings[0].partOfSpeech)
                    // PartOfSpeech Verb
                    verbData.synonyms.map(e => verbSyns.push(e))
                    verbData.antonyms.map(e => verbAnts.push(e))

                    setVerbDefinition(verbData.definitions[0].definition)
                    setVerbSynonyms(verbSyns)
                    setVerbAntonyms(verbAnts)
                    setPartTwoOfSpeech(response.data[0].meanings[1].partOfSpeech)
                }
            } catch (error) {
                console.error(error)
            }
        })();
    }, [])

    return null
}
