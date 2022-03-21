import { marvelPublic } from "../plugins/axios";
import { Character } from "../model/character";

class CharacterService {
  public static async getCharacter(data: { id: string }): Promise<Character> {
    const { id } = data;
    const resp = await marvelPublic.get(`v1/public/characters/${id}`);
    return resp.data.data.results[0];
  }
  public static async getCharacterComics(data: { id: string }): Promise<any> {
    const { id } = data;
    const resp = await marvelPublic.get(`v1/public/characters/${id}/comics`);
    return resp.data.data.results;
  }
  public static async getCharacterStories(data: { id: string }): Promise<any> {
    const { id } = data;
    const resp = await marvelPublic.get(`v1/public/characters/${id}/stories`);
    return resp.data.data.results;
  }
  public static async getCharacterEvents(data: { id: string }): Promise<any> {
    const { id } = data;
    const resp = await marvelPublic.get(`v1/public/characters/${id}/events`);
    return resp.data.data.results;
  }
  public static async getCharacterSeries(data: { id: string }): Promise<any> {
    const { id } = data;
    const resp = await marvelPublic.get(`v1/public/characters/${id}/series`);
    return resp.data.data.results;
  }
}

export default CharacterService;
