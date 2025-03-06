import { FaGithub, FaReddit, FaTwitter } from "react-icons/fa6";

const Social = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/xshubhamg",
      icon: <FaGithub className="hover:fill-green h-6 w-6" />,
    },
    {
      name: "Reddit",
      url: "https://reddit.com/user/codin_nerd",
      icon: <FaReddit className="hover:fill-red h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/condin_nerd",
      icon: <FaTwitter className="hover:fill-blue h-6 w-6" />,
    },
  ];
  return (
    <ul className="flex gap-6">
      {socials.map((social, index) => (
        <li
          key={index}
          className="grid h-10 w-10 items-center justify-center rounded-full"
        >
          <a
            href={social.url}
            aria-labelledby="social link"
            target="_blank"
            rel="noreferrer"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
