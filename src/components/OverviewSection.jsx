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
    icon: <SiArchlinux className="text-blue h-32 w-32" />,
  },
  {
    title: "Customization",
    description: "Customize your settings here whoever you want",
    icon: <CiSettings className="text-mauve h-32 w-32" />,
  },
  {
    title: "Wayland",
    description: "fast and modern display server protocol for linux desktops",
    icon: <SiWayland className="text-yellow h-32 w-32" />,
  },
  {
    title: "Neovim",
    description: "Fast and efficient text editor with all modern IDE features",
    icon: <SiNeovim className="text-green h-32 w-32" />,
  },
  {
    title: "VsCode",
    description: "Modern IDE with AI integration",
    icon: <VscVscode className="text-blue h-32 w-32" />,
  },
  {
    title: "Yazi/Thunar",
    description:
      "Fast and efficient graphical as well as terminal file manager",
    icon: <GiPlasticDuck className="text-red h-32 w-32" />,
  },
  {
    title: "Brave/zen browser",
    description: "Both a chrome based and a firefox based browser",
    icon: <BsBrowserChrome className="text-flamingo h-32 w-32" />,
  },
  {
    title: "Obsidian",
    description: "A knowledge management and note taking app",
    icon: <SiObsidian className="h-32 w-32 text-purple-400" />,
  },
  {
    title: "mpv",
    description: "A free and open-source media player",
    icon: <SiMpv className="text-blue h-32 w-32" />,
  },
];

const OverviewSection = () => {
  return (
    <section className="align-center container mx-auto flex flex-wrap justify-center gap-4 py-20">
      {cardContent.map((card, index) => (
        <Card
          className="align-center mx-auto flex w-[30%] flex-col justify-center gap-2 p-4 text-center"
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
