import {useCallback, useEffect, useState} from "react";
import {IBook, IBookGlobal} from "@/lib/types/Book.ts";
import booksService from "@/service/actions/BooksService.ts";
import {useSearchParams} from "react-router-dom";

export const useBooksGlobal = () => {
  const [booksGlobal, setBooksGlobal] = useState<IBookGlobal[]>([]);

  useEffect(() => {
    booksService.getGlobal().then(res => res.data && setBooksGlobal(res.data));
  }, []);

  return { booksGlobal, setBooksGlobal };
};

export const useBrowseBooks = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState<IBook[]>();

  const search = useCallback(async () => {
    const res = await booksService.search(searchParams);
    if (res.data)
      setBooks(res.data);
  }, [searchParams]);

  useEffect(() => {
    search();
  }, [search]);

  return { books };

};
