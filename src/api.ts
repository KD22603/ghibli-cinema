import axios from "axios";
import { CharacterType } from "./movietypes";

export const fetchAllCharacters = async (): Promise<CharacterType[] | undefined>  => {
    try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');

        return response.data;
      } catch (error) {
        console.error(error);
      }
}

export const fetchMovieId = async (id: string|undefined):Promise<CharacterType | undefined> => {
  try{
      const response = await axios.get(`https://ghibliapi.vercel.app/films/${id}`);
      return response.data;
  } catch (error) {
      console.log(error);
  }
}
