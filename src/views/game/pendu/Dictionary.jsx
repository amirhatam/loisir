import { useEffect } from 'react'
import axios from "axios";

export const Dictionary = (setSynonyms, setDefinition) => {
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en_US/center")
                let syns = []
                response.data[0].meanings[0].synonyms.map(e => syns.push(e))

                if (response.status === 200) {
                    setDefinition(response.data[0].meanings[0].definitions[0].definition)
                    setSynonyms(syns)
                }
            } catch (error) {
                console.error(error)
            }
        })();
    }, [])

    return null
}
