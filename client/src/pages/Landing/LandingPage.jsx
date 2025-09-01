import { NavLink } from "react-router-dom";

function LandinPage() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center bg-[#F7F4EA]">
      <section className="bg-[#F7F4EA] lg:grid lg:h-screen w-[100%] lg:place-content-center dark:bg-gray-900 cursor-default">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-[#B87C4C] sm:text-5xl dark:text-white">
              Everything you need at
              <strong className="text-[#A8BBA3]"> TapMart </strong>
              just a tap away."
            </h1>

            <p className="mt-4 text-base text-pretty text-[#B87C4C] opacity-65 sm:text-lg/relaxed dark:text-gray-200">
              TapMart is your one-stop shop for everyday essentials and unique
              finds. With just a tap, you can discover quality products at fair
              prices. We make shopping fast, simple, and hassle-free, so
              everything you need is always within reach.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <NavLink
                className="inline-block rounded border border-[#A8BBA3] bg-PaletteGreen px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#EBD9D1] cursor-pointer"
                to="/auth/login"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandinPage;
