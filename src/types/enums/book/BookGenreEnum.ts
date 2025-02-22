export type BookGenreType = 
| "NOVEL"
| "SHORT_STORY"
| "POESY"
| "DRAMA"
| "ESSAY"
| "BIOGRAPHY"
| "AUTOBIOGRAPHY"
| "TALE"
| "COMIC"
| "MANGA"
| "TRAVEL_STORY"
| "CHILDREN"
| "OTHER";

export const BookGenreLabels: Record<BookGenreType, string> = {
  NOVEL: "Roman",
  SHORT_STORY: "Nouvelle",
  POESY: "Poésie",
  DRAMA: "Théâtre",
  ESSAY: "Essai",
  BIOGRAPHY: "Biographie",
  AUTOBIOGRAPHY: "Autobiographie",
  TALE: "Conte",
  COMIC: "Bande dessiné, comics",
  MANGA: "Manga",
  TRAVEL_STORY: "Récit de voyage",
  CHILDREN: "Littérature jeuneusse",
  OTHER: "Autre",
};