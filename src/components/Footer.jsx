import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="ml-40 grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Let’s Get Social ✨</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-slate-600 transition duration-300 ease-in-out"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Discover More</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-slate-600 transition duration-300 ease-in-out"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-slate-600 transition duration-300 ease-in-out"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Centering the "Made with ❤️" text */}
      <div className="text-sm text-neutral-500 flex justify-center items-center mt-4">
        <div className="flex flex-col items-center">
          {" "}
          {/* Use flex-col to stack elements vertically */}
          <span className="tracking-tighter">Made with ❤️</span>
          <a
            href="https://adityaportfolio-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 hover:scale-110 transition duration-300 ease-in-out"
          >
            {" "}
            <span className="">Aditya Sharma</span>{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
