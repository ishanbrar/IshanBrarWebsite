import emblems from "./mw2-emblems.json";

export type Mw2Emblem = {
  id: string;
  src: string;
};

export const mw2Emblems: Mw2Emblem[] = emblems;

export function pickRandomEmblem(): Mw2Emblem {
  return mw2Emblems[Math.floor(Math.random() * mw2Emblems.length)]!;
}
