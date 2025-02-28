import { useSearchParams } from "react-router-dom";
import { useBrowseBooks } from "../../../hook/api/Book";
import { useEffect } from "react";

export default function BrowsePage() {
  const [searchParams] = useSearchParams();
  const { books, setQuery } = useBrowseBooks();

  useEffect(() => {
    setQuery(searchParams);    
  }, [setQuery, searchParams]);

  useEffect(() => {
    console.log({books});
  }, [books]);

  return <>Browse</>;
}