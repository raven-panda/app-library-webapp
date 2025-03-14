import {useEffect, useState} from "react";
import booksService from "@/service/actions/BooksService.ts";
import {useSearchParams} from "react-router-dom";
import {IBook, IBookGlobal} from "@/lib/types/Book.ts";

export const useBrowseBooks = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState<IBookGlobal[]>();

  useEffect(() => {
    booksService.search(searchParams).then(res => res.data && setBooks(res.data));
  }, [searchParams]);

  return { books };

};

export const useBookById = (id: string) => {
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    booksService.getById(id).then(res => res.data && setBook(res.data));
  }, [id]);

  return { book };
};
