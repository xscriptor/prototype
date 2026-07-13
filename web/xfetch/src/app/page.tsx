import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TerminalDemo from "@/components/TerminalDemo";
import Features from "@/components/Features";
import ModulesTable from "@/components/ModulesTable";
import InstallTabs from "@/components/InstallTabs";
import LayoutShowcase from "@/components/LayoutShowcase";
import ConfigBuilder from "@/components/ConfigBuilder";
import PluginSection from "@/components/PluginSection";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <TerminalDemo />
        <Features />
        <ModulesTable />
        <InstallTabs />
        <LayoutShowcase />
        <ConfigBuilder />
        <PluginSection />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
