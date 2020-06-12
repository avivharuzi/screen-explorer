export interface HttpResponsePagination<T> {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}
