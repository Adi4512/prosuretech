import BlurIn from "../components/ui/blur-in";
import ShineBorder from "../components/ui/shine-border";

export default function Contact() {
  return (
    <div>
      <div className="mt-10 flex flex-col relative">
        <div className="w-full border-b-2 border-neutral-600">
          <BlurIn
            word="Let's Work Together 🚀"
            duration={1.5}
            className={
              " pb-2 w-fit text-3xl sm:text-5xl lg:text-5xl text-left font-sans "
            }
          />
        </div>
      </div>
      <div className="w-3/4 mt-10 mx-auto flex flex-col h-auto ">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Contact Us
        </span>
        <ShineBorder
          className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border- bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div>
            <form></form>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
}
