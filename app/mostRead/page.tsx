interface MostReadNewsResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  slug: string;
  topicId: string;
  title: string;
  page: number;
  pageCount: number;
  data: MostReadNewsData[];
}

export interface MostReadNewsData {
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

const mostReadDataPromise = async ():Promise<MostReadNewsResponse> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  if (!res.ok) {
    throw new Error("Failed to fetch politics news");
  }

  return res.json();
};

export default async function MostReadPage() {
    const mostReadData = await mostReadDataPromise();
    const mostReadNews = await mostReadData.data; 

  return<>
  <div className="border border-gray-200 rounded-lg my-6 mx-4 p-4 ">
    <h2 className="text-2xl font-bold ">সর্বাধিক পঠিত</h2>
    {
        mostReadNews.map((news,index) => <div key={news.id} className="flex gap-4  text-xl hover:tex-red-700 hover:bg-gray-100 p-4 rounded-xl duration-200 items-center">
            <h3 className="text-red-700" >{index+1}</h3>
            <h3>{news.title}</h3>
        </div>)
    }
  </div>
  </>;
}
