import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav className="flex items-center flex-wrap bg-white p-3 shadow-lg">
      <Link legacyBehavior href="/">
        {pathName === "/" ? (
          <span className="flex-1 text-center text-xs lg:text-base font-semibold">
            STRONA GŁÓWNA
          </span>
        ) : (
          <a className="flex-1 text-center text-xs lg:text-base">
            STRONA GŁÓWNA
          </a>
        )}
      </Link>
      <Link legacyBehavior href="/cennik">
        {pathName === "/cennik" ? (
          <span className="flex-1 text-center text-xs lg:text-base font-semibold">
            CENNIK
          </span>
        ) : (
          <a className="flex-1 text-center text-xs lg:text-base">CENNIK</a>
        )}
      </Link>
      <Link legacyBehavior href="/kontakt">
        {pathName === "/kontakt" ? (
          <span className="flex-1 text-center text-xs lg:text-base font-semibold">
            KONTAKT
          </span>
        ) : (
          <a className="flex-1 text-center text-xs lg:text-base">KONTAKT</a>
        )}
      </Link>
    </nav>
  );
};
