import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // #0b0c15
  //   #080910

  // #1c1f2c
  // #1a1c27

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0b0c15] to-[#080910]">
      <div className="relative w-48 mx-auto mt-52 h-fit">
        <div className="w-full h-fit bg-gradient-to-b from-[#1c1f2c] to-[#1a1c27] rounded-md px-7 py-4">
          <article className="text-white text-center font_poppins space-y-4">
            <h1 className="text-lg font-bold">Check out my portfolio</h1>
            <button className="border rounded-md w-24 px-3 py-2 cursor-pointer hover:scale-105 active:scale-100 transition-all">
              Visit
            </button>
          </article>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[120%] bg-sky-400 rounded-lg opacity-40 -z-10"></div>
      </div>

      <div className="fixed top-8 right-8">
        <div className="relative size-16">
          <div className="absolute size-16 bg-amber-400 z-10"></div>

          <div className="absolute size-20 bg-sky-400"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
