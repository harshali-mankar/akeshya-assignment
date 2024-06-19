import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroBanner from "@/components/heroBanner";
import OurClients from "@/components/ourClients";
import OurCoreFeatures from "@/components/ourCoreFeatures";
import OurProcess from "@/components/ourProcess";
import Services from "@/components/services";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <>
      <div className="si-main">
        <Header />
        <HeroBanner />
        <OurClients />
        <AboutUs />
        <Stats />
        <Services />
        <OurProcess />
        <OurCoreFeatures />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
