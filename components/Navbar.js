import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav className="flex items-center flex-wrap bg-white p-3 shadow-lg">
      <Link href="/">
        {
          pathName === "/" ?
          <a className="flex-1 text-center text-xs lg:text-base font-semibold">STRONA GŁÓWNA</a>
          :
          <a className="flex-1 text-center text-xs lg:text-base">STRONA GŁÓWNA</a>
        }
      </Link>
      <Link href="/cennik">
        {
          pathName === "/cennik" ?
          <a className="flex-1 text-center text-xs lg:text-base font-semibold">CENNIK</a>
          :
          <a className="flex-1 text-center text-xs lg:text-base">CENNIK</a>
        }
      </Link>
      <Link href="/kontakt">
        {
          pathName === "/kontakt" ?
          <a className="flex-1 text-center text-xs lg:text-base font-semibold">KONTAKT</a>
          :
          <a className="flex-1 text-center text-xs lg:text-base">KONTAKT</a>
        }
      </Link>
    </nav>
  )
};