import {useCallback, useEffect, useState} from "react";
import booksService from "@/service/actions/BooksService.ts";
import {useSearchParams} from "react-router-dom";
import {IBookGlobal} from "@/lib/types/Book.ts";

export const useBrowseBooks = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState<IBookGlobal[]>();

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
