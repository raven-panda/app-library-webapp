import { IBookGlobal } from "@/lib/types/Book";

const booksGlobal_fixture: IBookGlobal[] = [
  {
    "id": "ae78cc5b-3be8-4eab-8497-b0648d6c5678",
    "title": "Lorem ipsum",
    "authorFullName": "John Doe",
    "averageRate": 4.5,
    "coverFileId": "fixture-book.jpg",
    "isForRent": true,
    "editor": "Test editor",
    "price": 4,
    "reviews": 750
  },
  {
    "id": "ec31cc8a-3be8-4eab-8497-b0648d6c5678",
    "title": "Lorem ipsum dolor sit",
    "authorFullName": "Jeanne Doe",
    "averageRate": 3,
    "coverFileId": "fixture-book.jpg",
    "isForRent": true,
    "editor": "Test editor",
    "price": 2.3,
    "reviews": 180
  },
  {
    "id": "2fd73c2e-ca36-4313-a961-4980e5587533",
    "title": "Phasellus a pulvinar metus",
    "authorFullName": "Patrick Test",
    "averageRate": 5,
    "coverFileId": "fixture-book.jpg",
    "isForRent": false,
    "editor": "Test editor",
    "price": 20,
    "reviews": 200
  }
];

export default booksGlobal_fixture;
