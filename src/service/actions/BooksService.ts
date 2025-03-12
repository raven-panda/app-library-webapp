import {IBooks, IBooksGlobal} from "@/lib/types/Book.ts";
import UrlTransformer from "@/service/UrlTransformer.ts";
import {URLSearchParams} from "node:url";
import { ApiCall } from "@/service/actions/Action.ts";
import {API_BOOK_GLOBAL, API_BOOK_SEARCH} from "@/lib/Api.ts";
import {ApiResponse} from "@/lib/types/ApiResponse.ts";

class BooksService {
    async getGlobal(): Promise<ApiResponse<IBooksGlobal[]>> {
        return ApiCall().get(API_BOOK_GLOBAL);
    }

    async search(queryParams: URLSearchParams): Promise<ApiResponse<IBooks[]>> {
        const transformedQuery = UrlTransformer.transformSearchBooksQuery(queryParams);
        return await ApiCall().get(API_BOOK_SEARCH, transformedQuery);
    }
}

const booksService = new BooksService();
export default booksService;
