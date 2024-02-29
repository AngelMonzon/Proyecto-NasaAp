// Generated by https://quicktype.io

export interface Artemis {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  items:         Item2[];
  pageInfo:      PageInfo;
}

export interface Item2 {
  kind:    ItemKind;
  etag:    string;
  id:      string;
  snippet: Snippet;
}

export enum ItemKind {
  YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Snippet {
  publishedAt:            string;
  channelId:              ChannelID;
  title:                  string;
  description:            string;
  thumbnails:             Thumbnails;
  channelTitle:           ChannelTitle;
  playlistId:             PlaylistID;
  position:               number;
  resourceId:             ResourceID;
  videoOwnerChannelTitle: ChannelTitle;
  videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
  UC8ZqCEvaRwHcfz3IhjhMMXQ = "UC8zqCEvaRwHcfz3IhjhMMxQ",
  UCAP7P621ATYYAa8JMqUVA = "UC_aP7p621ATY_yAa8jMqUVA",
  UCLADiR1FfKNvjuUpBHmylQ = "UCLA_DiR1FfKNvjuUpBHmylQ",
  UCjJtr2FFcUp6YljzJOzpHUg = "UCjJtr2fFcUp6yljzJOzpHUg",
  UCmheCYT4HlbFi943LpH009Q = "UCmheCYT4HlbFi943lpH009Q",
}

export enum ChannelTitle {
  NASAEnEspañol = "NASA en Español",
  NASAJohnson = "NASA Johnson",
  NASASKennedySpaceCenter = "NASA's Kennedy Space Center",
  NASAVideo = "NASA Video",
  Nasa = "NASA",
}

export enum PlaylistID {
  PL2ABZuCeDwlS2SGfYSvcoJZLRG069IH = "PL2aBZuCeDwlS_2sGfYSvcoJZLRG069i-H",
}

export interface ResourceID {
  kind:    ResourceIDKind;
  videoId: string;
}

export enum ResourceIDKind {
  YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres:   Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}
