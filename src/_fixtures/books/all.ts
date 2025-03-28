import { IBook } from "@/lib/types/Book";

const books_fixture: IBook[] = [
  {
    "id": "2fd73c2e-ca36-4313-a961-4980e5587533",
    "title": "The Mysterious Island",
    "author": { "firstName": "Jules", "lastName": "Verne" },
    "averageRate": 4.7,
    "coverFileId": "fixture-book.jpg",
    "isForRent": false,
    "price": 10,
    "description": "Lorem ipsum",
    "reviews": 1200,
    "isbn": "978-2-07-036002-4",
    "editor": "Penguin",
    "genre": "NOVEL",
    "themes": [
      "TRAVEL_EXPLORATION"
    ],
    "otherThemes": null,
    "format": "PAPERBACK",
    "isPhysicalFormat": true,
    "languageCode": "fr",
    "targetAudience": "ENTERTAINMENT"
  },
  {
    "id": "ec31cc8a-3be8-4eab-8497-b0648d6c5678",
    "title": "1984",
    "author": { "firstName": "George", "lastName": "Orwell" },
    "averageRate": 4.8,
    "coverFileId": "fixture-book.jpg",
    "isForRent": true,
    "price": 6,
    "description": "Lorem ipsum",
    "reviews": 2300,
    "isbn": "978-0-452-28423-4",
    "editor": "Secker & Warburg",
    "genre": "NOVEL",
    "themes": [
      "LIBERTY_AND_OPPRESSION"
    ],
    "otherThemes": null,
    "format": "POCKET",
    "isPhysicalFormat": true,
    "languageCode": "en",
    "targetAudience": "ACADEMIC"
  },
  {
    "id": "ae78cc5b-3be8-4eab-8497-b0648d6c5678",
    "title": "The Divine Comedy",
    "author": { "firstName": "Dante", "lastName": "Alighieri" },
    "averageRate": 4.6,
    "coverFileId": "fixture-book.jpg",
    "isForRent": false,
    "price": 12,
    "description": "Lorem ipsum",
    "reviews": 1500,
    "isbn": "978-0-14-044895-5",
    "editor": "Penguin Classics",
    "genre": "POESY",
    "themes": [
      "GOOD_AND_EVIL"
    ],
    "otherThemes": null,
    "format": "EPUB",
    "isPhysicalFormat": false,
    "languageCode": "it",
    "targetAudience": "ACADEMIC"
  },
  {
    "id": "d7f3adca-516c-46d0-b6dc-0e4cf936c36a",
    "title": "The Little Prince",
    "author": { "firstName": "Antoine", "lastName": "de Saint-Exupéry" },
    "averageRate": 4.9,
    "coverFileId": "fixture-book.jpg",
    "isForRent": true,
    "price": 8,
    "description": "Lorem ipsum",
    "reviews": 3400,
    "isbn": "978-2-07-040850-2",
    "editor": "Gallimard",
    "genre": "CHILDREN",
    "themes": [
      "DREAM_IMAGINARY"
    ],
    "otherThemes": null,
    "format": "PAPERBACK",
    "isPhysicalFormat": true,
    "languageCode": "fr",
    "targetAudience": "ENTERTAINMENT"
  },
  {
    "id": "a7c39663-b795-4ece-bd27-3880f9e28c9f",
    "title": "Frankenstein",
    "author": { "firstName": "Mary", "lastName": "Shelley" },
    "averageRate": 4.5,
    "coverFileId": "fixture-book.jpg",
    "isForRent": false,
    "price": 9,
    "description": "Lorem ipsum",
    "reviews": 1800,
    "isbn": "978-0-19-953715-0",
    "editor": "Oxford University Press",
    "genre": "NOVEL",
    "themes": [
      "SCIENCE_PROGRESS_AND_EXCESSES"
    ],
    "otherThemes": null,
    "format": "EPUB",
    "isPhysicalFormat": false,
    "languageCode": "en",
    "targetAudience": "ACADEMIC"
  },
  {
    "id": "8d7d1635-51a9-44f6-8475-065045743e1e",
    "title": "Moby Dick",
    "author": { "firstName": "Herman", "lastName": "Melville" },
    "averageRate": 4.4,
    "coverFileId": "fixture-book.jpg",
    "isForRent": true,
    "price": 7,
    "description": "Lorem ipsum",
    "reviews": 2000,
    "isbn": "978-0-553-21311-7",
    "editor": "Bantam Classics",
    "genre": "NOVEL",
    "themes": [
      "DESTINY_FREEWILL"
    ],
    "otherThemes": null,
    "format": "PAPERBACK",
    "isPhysicalFormat": true,
    "languageCode": "en",
    "targetAudience": "ENTERTAINMENT"
  },
  {
    "id": "681fea09-24a3-42c6-ab14-0ea6e21eccea",
    "title": "Brave New World",
    "author": { "firstName": "Aldous", "lastName": "Huxley" },
    "averageRate": 4.7,
    "coverFileId": "fixture-book.jpg",
    "isForRent": false,
    "price": 10,
    "description": "Lorem ipsum",
    "reviews": 3100,
    "isbn": "978-0-06-085052-4",
    "editor": "HarperCollins",
    "genre": "NOVEL",
    "themes": [
      "SCIENCE_PROGRESS_AND_EXCESSES"
    ],
    "otherThemes": null,
    "format": "POCKET",
    "isPhysicalFormat": true,
    "languageCode": "en",
    "targetAudience": "ACADEMIC"
  }
];

export default books_fixture;
