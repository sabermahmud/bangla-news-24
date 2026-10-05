import MainNews from "./Components/MainNews";
import MarqueePage from "./Components/Marquee";

const newsData = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const allNews = await newsData();
  const mainNews = allNews.data[0].articles;
  console.log("main news from home page:", mainNews);
  return (
    <>
      <MarqueePage />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* news section */}
        <div className="col-span-2">
          <div><MainNews mainNews={mainNews}/></div>
        </div>
        {/* most read section */}
        <div className="col-span-1"></div>
      </div>
    </>
  );
}
