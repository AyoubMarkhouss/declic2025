import HorizontalScrollCarousel from "~/components/horizontalScrollCarousel";

import Footer from "~/components/footer";

import Herovideo from "~/components/herovideo";
import Sheepsection from "~/components/sheepsection";
import ExclusifProjects from "~/components/exclusifProjects";
export default function Home() {
  return (
    <div className="">
      <Herovideo />
      <Sheepsection />
      <HorizontalScrollCarousel />

      <ExclusifProjects />
      <Footer />
    </div>
  );
}
