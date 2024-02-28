import { Link } from "react-router-dom";
import { PinContainer } from "../ui/pin-container";

export const Features: React.FC = () => {
  return (
    <section id="features" className="bg-[#DDF8E8] dark:bg-gray-800 py-12 ">
    <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <h2 className="text-5xl font-bold text-center mb-12">Features</h2>
      <div className="flex flex-wrap justify-center gap-20">
        <PinContainer title="Go to Chatbot">
          <Link to="/chatbot">
            <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-base text-slate-800">
                Ayurvedic Chatbot ✨
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text">
                  Engage with our AI-powered chatbot to get personalized
                  advice and recommendations based on Ayurvedic principles
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4">
                <img
                  className="max-w-full max-h-full"
                  src="chatbot.jpg"
                  alt="Chatbot Image"
                />
              </div>
            </div>
          </Link>
        </PinContainer>
        <PinContainer title="Go to Prakruti analyzer">
          <Link to="/prakruti-analyzer">
            <div className="flex basis-full flex-col p-4 tracking-tight text-black sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-base text-slate-800">
                Analyze Prakruti 🧠
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span>
                  Discover your unique constitution (Prakruti) with our
                  Prakruti analyzer tool. Get insights into your physical,
                  mental, and emotional characteristics to support your
                  holistic health journey
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img
                  className="max-w-full max-h-full object-fit"
                  src="prakruti.png"
                  alt="Prakruti Analyzer Image"
                />
              </div>
            </div>
          </Link>
        </PinContainer>
      </div>
    </div>
  </section>

  );
};
