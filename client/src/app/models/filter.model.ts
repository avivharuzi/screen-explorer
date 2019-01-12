export class Filter {
  public year: string;
  public sortBy: string;
  public genres: string;
  public keywords: string;

  public constructor(
    year: string = '', sortBy: string = '', genres: string = '', keywords: string = ''
  ) {
    this.year = year;
    this.sortBy = sortBy;
    this.genres = genres;
    this.keywords = keywords;
  }
}
