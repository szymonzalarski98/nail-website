import Head from "next/head";
import { Row } from "../components/Row";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wiktoria Grzywa - Cennik</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="container mx-auto">
        <div className="text-center text-xl">
          <p>Cennik</p>
        </div>
        <div className="flex flex-row mt-10">
          <div className="hidden lg:block w-1/6"></div>
          <div className="flex-col w-full px-4 md:px-4">
            <Row name="Manicurefskjfshdjfhksdfjshdfhsdlfhsdflsjdfkdjhfdfgfhd" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
            <Row name="Manicure" price="100" />
          </div>
          <div className="hidden lg:block w-1/6"></div>
        </div>
      </div>
   </>
  );
};
