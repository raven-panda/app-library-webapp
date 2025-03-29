export type BookGenreType =
  | 'NOVEL'
  | 'SHORT_STORY'
  | 'POESY'
  | 'DRAMA'
  | 'ESSAY'
  | 'BIOGRAPHY'
  | 'AUTOBIOGRAPHY'
  | 'TALE'
  | 'COMIC'
  | 'MANGA'
  | 'TRAVEL_STORY'
  | 'CHILDREN'
  | 'OTHER';

export const BookGenreLabels: Record<BookGenreType, string> = {
  NOVEL: 'bookGenre.novel',
  SHORT_STORY: 'bookGenre.shortStory',
  POESY: 'bookGenre.poesy',
  DRAMA: 'bookGenre.drama',
  ESSAY: 'bookGenre.essay',
  BIOGRAPHY: 'bookGenre.biography',
  AUTOBIOGRAPHY: 'bookGenre.autobiography',
  TALE: 'bookGenre.tale',
  COMIC: 'bookGenre.comic',
  MANGA: 'bookGenre.manga',
  TRAVEL_STORY: 'bookGenre.travelStory',
  CHILDREN: 'bookGenre.children',
  OTHER: 'bookGenre.other',
};
