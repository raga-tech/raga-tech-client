import HomeHero from "@/components/sections/HomeHero";
import HomeWhy from '@/components/sections/HomeWhy';
import HomeAbout from '@/components/sections/HomeAbout'

export default function Home() {
  return (
    <main className="main-page">
      <HomeHero />
      <HomeWhy />
      <HomeAbout />
    </main>
  );
}
