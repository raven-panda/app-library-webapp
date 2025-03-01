import {ISearchBooks} from "../types/dto/Books.ts";

export default class UrlTransformer {

    private static safeParseString(str: string|null): string | null {
        if (!str)
            return null;

        try {
            return decodeURIComponent(str);
        } catch (e) {
            console.error("Could not parse URL parameter of expected type string", e);
            return null;
        }
    }

    private static safeParseNumber(str: string|null): number | null {
        if (!str)
            return null;

        try {
            const parsedInt = parseInt(decodeURIComponent(str));
            if (isNaN(parsedInt))
                return null;

            return parsedInt;
        } catch (e) {
            console.error("Could not parse URL parameter of expected type number", e);
            return null;
        }
    }

    private static safeParseArray<ArrayType>(str: string|null, parseFn: (str: string|null) => ArrayType | null): ArrayType[] | null {
        if (!str)
            return null;

        try {
            return decodeURIComponent(str).split(",")
                .map(value => parseFn(value))
                .filter(v => v !== null);
        } catch (e) {
            console.error("Could not parse URL parameter of expected type array", e);
            return null;
        }
    }

    public static transformSearchBooksQuery(searchParams: URLSearchParams): ISearchBooks {
        return {
            searchAll: this.safeParseString(searchParams.get("searchAll")),
            author: this.safeParseString(searchParams.get("author")),
            editor: this.safeParseString(searchParams.get("editor")),
            genre: this.safeParseString(searchParams.get("genre")),
            isbn: this.safeParseString(searchParams.get("isbn")),
            language: this.safeParseString(searchParams.get("language")),
            priceRange: this.safeParseArray(searchParams.get("priceRange"), this.safeParseNumber),
            targetAudience: this.safeParseString(searchParams.get("targetAudience")),
            theme: this.safeParseString(searchParams.get("theme")),
            title: this.safeParseString(searchParams.get("title")),
            minReviewsNumber: this.safeParseNumber(searchParams.get("minReviewsNumber")),
        };
    }

}
