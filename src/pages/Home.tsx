import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import Services from "../components/Services";
import ProjectsPreview from "../components/ProjectsPreview";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <ProjectsPreview />
      <Experience />
    </main>
  );
}
