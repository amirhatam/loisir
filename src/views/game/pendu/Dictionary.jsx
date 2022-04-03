import { useEffect } from 'react'
import axios from "axios";

export const Dictionary = (
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
                // const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/earlier`)
                let nounSyns = []
                let nounAnts = []
                let verbSyns = []
                let verbAnts = []
                // console.log(response.data[0].meanings[0].definitions[0].definition);
                // console.log(response.data[0].meanings[1].definitions[0].definition);
                if (response.status === 200) {
                    const nounData = response.data[0].meanings[0]
                    const verbData = response.data[0].meanings[1]

                    // PartOfSpeech Noun
                    nounData.synonyms.map(e => nounSyns.push(e))
                    nounData.antonyms.map(e => nounAnts.push(e))

                    setNounDefinition(nounData.definitions[0].definition)
                    setNounSynonyms(nounSyns)
                    setNounAntonyms(nounAnts)

                    // PartOfSpeech Verb
                    verbData.synonyms.map(e => verbSyns.push(e))
                    verbData.antonyms.map(e => verbAnts.push(e))

                    setVerbDefinition(verbData.definitions[0].definition)
                    setVerbSynonyms(verbSyns)
                    setVerbAntonyms(verbAnts)
                }
            } catch (error) {
                console.error(error)
            }
        })();
    }, [])

    return null
}
