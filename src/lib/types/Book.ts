import { IAuthor } from "./Author";
import { BookFormatType } from "./enums/book/BookFormatEnum";
import { BookGenreType } from "./enums/book/BookGenreEnum";
import { BookThemeType } from "./enums/book/BookThemeEnum";
import { LanguageCode } from "iso-639-1";
import { TargetAudienceType } from "./enums/TargetAudienceEnum";

export interface IBook {
  id?: string;
  isbn: string;
  title: string;
  author: IAuthor;
  /** @url */
  coverFileId: string;
  editor: string;
  genre: BookGenreType;
  theme: BookThemeType;
  otherTheme: string|null;
  format: BookFormatType;
  isPhysicalFormat: boolean;
  languageCode: LanguageCode;
  targetAudience: TargetAudienceType;
  reviews: number;
  averageRate: number;
  isForRent: boolean;
  price: number;
}

export interface IBookGlobal {
  id: string;
  title: string;
  authorFullName: string;
  editor: string;
  /** @url */
  coverFileId: string;
  reviews: number;
  averageRate: number;
  isForRent: boolean;
  price: number;
}
