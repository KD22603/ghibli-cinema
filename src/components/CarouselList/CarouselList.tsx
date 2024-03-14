import { useEffect, useState } from 'react'
import { CharacterType } from '../../movietypes';
import { fetchAllCharacters } from '../../api';
import CarouselData from '../CarouselData/CarouselData';

const CarouselList = () => {
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
    console.log(charactersData);
  return (
    <div>
      {
    charactersData?.map((slide) =>(
      <CarouselData
      key={slide.id}
       id={slide.id}
       title={slide.title}
       original_title={slide.original_title}
       image={slide.image}
       description={slide.description}
      />
    ))
    }
    </div>
  )
  
}

export default CarouselList;