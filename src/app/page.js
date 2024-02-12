import { Hero } from "@/components";
import AdsShow from "@/components/Ads/AdsShow";
import { Cats } from "@/components/post/Cats";
import LatestPosts from "@/components/post/LatestPosts";

export default function Home() {
  return (
    <main className="ease max-w-screen-5xl px-0 transition-all duration-[.4s] sm:px-4 md:px-14 5xl:mx-auto">
      <Hero />
      <div className="grid grid-cols-12 gap-y-12 xl:gap-14">
        <div className="col-span-12 space-y-12 3xl:col-span-8 4xl:col-span-9">
          <LatestPosts />
          <Cats />
        </div>
        <AdsShow />
      </div>
    </main>
  );
}
