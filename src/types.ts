export enum LinkImageSource {
  Github = "/images/logos/github.png",
  Download = "/images/logos/download.png"
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
}

export enum GameEngine {
  Unity5 = "Unity 5",
  UE5 = "Unreal Engine 5",
}

export enum Status {
    WIP = "Work in Progress",
    Completed = "Completed",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
    links: {
    discord: string;
    github: string;
  };
}

export interface Game {
  name: string;
  description: string;
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine;
  teamsize: string;
  status: Status;
}