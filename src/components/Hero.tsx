import { HoneycombPattern } from "./HoneycombPattern";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <HoneycombPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Discord Server's
              <span className="text-yellow-400 block">Busy Little Helper</span>
            </h1>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl">
              Elevate your Discord server with robust anti-nuke,
              auto-moderation, custom roles, temp-voice, and many more features.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="https://docs.bumblebeebot.xyz/invite"
                className="inline-flex items-center px-4 py-3 rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 font-medium transition-colors duration-200 w-max mx-auto sm:mx-0"
              >
                Add to Discord
              </a>
              <a
                href="https://docs.bumblebeebot.xyz/"
                className="inline-flex items-center px-4 py-3 rounded-md border border-yellow-400/20 hover:border-yellow-400/40 font-medium transition-colors duration-200 w-max mx-auto sm:mx-0"
              >
                View Documentation
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative animate-float">
                <img
                  src="/icon.png"
                  alt="Bumblebee"
                  className="w-64 h-64 text-yellow-400 hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
