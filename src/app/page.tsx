import HomeHero from "@/components/sections/HomeHero";
import HomeWhy from '@/components/sections/HomeWhy';

export default function Home() {
  return (
    <main className="main-page">
      <HomeHero />
      <HomeWhy />
    </main>
  );
}
