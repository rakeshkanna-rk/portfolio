

import Navbar from "./NavbarDemo";

export default function Home() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarDemo className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}
