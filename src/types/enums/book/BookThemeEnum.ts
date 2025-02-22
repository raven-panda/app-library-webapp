export type BookThemeType = 
| "LOVE_AND_PASSION"
| "FRIENDSHIP_AND_HUMAN_RELATION"
| "QUEST_FOR_INDENTITY"
| "GOOD_AND_BAD"
| "LIBERTY_AND_OPPRESION"
| "TRAVEL_EXPLORATION"
| "WAR_CONSEQUENCES"
| "JUSTICE_INJUSTICE"
| "FANTASTIC_SUPERNATURAL"
| "SCIENCE_PROGRESS_AND_EXCESSES"
| "DREAM_IMAGINARY"
| "TIME_MEMORY"
| "LONELINESS_ISOLATION"
| "FAMILLY_HERITAGE"
| "DESTINY_FREEWILL"
| "OTHER";

export const BookThemeLabels: Record<BookThemeType, string> = {
  LOVE_AND_PASSION: "L'amour et la passion (romance, relations, désir)",
  FRIENDSHIP_AND_HUMAN_RELATION: "L'mitié et les relations humaines (loyauté, trahison, fraternité)",
  QUEST_FOR_INDENTITY: "La quête d’identité (découverte de soi, transformation personnelle)",
  GOOD_AND_BAD: "Le bien et le mal (moralité, dilemmes éthiques)",
  LIBERTY_AND_OPPRESION: "La liberté et l’oppression (dictatures, rébellions, quête d’indépendance)",
  TRAVEL_EXPLORATION: "Le voyage et l’exploration (découverte de nouvelles terres, exil)",
  WAR_CONSEQUENCES: "La guerre et ses conséquences (batailles, traumatismes, résistances)",
  JUSTICE_INJUSTICE: "La justice et l’injustice (procès, corruption, vengeance)",
  FANTASTIC_SUPERNATURAL: "Le fantastique et le surnaturel (créatures mythiques, magie, paranormal)",
  SCIENCE_PROGRESS_AND_EXCESSES: "Le progrès scientifique et ses dérives (cyberpunk, IA, clonage)",
  DREAM_IMAGINARY: "Le rêve et l’imaginaire (mondes oniriques, illusions, fictions dans la fiction)",
  TIME_MEMORY: "Le temps et la mémoire (nostalgie, flashbacks, boucle temporelle)",
  LONELINESS_ISOLATION: "La solitude et l’isolement (exil, marginalité, survie en solitaire)",
  FAMILLY_HERITAGE: "La famille et l’héritage (relations familiales, secrets de famille)",
  DESTINY_FREEWILL: "Le destin et le libre arbitre (fatalité, choix, prédictions)",
  OTHER: "Autre"
};