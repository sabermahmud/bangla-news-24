import { mainNewsDataType } from "@/types/mainNewsTypes";
import Image from "next/image";

export interface MainNewsProps {
  mainNews: mainNewsDataType[];
}

export default function MainNews({ mainNews }: MainNewsProps) {
  const firstNews = mainNews[0];
  const restNews = mainNews.slice(1);

  if (!firstNews) return null;

  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 rounded-xl border border-base-300  lg:grid-cols-2">
        {/* Featured News */}
        <article className="group overflow-hidden rounded-t-xl lg:rounded-l-xl border border-base-300 bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-lg">
          <figure className="relative h-64 overflow-hidden sm:h-72">
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt || firstNews.title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute left-4 top-4 rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white shadow-md">
              {firstNews.category}
            </div>
          </figure>

          <div className="space-y-3 p-5">
            <h2 className="text-xl font-bold leading-snug transition-colors duration-200 hover:text-red-700 sm:text-2xl">
              {firstNews.title}
            </h2>

            <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
              {firstNews.description}
            </p>

            <time className="block border-t border-base-300 pt-3 text-xs text-base-content/50">
              {firstNews.firstPublished
                ? new Date(firstNews.firstPublished).toLocaleDateString(
                    "bn-BD",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )
                : ""}
            </time>
          </div>
        </article>

        {/* Latest News */}
        <div className="divide-y divide-base-300 rounded-b-xl lg:rounded-r-xl border border-base-300 bg-base-100">
          {restNews.slice(0, 4).map((news) => (
            <article
              key={news.id}
              className="group cursor-pointer p-5 transition-colors duration-200 hover:bg-base-200/50"
            >
              <div className="mb-2">
                <span className="inline-block rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white">
                  {news.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-red-700">
                {news.title}
              </h3>

              {news.description && (
                <p className="mt-2 line-clamp-2 text-sm leading-5 text-base-content/60">
                  {news.description}
                </p>
              )}

              <time className="mt-3 block text-xs text-base-content/40">
                {news.firstPublished
                  ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : ""}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
