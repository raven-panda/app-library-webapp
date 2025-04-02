const { VITE_API_BASE_URL, VITE_WEBAPP_BASE_URL } = import.meta.env;

const isFixturesEnabled = import.meta.env.VITE_ENABLE_FIXTURES === 'true';

export const API_BOOK = `${VITE_API_BASE_URL}/book`;
export const API_BOOK_BY_ID = `${VITE_API_BASE_URL}/book/:id`;
export const API_BOOK_SEARCH = `${VITE_API_BASE_URL}/book/search`;

export const API_FILE = isFixturesEnabled
  ? `${VITE_WEBAPP_BASE_URL}/_fixtures/file/book/:id`
  : `${VITE_API_BASE_URL}/file/:id`;
