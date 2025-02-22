import { useEffect, useState } from "react";
import { IBooksGlobal } from "../../types/Book";
import booksGlobal_fixture from "../../_fixtures/books/global";
const isFixturesEnabled = import.meta.env.VITE_ENABLE_FIXTURES === "true";

export const useBooksGlobal = () => {
  const [booksGlobal, setBooksGlobal] = useState<IBooksGlobal[]>([]);

  useEffect(() => {
    if (isFixturesEnabled)
      setBooksGlobal(booksGlobal_fixture);
  }, []);

  return { booksGlobal, setBooksGlobal };
};