import {useEffect, useState } from 'react'
import { CharacterType } from '../../movietypes';
import { fetchAllCharacters } from '../../api';
import CarouselData from '../CarouselData/CarouselData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './CarouselList.css'

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
    const renderSlides = charactersData?.map((character) =>(
      <CarouselData
    key={character.id}
     id={character.id}
     title={character.title}
     original_title={character.original_title}
     image={character.image}
     description={character.description}
    />
  )).slice(0,6) 
  return (
<Carousel
  showArrows={true}
  autoPlay={true}
  infiniteLoop={true}
  swipeable={true}
  showStatus={false}
showIndicators={false}

>
  {renderSlides}
</Carousel>

  )
  
}

export default CarouselList;