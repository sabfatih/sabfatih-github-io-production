import { useState } from "react";
import Footer from "./components/footer";

function App() {
  // #0b0c15
  //   #080910

  // #1c1f2c
  // #1a1c27
  // let borderColorAngle = 0;

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0b0c15] to-[#080910]">
      <MainContainer />
      <Footer />
    </div>
  );
}

const MainContainer = () => {
  return (
    <div className="relative w-54 h-38 md:w-62 md:h-42 mx-auto mt-52">
      <div className="absolute z-10 w-54 h-38 md:w-62 md:h-42 bg-gradient-to-b from-[#1c1f2c] to-[#1a1c27] rounded-md px-7 py-4">
        <article className="text-white text-center font_poppins space-y-4 md:space-y-6">
          <h1 className="text-lg md:text-xl font-bold">
            Go Check <br /> My Portfolio
          </h1>

          <button className="relative w-18 h-10 md:w-24 md:h-12 mx-auto group">
            <a
              href="https://sabihisma.vercel.app/"
              target="_blank"
              className="absolute z-10 w-18 h-10 md:w-24 md:h-12 inset-0 bg-gradient-to-b from-[#1c1f2c] to-[#1a1c27] text-lg md:text-xl rounded-md cursor-pointer px-4 py-1.5 md:py-2.5 group-hover:scale-105 group-active:scale-100 transition-all"
            >
              Visit
            </a>

            <div className="absolute size-[102%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 reverse_animated_bg_conic rounded-md group-hover:scale-105 group-active:scale-100 transition-all"></div>
            <div className="absolute size-[102%] blur-sm top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 reverse_animated_bg_conic rounded-md group-hover:scale-105 group-active:scale-100 transition-all"></div>
          </button>
        </article>
      </div>

      <div className="absolute size-[105%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animated_bg_conic rounded-md"></div>
      <div className="absolute size-[120%] blur-xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animated_bg_conic rounded-md"></div>
    </div>
  );
};

export default App;
