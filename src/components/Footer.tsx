export default function Footer() {
  return (
    <footer className="bg-surface text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center">
              {/* <Bug className="h-8 w-8 text-yellow-400" /> */}
              <img
                src="/icon.png"
                alt="Bumblebee Icon"
                className="h-11 w-11 text-yellow-400"
              />
              <span className="ml-2 text-xl font-bold text-white">
                Bumblebee
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Making Discord servers buzz with activity and engagement.
            </p>
          </div>

          {/* Sitemap Column */}
          <div className="col-span-1 hidden md:block"></div>

          <div className="col-span-1 hidden md:block">
            <h3 className="text-lg font-semibold text-white">Sitemap</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-yellow-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-yellow-400">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://docs.bumblebeebot.xyz/premium"
                  className="hover:text-yellow-400"
                >
                  Premium
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 hidden md:block">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://docs.bumblebeebot.xyz/support"
                  className="hover:text-yellow-400"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://docs.bumblebeebot.xyz/"
                  className="hover:text-yellow-400"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Made by Glaxin Dev. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://docs.bumblebeebot.xyz/policy"
              className="hover:text-yellow-400"
            >
              Privacy Policy
            </a>
            <a
              href="https://docs.bumblebeebot.xyz/term"
              className="hover:text-yellow-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
