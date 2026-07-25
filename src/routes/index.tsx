import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/constants/site";

const title = `${SITE.name} — Desarrollador Full Stack | Software a la medida`;
const description =
  "Desarrollador Full Stack: sistemas de gestión, inventarios, aplicaciones web y móviles, APIs e integración con WhatsApp Business API. Software empresarial a la medida.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main>
        <h1 className="sr-only">
          {SITE.name} — {SITE.role}
        </h1>
        <Hero />
        <Stats />
        <About />
        <TechStack />
        <Services />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
