import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {
  portfolioJsonLd,
  profileJsonLd,
  websiteJsonLd,
} from "@/lib/site";

export default function Home() {
  const structuredData = [profileJsonLd, websiteJsonLd, portfolioJsonLd];
  const webformAccessKey = process.env.WEBFORM_ACCESS_KEY || "";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact accessKey={webformAccessKey} />
      </main>
      <Footer />
    </>
  );
}
