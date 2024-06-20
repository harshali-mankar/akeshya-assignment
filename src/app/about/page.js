import AboutUs from "@/components/aboutUs";
import Stats from "@/components/stats";

export const metadata = {
  title: "About Us",
  description: "Akeshya About Us",
};

export default function About() {
  return (
    <>
      <AboutUs />
      <Stats />
    </>
  );
}
