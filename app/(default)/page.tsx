export const metadata = {
  title: "Zalaxy",
  description: "3d website solutions",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
    </>
  );
}
