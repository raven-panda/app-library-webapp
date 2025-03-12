import {IBooks, IBooksGlobal} from "@/lib/types/Book.ts";
import booksGlobal_fixture from "@/_fixtures/books/global.ts";
import books_fixture from "@/_fixtures/books/all.ts";
import UrlTransformer from "@/service/UrlTransformer.ts";

class BooksServiceMock {

    public async getGlobal(): Promise<IBooksGlobal[]> {
        return Promise.resolve(booksGlobal_fixture);
    }

    public async search(queryParams: URLSearchParams): Promise<IBooks[]> {
        const books = books_fixture;
        const transformedQuery = UrlTransformer.transformSearchBooksQuery(queryParams);

        return Promise.resolve(
            books.filter(book =>
                (!transformedQuery.author || (book.author.firstName.toLowerCase() + " " + book.author.lastName.toLowerCase()).includes(transformedQuery.author.toLowerCase())) &&
                (!transformedQuery.title || book.title.toLowerCase().includes(transformedQuery.title.toLowerCase())) &&
                (!transformedQuery.editor || book.editor.toLowerCase().includes(transformedQuery.editor.toLowerCase())) &&
                (!transformedQuery.isbn || book.isbn.toLowerCase().includes(transformedQuery.isbn.toLowerCase())) &&
                (!transformedQuery.genre || book.genre.includes(transformedQuery.genre)) &&
                (!transformedQuery.theme || book.theme.includes(transformedQuery.theme)) &&
                (!transformedQuery.targetAudience || book.targetAudience.includes(transformedQuery.targetAudience)) &&
                (!transformedQuery.language || book.languageCode.includes(transformedQuery.language.toLowerCase())) &&
                (!transformedQuery.minReviewsNumber || book.reviews >= transformedQuery.minReviewsNumber)
            )
        );
    }

}
const booksServiceMock = new BooksServiceMock();
export default booksServiceMock;
