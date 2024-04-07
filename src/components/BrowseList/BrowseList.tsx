import { useState, useEffect } from "react";
import { fetchAllCharacters } from "../../api";
import { CharacterType } from "../../movietypes";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from './BrowseList.module.css'

const BrowseList = () => {
        const [charactersData,setCharactersData] = useState<CharacterType[]>();
       
        useEffect(() => {
            const getCharactersData = async () => {
                const data = await fetchAllCharacters();
    
                setCharactersData(data);
            }
            if(!charactersData){
                getCharactersData();
            }
        }, [charactersData])
  return (
    <>
    <h2 className={styles.header}>Browse All</h2>
    <div className={styles.container}>
        {
            charactersData?.map((character) =>(
                <CharacterCard
              key={character.id}
               id={character.id}
               title={character.title}
               original_title={character.original_title}
               image={character.image}
              />
            ))
        }
    </div>
    </>
  )
}

export default BrowseList;