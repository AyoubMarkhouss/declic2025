import HorizontalScrollCarousel from "~/components/horizontalScrollCarousel";

import Footer from "~/components/footer";

import Herovideo from "~/components/herovideo";
import Sheepsection from "~/components/sheepsection";
import ExclusifProjects from "~/components/exclusifProjects";
import Header from "~/components/header-burger";
import { useState } from "react";
export default function Home() {
   const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <div className={`${open ? "" : "block"}`}>
        <Herovideo />
        <Sheepsection />
        <HorizontalScrollCarousel />
        <ExclusifProjects />
        <Footer />
      </div>
    </div>
  );
}
