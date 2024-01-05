// Generated by https://quicktype.io

export interface NasaImages {
  collection: Collection;
}

export interface Collection {
  version:  string;
  href:     string;
  items:    Item[];
  metadata: Metadata;
  links:    CollectionLink[];
}

export interface Item {
  href:  string;
  data:  Datum[];
  links: ItemLink[];
}

export interface Datum {
  center:             Center;
  title:              string;
  nasa_id:            string;
  date_created:       string;
  keywords:           Location[];
  media_type:         MediaType;
  description_508?:   string;
  secondary_creator?: string;
  description:        string;
  album?:             string[];
  photographer?:      string;
  location?:          Location;
}

export enum Center {
  Grc = "GRC",
  Jpl = "JPL",
  Ksc = "KSC",
}

export enum Location {
  ChristopherKraft = "Christopher Kraft",
  CongressionalReport = "Congressional Report",
  Mercury = "Mercury",
  MercuryMissionControl = "Mercury Mission Control",
  MercuryProgram = "Mercury Program",
  Messenger = "MESSENGER",
  ProjectMercury = "Project Mercury",
  Space = "space",
}

export enum MediaType {
  Image = "image",
  Video = "video",
}

export interface ItemLink {
  href:    string;
  rel:     Rel;
  render?: MediaType;
}

export enum Rel {
  Captions = "captions",
  Preview = "preview",
}

export interface CollectionLink {
  rel:    string;
  prompt: string;
  href:   string;
}

export interface Metadata {
  total_hits: number;
}
