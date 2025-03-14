import {useBookById} from "@/hook/api/Book.ts";

export default function BookPage({ id }: { id: string; }) {
  const { book } = useBookById(id);
  return <>{book?.title}</>;
}
