import Sparkles from "./Hero";
import MeteorsCard from "./MeteorCard";
import NavbarDemo from "./NavBar";

export default function Home() {
  return (
    <main className="h-full">
      <NavbarDemo />
      <Sparkles />
      <MeteorsCard />
    </main>
  );
}
