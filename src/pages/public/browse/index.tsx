import {useBrowseBooks} from "../../../hook/api/Book";
import {useEffect} from "react";

export default function BrowsePage() {
  const { books } = useBrowseBooks();

  useEffect(() => {
    console.log(books);
  }, [books]);

  return <></>;
}
