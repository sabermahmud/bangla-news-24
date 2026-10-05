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

const technologyNewsPromise = async (): Promise<TechnologyNewsResponse> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/category/technology");
  if (!res.ok) {
    throw new Error("Failed to fetch technology news");
  }
  const data = await res.json();
  return data;
};

export default async function TechnologyPage() {
  const technologyData = await technologyNewsPromise();
  const technologyNews = technologyData.data;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-red-700" />

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            প্রযুক্তি
          </h1>
        </div>

        <div className="mt-4 h-px w-full bg-base-300" />
      </header>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologyNews.map((news) => (
          <article
            key={news.id}
            className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <figure className="relative aspect-16/10 overflow-hidden">
              <Image
                src={news.imageUrl}
                alt={news.imageAlt || news.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category */}
              <span className="absolute left-4 top-4 rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white shadow-md">
                {news.category}
              </span>
            </figure>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5">
              <h2 className="line-clamp-2 text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-red-700">
                {news.title}
              </h2>

              <p className="line-clamp-3 text-sm leading-6 text-base-content/65">
                {news.description}
              </p>

              {/* Meta */}
              <div className="mt-1 flex items-center justify-between border-t border-base-300 pt-3">
                <time className="text-xs text-base-content/50">
                  {new Date(news.firstPublished).toLocaleDateString("bn-BD", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>

                <span className="text-xs font-medium text-base-content/50">
                  {news.source}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
