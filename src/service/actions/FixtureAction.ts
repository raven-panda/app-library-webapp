import {ApiCallFnType, ApiCallWithTokenFnType} from "@/service/actions/Action.ts";
import {ApiResponse} from "@/lib/types/ApiResponse.ts";
import {API_BOOK, API_BOOK_GLOBAL} from "@/lib/Api.ts";
import books_fixture from "@/_fixtures/books/all.ts";
import booksGlobal_fixture from "@/_fixtures/books/global.ts";
import UrlTransformer from "@/service/UrlTransformer.ts";

export const ApiCall_Mock: ApiCallFnType = () => ({
  async get<TData>(url: string, params?: Record<string, any>): Promise<ApiResponse<TData>> {
    let finalUrl = url;
    if (params)
      finalUrl += "?" + UrlTransformer.encodeFromObject(params);

    return Promise.resolve({
      data: getMockGETDataWithUrl(finalUrl) as TData
    });
  },
  async post<TPayload, TData>(url: string, payload: TPayload): Promise<ApiResponse<TData>> {
    return Promise.resolve({
      data: getMockPOSTDataWithUrl(url, payload) as TData
    });
  }
});

export const ApiCallWithToken_Mock: ApiCallWithTokenFnType = (jwt: string) => ({
  async get<TData>(url: string, params?: Record<string, any>): Promise<ApiResponse<TData>> {
    let finalUrl = url;
    if (params)
      finalUrl += "?" + UrlTransformer.encodeFromObject(params);

    console.log(`Bearer ${jwt}`);
    return Promise.resolve({
      data: getMockGETDataWithUrl(finalUrl) as TData
    });
  },
  async post<TPayload, TData>(_url: string, payload: TPayload): Promise<ApiResponse<TData>> {
    console.log(`Bearer ${jwt}`);
    return Promise.resolve({
      data: {
        ...payload,
        id: "testId"
      } as TData
    });
  }
});

function getMockGETDataWithUrl(url: string): object[] | object {
  switch (url) {
    case API_BOOK:
      return books_fixture;
    case API_BOOK_GLOBAL:
      return booksGlobal_fixture;
    default:
      return {};
  }
}

function getMockPOSTDataWithUrl(url: string, payload: any): object[] | object {
  switch (url) {
    case API_BOOK:
      return books_fixture.filter(book =>
        (!payload.author || (book.author.firstName.toLowerCase() + " " + book.author.lastName.toLowerCase()).includes(payload.author.toLowerCase())) &&
        (!payload.title || book.title.toLowerCase().includes(payload.title.toLowerCase())) &&
        (!payload.editor || book.editor.toLowerCase().includes(payload.editor.toLowerCase())) &&
        (!payload.isbn || book.isbn.toLowerCase().includes(payload.isbn.toLowerCase())) &&
        (!payload.genre || book.genre.includes(payload.genre)) &&
        (!payload.theme || book.theme.includes(payload.theme)) &&
        (!payload.targetAudience || book.targetAudience.includes(payload.targetAudience)) &&
        (!payload.language || book.languageCode.includes(payload.language.toLowerCase())) &&
        (!payload.priceRange || (book.price >= payload.priceRange[0] && book.price <= payload.priceRange[1])) &&
        (!payload.minReviewsNumber || book.reviews >= payload.minReviewsNumber));
    default:
      return {};
  }
}
