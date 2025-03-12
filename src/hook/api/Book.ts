import {useCallback, useEffect, useState} from "react";
import {IBooks, IBooksGlobal} from "@/lib/types/Book.ts";
import booksGlobal_fixture from "@/_fixtures/books/global";
import booksServiceMock from "@/_mock/BooksServiceMock.ts";
import {useSearchParams} from "react-router-dom";

const isFixturesEnabled = import.meta.env.VITE_ENABLE_FIXTURES === "true";

export const useBooksGlobal = () => {
  const [booksGlobal, setBooksGlobal] = useState<IBooksGlobal[]>([]);

  useEffect(() => {
    if (isFixturesEnabled)
      setBooksGlobal(booksGlobal_fixture);
  }, []);

  return { booksGlobal, setBooksGlobal };
};

export const useBrowseBooks = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState<IBooks[]>();

  const search = useCallback(async () => {
    if (isFixturesEnabled) {
      const results = await booksServiceMock.search(searchParams);
      setBooks(results);
    }
  }, [searchParams]);

  useEffect(() => {
    search();
  }, [search]);

  return { books };

};
