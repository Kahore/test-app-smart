import { PaginationCounters } from "./misc";

export type StoryItem = "cover" | "interiorStory";

export interface Character {
  comics: CharacterSubDetail;
  description: string;
  events: CharacterSubDetail;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: CharacterSubDetail;
  stories: CharacterStory;
  thumbnail: { path: string; extension: "jpg" };
  urls: [];
}

export interface CharacterSubDetail {
  available: number;
  collectionURI: string;
  items: CharacterSubDetailItem[];
  returned: number;
}
export interface CharacterSubDetailItem {
  name: string;
  resourceURI: string;
}
export interface CharacterStory extends CharacterSubDetail {
  items: CharacterStoryItem[];
}
export interface CharacterStoryItem extends CharacterSubDetailItem {
  type: StoryItem;
}

export interface CharactersGet extends PaginationCounters {
  items: Character[];
}
