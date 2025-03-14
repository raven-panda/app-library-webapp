import {useBrowseBooks} from "@/hook/api/Book.ts";
import CollectionUtils from "@/lib/utils/CollectionUtils.ts";
import {Link, useSearchParams} from "react-router-dom";
import {IBookGlobal} from "@/lib/types/Book.ts";
import {useTranslation} from "react-i18next";
import {API_FILE} from "@/lib/Api.ts";
import './style.scss';
import DataLoader from "@/lib/components/DataLoader.tsx";

export default function BrowsePage() {
  const { t } = useTranslation();
  const { books, isLoading } = useBrowseBooks();
  const [searchParams] = useSearchParams();

  return <DataLoader isLoading={isLoading}>
    <section>
      {CollectionUtils.isEmpty(books) ?
        <h1>{t('browsePage.noResults')} <Link to={""} className="link">{t('browsePage.clearSearch')}</Link></h1>
        : <>
          <h1>{searchParams.size > 0 ? "Produits correspondant à votre recherche" : "Tous nos produits"}</h1>
          <div className='ebr_browse-page-content'>{books?.map(book => <BookCard key={book.id} book={book}></BookCard>)}</div>
        </>}
    </section>
  </DataLoader>;
}

function BookCard({ book }: { book: IBookGlobal; }) {
  const { t } = useTranslation();

  return <Link to={`/book/${book.id}`}>
    <article className="ebr_book-card">
      <img width={130} height={180} alt={book.title} src={API_FILE.replace(':id', book.coverFileId)}/>
      <div>
        <h2>{book.title}</h2>
        <p><span className="ebr_book-card-prop">{t('author')} :</span> {book.authorFullName}</p>
        <p><span className="ebr_book-card-prop">{t('editor')} :</span> {book.editor}</p>
        <p><span className="ebr_book-card-prop">{t('note')} :</span> {book.averageRate} ({book.reviews} {t('reviews')})</p>
        <p><span className="ebr_book-card-prop">{t('price')} :</span> {book.price}€</p>
      </div>
    </article>
  </Link>;
}
