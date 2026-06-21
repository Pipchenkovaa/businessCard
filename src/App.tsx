import { LangProvider } from "@/i18n/lang";
import { Backdrop } from "@/components/ui/Backdrop";
import { LangToggle } from "@/components/ui/LangToggle";
import { Logo } from "@/components/ui/Logo";
import { LeftTrack } from "@/components/sections/LeftTrack";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Lab } from "@/components/sections/Lab";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <LangProvider>
      <Backdrop />
      <Logo />
      <LeftTrack />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Stack />
        <Experience />
        <Lab />
        <Contact />
      </main>
      <Footer />
      <LangToggle />
    </LangProvider>
  );
}
