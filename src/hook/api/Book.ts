import { useEffect, useState } from 'react';
import booksService from '@/service/actions/BooksService.ts';
import { useSearchParams } from 'react-router-dom';
import { IBook, IBookGlobal } from '@/lib/types/Book.ts';

export const useBrowseBooks = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState<IBookGlobal[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    booksService
      .search(searchParams)
      .then((res) => res.data && setBooks(res.data))
      .then(() => setIsLoading(false));
  }, [searchParams]);

  return { books, isLoading };
};

export const useBookById = (id: string) => {
  const [book, setBook] = useState<IBook>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    booksService
      .getById(id)
      .then((res) => res.data && setBook(res.data))
      .then(() => setIsLoading(false));
  }, [id]);

  return { book, isLoading };
};
