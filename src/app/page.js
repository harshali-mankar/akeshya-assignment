import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/contactUs";
import HeroBanner from "@/components/heroBanner";
import OurClients from "@/components/ourClients";
import OurCoreFeatures from "@/components/ourCoreFeatures";
import OurProcess from "@/components/ourProcess";
import Services from "@/components/services";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <OurClients />
      <AboutUs />
      <Stats />
      <Services />
      <OurProcess />
      <OurCoreFeatures />
      <ContactUs />
    </>
  );
}
