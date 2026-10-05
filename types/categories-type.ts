

 export interface DataType {
    slug: string,
    title: string,
    topicId: null | string,
    url: string,
    scrapable: boolean,
}

export interface CategoriesType {
  success: boolean;
  count: number;
  cachedAt: string;
  data: DataType[]
}
