import Link from "next/link";
import NavbarMobile from "./NavbarMobile";
import NavLinks from "./NavLinks";

export const NavbarComponent = () => {
  return (
    <div className="sticky top-0 bg-white/50 backdrop-blur-md font-[family-name:var(--font-geist-sans)]">
      <div className="px-4 py-5 mx-auto lg:w-11/12 w-11/12 xl:container md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-3xl font-bold tracking-wide text-black uppercase">
              Blo<span className="text-purple-800">gs.</span>
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <NavLinks />
          </ul>
          <NavbarMobile />
        </div>
      </div>
    </div>
  );
};
