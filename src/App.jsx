import { useState } from "react";

function App() {
  // #0b0c15
  //   #080910

  // #1c1f2c
  // #1a1c27
  // let borderColorAngle = 0;

  // while (borderColorAngle <= 360) {
  //   if (borderColorAngle == 360) {
  //     borderColorAngle = 0;
  //     return false;
  //   }
  //   borderColorAngle++;
  // }

  // console.log(borderColorAngle);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0b0c15] to-[#080910]">
      <div className="relative w-62 mx-auto mt-52 h-42">
        <div className="absolute z-10 w-62 h-42 bg-gradient-to-b from-[#1c1f2c] to-[#1a1c27] rounded-md px-7 py-4">
          <article className="text-white text-center font_poppins space-y-4">
            <h1 className="text-2xl font-bold">Check out my portfolio</h1>
            <a
              href="https://sabihisma.vercel.app/"
              className="py-2 cursor-pointer group hover:scale-105 active:scale-100 transition-all"
            >
              <button className="border text-xl rounded-md px-6 py-2 cursor-pointer group-hover:scale-105 group-active:scale-100 transition-all">
                Visit
              </button>
            </a>
          </article>
        </div>

        <div
          className={`absolute size-[105%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animated_bg_conic rounded-lg`}
        ></div>
        <div
          className={`absolute size-[120%] blur-xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animated_bg_conic rounded-lg`}
        ></div>
      </div>
    </div>
  );
}

export default App;
