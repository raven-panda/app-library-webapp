import { IBook, IBookGlobal } from '@/lib/types/Book.ts';
import UrlTransformer from '@/service/UrlTransformer.ts';
import { URLSearchParams } from 'node:url';
import { ApiCall } from '@/service/actions/Action.ts';
import { API_BOOK_BY_ID, API_BOOK_SEARCH } from '@/lib/Api.ts';
import { ApiResponse } from '@/lib/types/ApiResponse.ts';
import books_fixture from '@/_fixtures/books/all.ts';
import { ISearchBooks } from '@/lib/types/dto/Books.ts';

const isFixturesEnabled = import.meta.env.VITE_ENABLE_FIXTURES === 'true';

interface IBookService {
  getById(id: string): Promise<ApiResponse<IBook>>;
  search(queryParams: URLSearchParams): Promise<ApiResponse<IBookGlobal[]>>;
}

class BooksService implements IBookService {
  async getById(id: string): Promise<ApiResponse<IBook>> {
    return ApiCall().get(API_BOOK_BY_ID.replace(':id', id));
  }

  async search(
    queryParams: URLSearchParams,
  ): Promise<ApiResponse<IBookGlobal[]>> {
    const transformedQuery =
      UrlTransformer.transformSearchBooksQuery(queryParams);
    return await ApiCall().get(API_BOOK_SEARCH, transformedQuery);
  }
}

class BooksService_Mock implements IBookService {
  private processSearchAll(searchString: string, book: IBook): boolean {
    return (
      (
        book.author.firstName.toLowerCase() +
        ' ' +
        book.author.lastName.toLowerCase()
      ).includes(searchString) ||
      book.title.toLowerCase().includes(searchString) ||
      book.editor.toLowerCase().includes(searchString) ||
      book.isbn.toLowerCase().includes(searchString)
    );
  }

  async getById(id: string): Promise<ApiResponse<IBook>> {
    const foundBook = books_fixture.find((book) => book.id === id);

    return {
      data: foundBook,
      status: foundBook ? 200 : 404,
    };
  }

  async search(
    queryParams: URLSearchParams,
  ): Promise<ApiResponse<IBookGlobal[]>> {
    const searchQuery: ISearchBooks =
      UrlTransformer.transformSearchBooksQuery(queryParams);

    return {
      data: books_fixture
        .filter(
          (book) =>
            (!searchQuery.searchAll ||
              this.processSearchAll(
                searchQuery.searchAll.toLowerCase(),
                book,
              )) &&
            (!searchQuery.author ||
              (
                book.author.firstName.toLowerCase() +
                ' ' +
                book.author.lastName.toLowerCase()
              ).includes(searchQuery.author.toLowerCase())) &&
            (!searchQuery.title ||
              book.title
                .toLowerCase()
                .includes(searchQuery.title.toLowerCase())) &&
            (!searchQuery.editor ||
              book.editor
                .toLowerCase()
                .includes(searchQuery.editor.toLowerCase())) &&
            (!searchQuery.isbn ||
              book.isbn
                .toLowerCase()
                .includes(searchQuery.isbn.toLowerCase())) &&
            (!searchQuery.genre || book.genre.includes(searchQuery.genre)) &&
            (!searchQuery.themes ||
              book.themes.some((theme) =>
                searchQuery.themes?.includes(theme),
              )) &&
            (!searchQuery.targetAudience ||
              book.targetAudience.includes(searchQuery.targetAudience)) &&
            (!searchQuery.language ||
              book.languageCode.includes(searchQuery.language.toLowerCase())) &&
            (!searchQuery.minReviewsNumber ||
              book.reviews >= searchQuery.minReviewsNumber) &&
            (!searchQuery.priceRange ||
              (book.price >= searchQuery.priceRange[0] &&
                book.price < searchQuery.priceRange[1])),
        )
        .map((book) => ({
          id: book.id ?? '',
          authorFullName: book.author.firstName + ' ' + book.author.lastName,
          reviews: book.reviews,
          editor: book.editor,
          title: book.title,
          price: book.price,
          isForRent: book.isForRent,
          coverFileId: book.coverFileId,
          averageRate: book.averageRate,
        })),
      status: 200,
    };
  }
}

const booksService = isFixturesEnabled
  ? new BooksService_Mock()
  : new BooksService();
export default booksService;
