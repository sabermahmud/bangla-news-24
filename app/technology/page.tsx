import Image from "next/image";

interface TechnologyNewsResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  slug: string;
  topicId: string;
  title: string;
  page: number;
  pageCount: number;
  data: TechnologyNewsData[];
}

export interface TechnologyNewsData {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const technologyNewsPromise = async ():Promise<TechnologyNewsResponse> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/category/health");
  if (!res.ok) {
    throw new Error("Failed to fetch technology news");
  }
  const data = await res.json();
  return data;
};

export default async function TechnologyPage() {
    const technologyData = await technologyNewsPromise();
  const technologyNews = technologyData.data;
    
    return 
}