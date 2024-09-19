
import HomeWhy from '@/components/sections/HomeWhy';
import HomeAbout from '@/components/sections/HomeAbout'
import HomeServices from "@/components/sections/HomeServices";
import HomeHero from '@/components/sections/HomeHero';

export default function Home() {
  return (
    <main className="main-page">
      <HomeHero />
      <HomeWhy />
      <HomeAbout />
      <HomeServices />
    </main>
  );
}
