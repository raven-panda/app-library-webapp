const { VITE_API_BASE_URL, VITE_WEBAPP_BASE_URL, VITE_ENABLE_FIXTURES } = import.meta.env;

const isFixturesEnabled = VITE_ENABLE_FIXTURES === "true";
export const API_BOOK_FILE_URL = `${isFixturesEnabled ? VITE_WEBAPP_BASE_URL + "/_fixtures/" : VITE_API_BASE_URL}/file/book/`;