import Link from "next/link";
import { useEffect } from "react";

export default function FourOhFour() {
  const redirect = () =>
    window.location.assign(
      "https://booksy.com/pl-pl/166934_wiktoria-grzywa-stylizacja-paznokci_paznokcie_10148_libiaz#ba_s=sh_1"
    );
  useEffect(() => {
    redirect();
  }, []);
  return (
    <div className="container mx-auto pt-8">
      <h1>Ta strona nie istnieje</h1>
      <Link href="/">
        <p className="mt-4">Powrót do strony głównej</p>
      </Link>
    </div>
  );
}
