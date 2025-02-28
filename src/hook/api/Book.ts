import { useCallback, useEffect, useState } from "react";
import { IBooks, IBooksGlobal } from "../../types/Book";
import booksGlobal_fixture from "../../_fixtures/books/global";
import { ISearchBooks } from "../../types/dto/Books";
import books_fixture from "../../_fixtures/books/all";
const isFixturesEnabled = import.meta.env.VITE_ENABLE_FIXTURES === "true";

export const useBooksGlobal = () => {
  const [booksGlobal, setBooksGlobal] = useState<IBooksGlobal[]>([]);

  useEffect(() => {
    if (isFixturesEnabled)
      setBooksGlobal(booksGlobal_fixture);
  }, []);

  return { booksGlobal, setBooksGlobal };
};

const safeParse = (value: string | null) => {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return value; // Retourne la valeur brute si ce n'est pas un JSON valide
  }
};

export const useBrowseBooks = () => {
  const [books, setBooks] = useState<IBooks[]>([]);

  const setQuery = useCallback((searchParams: URLSearchParams) => {
    const searchQuery: ISearchBooks = {
      author: safeParse(searchParams.get("author")),
      editor: safeParse(searchParams.get("editor")),
      genre: safeParse(searchParams.get("genre")),
      isbn: safeParse(searchParams.get("isbn")),
      language: safeParse(searchParams.get("language")),
      priceRange: safeParse(searchParams.get("priceRange")),
      targetAudience: safeParse(searchParams.get("targetAudience")),
      theme: safeParse(searchParams.get("theme")),
      title: safeParse(searchParams.get("title")),
      minReviewsNumber: searchParams.get("minReviewsNumber") ? parseInt(searchParams.get("minReviewsNumber")!, 10) : null,
    };

    if (isFixturesEnabled)
      setBooks(books_fixture.filter(book =>
        (!searchQuery.author || (book.author.firstName.toLowerCase() + " " + book.author.lastName.toLowerCase()).includes(searchQuery.author.toLowerCase())) &&
        (!searchQuery.title || book.title.toLowerCase().includes(searchQuery.title.toLowerCase())) &&
        (!searchQuery.editor || book.editor.toLowerCase().includes(searchQuery.editor.toLowerCase())) &&
        (!searchQuery.isbn || book.isbn.toLowerCase().includes(searchQuery.isbn.toLowerCase())) &&
        (!searchQuery.genre || book.genre.includes(searchQuery.genre)) &&
        (!searchQuery.theme || book.theme.includes(searchQuery.theme)) &&
        (!searchQuery.targetAudience || book.targetAudience.includes(searchQuery.targetAudience)) &&
        (!searchQuery.language || book.languageCode.includes(searchQuery.language.toLowerCase())) &&
        (!searchQuery.minReviewsNumber || book.reviews >= searchQuery.minReviewsNumber)
      ));
  }, []);

  return { books, setQuery };

};
