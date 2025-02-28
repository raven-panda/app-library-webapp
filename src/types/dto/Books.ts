export interface ISearchBooks {
  searchAll?: string|null;
  author?: string|null;
  title?: string|null;
  editor?: string|null;
  isbn?: string|null;
  genre?: string|null;
  theme?: string|null;
  targetAudience?: string|null;
  language?: string|null;
  minReviewsNumber?: number|null;
  priceRange?: number[]|null;
}
