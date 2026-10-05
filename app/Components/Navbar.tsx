import Image from "next/image";
import NavlinkPage from "./Navlink";
import Link from "next/link";


export async function Navbar() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <>
      <div className="grid grid-cols-3 py-4 px-4 items-center">
        <div className="hidden md:block col-span-1 min-w-full"></div>
        <div className=" flex justify-center navbar-center gap-2 col-span-1 min-w-full">
          <div>
            <Image src={"/logo.webp"} alt="logo" height={50} width={50} />
          </div>
          <div>
            <h2 className="text-red-700 text-2xl font-bold">Bangla News 24</h2>
            <p>{date}</p>
          </div>
        </div>

        <div className="navbar-end col-span-1 min-w-full flex gap-4">
          <button className="btn rounded-md">সাইন ইন</button>
          <button className="btn bg-red-700 text-white rounded-md ">
            সাইন আপ
          </button>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <Link href={"/"}>হোম</Link>
        <NavlinkPage />
      </div>
    </>
  );
}
