import {useBookById} from "@/hook/api/Book.ts";
import DataLoader from "@/lib/components/DataLoader.tsx";

export default function BookPage({ id }: { id: string; }) {
  const { book, isLoading } = useBookById(id);

  return <DataLoader isLoading={isLoading}>
    <>{book?.title}</>
  </DataLoader>;
}
