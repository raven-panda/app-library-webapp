export type BookThemeType = 
| "LOVE_AND_PASSION"
| "FRIENDSHIP_AND_HUMAN_RELATION"
| "QUEST_FOR_IDENTITY"
| "GOOD_AND_EVIL"
| "LIBERTY_AND_OPPRESSION"
| "TRAVEL_EXPLORATION"
| "WAR_CONSEQUENCES"
| "JUSTICE_INJUSTICE"
| "FANTASY_AND_SUPERNATURAL"
| "SCIENCE_PROGRESS_AND_EXCESSES"
| "DREAM_IMAGINARY"
| "TIME_MEMORY"
| "LONELINESS_ISOLATION"
| "FAMILLY_HERITAGE"
| "DESTINY_FREEWILL"
| "OTHER";

export const BookThemeLabels: Record<BookThemeType, string> = {
  LOVE_AND_PASSION: "bookTheme.loveAndPassion",
  FRIENDSHIP_AND_HUMAN_RELATION: "bookTheme.friendshipAndHumanRelation",
  QUEST_FOR_IDENTITY: "bookTheme.questForIdentity",
  GOOD_AND_EVIL: "bookTheme.goodAndEvil",
  LIBERTY_AND_OPPRESSION: "bookTheme.libertyAndOppression",
  TRAVEL_EXPLORATION: "bookTheme.travelExploration",
  WAR_CONSEQUENCES: "bookTheme.warConsequences",
  JUSTICE_INJUSTICE: "bookTheme.justiceInjustice",
  FANTASY_AND_SUPERNATURAL: "bookTheme.fantasyAndSupernatural",
  SCIENCE_PROGRESS_AND_EXCESSES: "bookTheme.scienceProgressAndExcesses",
  DREAM_IMAGINARY: "bookTheme.dreamImaginary",
  TIME_MEMORY: "bookTheme.timeMemory",
  LONELINESS_ISOLATION: "bookTheme.lonelinessIsolation",
  FAMILLY_HERITAGE: "bookTheme.famillyHeritage",
  DESTINY_FREEWILL: "bookTheme.destinyFreewill",
  OTHER: "bookTheme.other"
};