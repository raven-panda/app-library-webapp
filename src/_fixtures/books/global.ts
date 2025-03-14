import { IBookGlobal } from "@/lib/types/Book";

const booksGlobal_fixture: IBookGlobal[] = [
  {
    "id": 1,
    "title": "Lorem ipsum",
    "authorFullName": "John Doe",
    "averageRate": 4.5,
    "coverFileId": "fixture-book.jpg",
    "isForRent": true,
    "price": 4,
    "reviews": 750
  },
  {
    "id": 2,
    "title": "Lorem ipsum dolor sit",
    "authorFullName": "Jeanne Doe",
    "averageRate": 3,
    "coverFileId": "fixture-book.jpg",
    "isForRent": true,
    "price": 2.3,
    "reviews": 180
  },
  {
    "id": 3,
    "title": "Phasellus a pulvinar metus",
    "authorFullName": "Patrick Test",
    "averageRate": 5,
    "coverFileId": "fixture-book.jpg",
    "isForRent": false,
    "price": 20,
    "reviews": 200
  }
];

export default booksGlobal_fixture;
