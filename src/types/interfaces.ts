export interface IIndexedDbImage {
  key: string,
  base64Image: string,
}

export interface ICardPlaying {
  id: string,
  src: string,
  selected?: boolean
}

export interface ICardMainPlaying {
  id: string,
  src: string,
  selected?: boolean
}