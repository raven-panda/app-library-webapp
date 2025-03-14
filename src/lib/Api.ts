const { VITE_API_BASE_URL } = import.meta.env;

export const API_BOOK = `${VITE_API_BASE_URL}/book`;
export const API_BOOK_BY_ID = `${VITE_API_BASE_URL}/book/:id`;
export const API_BOOK_GLOBAL = `${VITE_API_BASE_URL}/book/global`;
export const API_BOOK_SEARCH = `${VITE_API_BASE_URL}/book/search`;

export const API_FILE = `${VITE_API_BASE_URL}/file/:id`;
