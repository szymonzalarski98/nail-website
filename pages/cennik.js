import Head from "next/head";
import { Row } from "../components/Row";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wiktoria Grzywa - Cennik</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">CENNIK</p>
      </div>
      <div className="container mx-auto mb-20">
        <div className="flex flex-row">
          <div className="hidden lg:block w-1/6"></div>
          <div className="flex-col w-full px-4 md:px-4">
            <Row name="Manicure hybrydowy" price="70" />
            <Row name="Manicure żelowy na naturalnej płytce" price="90" />
            <Row name="Uzupełnienie żelu (do 4 tygodni)" price="80" />
            <Row name="Odnowa żelowa (po 4 tygodniach)" price="90" />
            <Row name="Przedłużenie paznokci na formie" price="110" />
            <Row name="Naprawa paznokcia" price="10" />
            <Row name="Usunięcie stylizacji po innej stylistce" price="20" />
            <Row name="Manicure klasyczny bez malowania	" price="30" />
            <Row name="Pedicure hybrydowy	" price="70" />
            <Row name="Pedicure hybrydowy SPA	" price="80" />
          </div>
          <div className="hidden lg:block w-1/6"></div>
        </div>
      </div>
   </>
  );
};
