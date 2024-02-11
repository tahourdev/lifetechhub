import { Hero } from '@/components';
import AdsShow from '@/components/post/AdsShow';
import { Cats } from '@/components/post/Cats';
import LatestPosts from '@/components/post/LatestPosts';

export default function Home() {
  return (
    <main className='max-w-screen-5xl 5xl:mx-auto md:px-14 sm:px-4 px-0 transition-all duration-[.4s] ease'>
      <Hero />
      <div className='grid grid-cols-12 xl:gap-14 gap-y-12'>
        <div className='4xl:col-span-9 3xl:col-span-8 col-span-12 space-y-12'>
          <LatestPosts />
          <Cats />
        </div>
        <AdsShow />
      </div>
    </main>
  );
}
