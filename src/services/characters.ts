import { marvelPublic } from "../plugins/axios";
import pagination from "../utils/pagination";
import { CharactersGet } from "../model/character";
import { perPage } from "../utils/const";

class CharactersService {
  public static async getCharacters(data: {
    page: number;
  }): Promise<CharactersGet> {
    const { page } = data;
    //MEMO: Pagination starts with 1
    const offset = page === 1 ? 0 : (page - 1) * perPage;
    const resp = await marvelPublic.get(`v1/public/characters`, {
      params: {
        offset,
        limit: perPage,
      },
    });
    return pagination(resp);
  }
}

export default CharactersService;
