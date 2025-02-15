import { BsBrowserChrome } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { GiPlasticDuck } from "react-icons/gi";
import {
  SiArchlinux,
  SiMpv,
  SiNeovim,
  SiObsidian,
  SiWayland,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Card from "./ui/Card.jsx";

const cardContent = [
  {
    title: "Arch Linux",
    description: "A fast, lightweight and flexible Linux distribution",
    icon: <SiArchlinux className="w-32 h-32 text-blue" />,
  },
  {
    title: "Customization",
    description: "Customize your settings here whoever you want",
    icon: <CiSettings className="w-32 h-32 text-mauve" />,
  },
  {
    title: "Wayland",
    description: "fast and modern display server protocol for linux desktops",
    icon: <SiWayland className="w-32 h-32 text-yellow" />,
  },
  {
    title: "Neovim",
    description: "Fast and efficient text editor with all modern IDE features",
    icon: <SiNeovim className="w-32 h-32 text-green " />,
  },
  {
    title: "VsCode",
    description: "Modern IDE with AI integration",
    icon: <VscVscode className="w-32 h-32 text-blue" />,
  },
  {
    title: "Yazi/Thunar",
    description:
      "Fast and efficient graphical as well as terminal file manager",
    icon: <GiPlasticDuck className="w-32 h-32 text-red" />,
  },
  {
    title: "Brave/zen browser",
    description: "Both a chrome based and a firefox based browser",
    icon: <BsBrowserChrome className="w-32 h-32 text-flamingo" />,
  },
  {
    title: "Obsidian",
    description: "A knowledge management and note taking app",
    icon: <SiObsidian className="w-32 h-32 text-purple-400" />,
  },
  {
    title: "mpv",
    description: "A free and open-source media player",
    icon: <SiMpv className="w-32 h-32 text-blue" />,
  },
];

const OverviewSection = () => {
  return (
    <section className="container mx-auto flex flex-wrap align-center justify-center gap-4 py-20">
      {cardContent.map((card, index) => (
        <Card
          className="mx-auto w-[30%] flex flex-col align-center justify-center gap-2 p-4 text-center"
          title={card.title}
          description={card.description}
          icon={card.icon}
          key={index}
        />
      ))}
    </section>
  );
};

export default OverviewSection;
