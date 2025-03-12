import {useBrowseBooks} from "@/hook/api/Book.ts";
import {useEffect} from "react";
import CollectionUtils from "@/lib/utils/CollectionUtils.ts";
import {Link} from "react-router-dom";

export default function BrowsePage() {
  const { books } = useBrowseBooks();

  useEffect(() => {
    console.log({books});
  }, [books]);

  if (CollectionUtils.isEmpty(books))
    return <>Aucun résultat. Essayer de chercher autre chose. <Link to={""} className="link">Effacer la recherche</Link></>;
  return <></>;
}
