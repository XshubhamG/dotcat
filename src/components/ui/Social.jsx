import { FaGithub, FaReddit, FaTwitter } from "react-icons/fa6";

const Social = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/xshubhamg",
      icon: <FaGithub className="w-6 h-6 hover:fill-green" />,
    },
    {
      name: "Reddit",
      url: "https://reddit.com/user/codin_nerd",
      icon: <FaReddit className="w-6 h-6 hover:fill-red" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/condin_nerd",
      icon: <FaTwitter className="w-6 h-6 hover:fill-blue" />,
    },
  ];
  return (
    <ul className="flex gap-6">
      {socials.map((social, index) => (
        <li
          key={index}
          className="grid items-center justify-center w-10 h-10 rounded-full"
        >
          <a href={social.url} target="_blank" rel="noreferrer">
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
