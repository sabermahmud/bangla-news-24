import { CategoriesType } from "@/types/categories-type";
import Link from "next/link";

const newsCategories = async (): Promise<CategoriesType> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data: CategoriesType = await res.json();
  return data;
};

export default async function NavlinkPage() {
  const categoriesData = await newsCategories();

  const data = categoriesData.data;
  const filteredNavs = data.filter( nav => nav.scrapable)

  return (
    <>
      {filteredNavs.map((category, index) => (
        <Link href={category.slug} key={index}>
          {category.title}
        </Link>
      ))}
    </>
  );
}
