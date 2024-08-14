import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBar from "@/components/Searchbar";
import Catalog from "@/components/Catalog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <h1 className="font-3xl">Evermos Catalog</h1>
      <SearchBar />
      <Catalog />
    </main>
  );
}
