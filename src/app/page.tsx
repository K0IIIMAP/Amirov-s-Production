import HeroSection from "../components/hero-section";
import Footer from "@/components/footer";
import NewColIntro from "../components/newcol-intro";
import NewColGrid from "@/components/newcol-grid";
import DesignItems from "@/components/design-items";

export default function Home() {
  return (
    <div>
      {/** DESIGN DETAILS */}

      <DesignItems />

      <HeroSection />

      {/** NEW COLLECTION SECTOn */}
      <section id="new-collection" className=" flex flex-col">
        <NewColIntro />
        <NewColGrid />
      </section>
    </div>
  );
}
