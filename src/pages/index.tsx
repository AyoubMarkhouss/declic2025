import HorizontalScrollCarousel from "~/components/horizontalScrollCarousel";

import Footer from "~/components/footer";

import Herovideo from "~/components/herovideo";
import Sheepsection from "~/components/sheepsection";
import ExclusifProjects from "~/components/exclusifProjects";
import Header from "~/components/header-burger";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Herovideo />
      <Sheepsection />
      <HorizontalScrollCarousel />

      <ExclusifProjects />
      <Footer />
    </div>
  );
}
