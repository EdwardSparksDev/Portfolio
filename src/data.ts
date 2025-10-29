
import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform, Status } from "./types";
export const PersonalInfo: AboutMeData = {
  name: "Edward Sparks",
  role: "Game Programmer",
  introduction: "Developer since 2013 with a strong passion for games and a keen eye for detail.\nExperienced in C, C# and C++ programming.",
  description: "Ossu, I'm Edward!\n\nI'm a developer who's been playing games since kindergarden starting off with titles such as Doom II and Halo CE (I know, good times). Once I started programming in highschool and messing around by modding Call of Duty 4 Modern Warfare, I already knew what I wanted to do as a job in the future.\n\nWhile studying in computer engineering I decided to fully dedicate myself to game development and officially started programming games using engines such as Unity and Unreal.\n\nI'm now looking to join a game studio to improve my skills as much as possible while working as a team!",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  links: {
    discord: "https://discord.com/users/369478825899327499",
    github: "https://github.com/EdwardSparksDev"
  }
};

export const games: Game[] = [
  {
    name: "Multiplayer Arena Shooter",
    description: "Multiplayer third person arena shooter.\nMade for learning and experimenting with Unreal network replication.",
    platforms: [Platform.Windows],
    engine: GameEngine.UE5,
    teamsize: "Solo dev",
    status: Status.WIP,
    links: [
        { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/MPArenaShooter" },
        { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1MI7tVS4yJ9Myug1gAetCSNM2sNwosJbi?usp=drive_link" }
    ],
    media: [
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_1.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_2.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_3.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_4.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_5.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_6.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_7.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_8.jpg", type: MediaType.Image },
        { source: "/images/games/MultiplayerArenaShooter/Screenshot_9.jpg", type: MediaType.Image }
    ],
  },
  {
    name: "Extended Game Settings Plugin",
    description: "Runtime game settings plugin.\nStarted off as an experiment to test C++ Subsystems.",
    platforms: [Platform.Windows],
    engine: GameEngine.UE5,
    teamsize: "Solo dev",
    status: Status.WIP,
    links: [
        { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/ExtendedGameSettings" },
        { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1_I2KWqNy6Mj_4cUeFlq3Jb8ZOd1aEwN8?usp=drive_link" }
    ],
    media: [
        { source: "/images/games/ExtendedGameSettings/Screenshot_1.jpg", type: MediaType.Image },
        { source: "/images/games/ExtendedGameSettings/Screenshot_2.jpg", type: MediaType.Image },
        { source: "/images/games/ExtendedGameSettings/Screenshot_3.jpg", type: MediaType.Image },
        { source: "/images/games/ExtendedGameSettings/Screenshot_4.jpg", type: MediaType.Image },
        { source: "/images/games/ExtendedGameSettings/Screenshot_5.jpg", type: MediaType.Image },
        { source: "/images/games/ExtendedGameSettings/Screenshot_6.jpg", type: MediaType.Image }
    ],
    },
    {
        name: "Primordial",
        description: "Original ability-based third person combat game.\nThis was our first Unreal Engine project, made entirely in Blueprints.",
        platforms: [Platform.Windows],
        engine: GameEngine.UE5,
        teamsize: "7 people",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "unavailable" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/12pfK9-yT0l5PTg1Xlyu0H3JfyuIbMQzw?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/Primordial/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_5.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_6.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_7.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_8.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_9.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_10.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_11.jpg", type: MediaType.Image },
            { source: "/images/games/Primordial/Screenshot_12.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Final Fantasy Tactics Advance",
        description: "Final Fantasy Tactics Advance (2003), first battle remake.\nUses A* and breadth-first search algorithms for tiles interactions.",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "Solo dev",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/AStarAlgorithm" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1PL9CF93sNTNV_zg-7lOqO-OSuEjUKZv7?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/FinalFantasyTacticsAdvance/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/FinalFantasyTacticsAdvance/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/FinalFantasyTacticsAdvance/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/FinalFantasyTacticsAdvance/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/FinalFantasyTacticsAdvance/Screenshot_5.jpg", type: MediaType.Image },
            { source: "/images/games/FinalFantasyTacticsAdvance/Screenshot_6.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Time Crisis",
        description: "Time Crisis (1995), stage 1 remake.\nImplements a custom spline tool made in Unity to move between areas.",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "Solo dev",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/UnityTools" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1I3x4P_DUOgTPtGqDRFAnorzDyDUEopSv?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/TimeCrisis/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/TimeCrisis/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/TimeCrisis/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/TimeCrisis/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/TimeCrisis/Screenshot_5.jpg", type: MediaType.Image },
            { source: "/images/games/TimeCrisis/Screenshot_6.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Suika Game",
        description: "Simple Suika Game (2021) remake.\nMade for Android to test a custom-made mobile framework.",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "Solo dev",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/HypercasualMobile" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1o3fFIiN8KxKTVk6P14jMrAuzXL-9ot7B?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/SuikaGame/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/SuikaGame/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/SuikaGame/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/SuikaGame/Screenshot_4.jpg", type: MediaType.Image },
        ],
    },
    {
        name: "Halloween Dash",
        description: "A Halloween-themed Geometry Dash (2013) remake.\nIncludes 4 original levels and 42 new skins.",
        platforms: [Platform.Windows, Platform.Android],
        engine: GameEngine.Unity5,
        teamsize: "6 people",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "unavailable" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1zXOnW_jLucJ2QZddqy07x8kiqswbG08Z?usp=drive_link" },
        ],
        media: [
            { source: "/images/games/HalloweenDash/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/HalloweenDash/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/HalloweenDash/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/HalloweenDash/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/HalloweenDash/Screenshot_5.jpg", type: MediaType.Image },
            { source: "/images/games/HalloweenDash/Screenshot_6.jpg", type: MediaType.Image },
            { source: "/images/games/HalloweenDash/Screenshot_7.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Slay the Spire",
        description: "Slay the Spire (2019), single fight remake.\nPrimarily focused on cards drag and drop mechanics.",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "Solo dev",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/ScriptableObjects" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1RrrL5W5Oyxm1NScWhcM15_JYC6d4G20U?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/SlayTheSpire/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/SlayTheSpire/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/SlayTheSpire/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/SlayTheSpire/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/SlayTheSpire/Screenshot_5.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Bomberman",
        description: "Bomberman (1983) remake.\nWith the addition of local multiplayer and procedural maps.",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "Solo dev",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/UnityPhysics" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1h5GUIPLFF8rSypYTfs4teoZAXBfFyOhg?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/Bomberman/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/Bomberman/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/Bomberman/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/Bomberman/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/Bomberman/Screenshot_5.jpg", type: MediaType.Image },
            { source: "/images/games/Bomberman/Screenshot_6.jpg", type: MediaType.Image },
            { source: "/images/games/Bomberman/Screenshot_7.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Super Mario Bros",
        description: "Super Mario Bros (1985), world 1-1 remake.\nAimed to be as similar to the original as possible.",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "Solo dev",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/EdwardSparksDev/MonoBehaviour" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1j_O8uuqJWQMGOD1GBKsBZOUqhK4zmqUj?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/SuperMarioBros/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/SuperMarioBros/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/SuperMarioBros/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/SuperMarioBros/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/SuperMarioBros/Screenshot_5.jpg", type: MediaType.Image },
            { source: "/images/games/SuperMarioBros/Screenshot_6.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Descent",
        description: "Descent (1995), level 1 remake.\nPilot your ship through tunnels to defeat the enemy drones!",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "6 people",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "unavailable" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1aA3dmQLn7ywAcmtzEWww1B9-Zy5-i15A?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/Descent/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/Descent/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/Descent/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/Descent/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/Descent/Screenshot_5.jpg", type: MediaType.Image },
            { source: "/images/games/Descent/Screenshot_6.jpg", type: MediaType.Image }
        ],
    },
    {
        name: "Crossy Road",
        description: "Crossy Road (2009) remake.\nStore skins can influence the map's theme.",
        platforms: [Platform.Windows],
        engine: GameEngine.Unity5,
        teamsize: "6 people",
        status: Status.Completed,
        links: [
            { source: LinkImageSource.Github, url: "unavailable" },
            { source: LinkImageSource.Download, url: "https://drive.google.com/drive/folders/1ojfQ6HI_v_dDFZRDEQ_L62W6Eb_9CSu3?usp=drive_link" }
        ],
        media: [
            { source: "/images/games/CrossyRoad/Screenshot_1.jpg", type: MediaType.Image },
            { source: "/images/games/CrossyRoad/Screenshot_2.jpg", type: MediaType.Image },
            { source: "/images/games/CrossyRoad/Screenshot_3.jpg", type: MediaType.Image },
            { source: "/images/games/CrossyRoad/Screenshot_4.jpg", type: MediaType.Image },
            { source: "/images/games/CrossyRoad/Screenshot_5.jpg", type: MediaType.Image }
        ],
    }
];