import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import GlobalSearch from "../search/GlobalSearch";
import Mobile from "./Mobile";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between bg-black fixed z-50 w-full gap-5 p-6 border-b border-[#60a5fa]/20">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/0rca-Photoroom.svg"
          width={48}
          height={48}
          alt="0rca"
        />

        <p className="text-3xl font-sentient text-primary max-sm:hidden">
          0rca
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#60a5fa",
              },
            }}
          />
        </SignedIn>

        <Mobile />
      </div>
    </nav>
  );
};

export default Navbar;
