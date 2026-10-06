import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";


interface data {
    id:number
    title:string
}


const latestNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  return data;
};

export default async function MarqueePage() {
  const latestData = await latestNews();
  const newsData:data[] = latestData.data


  return<>
  
  
  <div className="flex mt-5 sticky">
    <h3 className="bg-rose-700 text-white p-2">সর্বশেষ:</h3>
    <Marquee className="bg-gray-300" direction="left" speed={80}>
        {
            newsData.map(news => <span key={news.id} className="flex justify-around items-center "> 
            <p  className="px-4" >
              {news.title}</p>
            <span><GoDotFill /></span>
            </span>
            )
        }
    </Marquee>
  </div>
  
  </>
}
