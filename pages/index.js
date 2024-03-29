import Head from "next/head";
import { Header } from "../components/Header";
import { Photos } from "../components/Photos";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Opinions } from "../components/Opinions";
import { AboutMe } from "../components/AboutMe";
import Script from "next/script";

const style = {
  backgroundImage:
    "url(" +
    "https://firebasestorage.googleapis.com/v0/b/wgrzywa-33d36.appspot.com/o/wgrzywa_web_background_minified.jpeg?alt=media&token=d34b5365-a974-4805-b40a-d84ba75d96b0" +
    ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Wiktoria Grzywa</title>
        <link rel="icon" href="/favicon.ico" />
        <Script
          type="text/javascript"
          src="https://booksy.com/widget/code.js?id=166934&country=pl&lang=pl"
        />
      </Head>
      <NextSeo
        title="Wiktoria Grzywa Stylizacja Paznokci"
        description="Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci."
        canonical="https://www.wiktoriagrzywa.pl/"
        openGraph={{
          url: "https://www.wiktoriagrzywa.pl/",
          title: "Wiktoria Grzywa Stylizacja Paznokci",
          description:
            "Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci.",
          images: [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/nail-website-d8fc6.appspot.com/o/photo6.png?alt=media&token=2c1eaec7-0094-4636-bb43-ddb910fd64ca",
              width: 800,
              height: 600,
              alt: "Wiktoria Grzywa - stylizacja paznokci",
            },
            {
              url: "https://firebasestorage.googleapis.com/v0/b/nail-website-d8fc6.appspot.com/o/photo6.png?alt=media&token=2c1eaec7-0094-4636-bb43-ddb910fd64ca",
              width: 900,
              height: 800,
              alt: "Wiktoria Grzywa - stylizacja paznokci",
            },
            {
              url: "https://firebasestorage.googleapis.com/v0/b/nail-website-d8fc6.appspot.com/o/photo1.png?alt=media&token=57373a3e-cafa-4b21-a9cf-f98aa1037b6a",
            },
            {
              url: "https://firebasestorage.googleapis.com/v0/b/nail-website-d8fc6.appspot.com/o/photo4.jpeg?alt=media&token=ad978c16-8979-4c00-b65b-219f52ec4eb3",
            },
          ],
          site_name: "Wiktoria Grzywa - stylizacja paznokci",
        }}
      />
      <div className="object-fill" style={{ height: "calc(100vh - 48px)" }}>
        <div
          className="h-full w-full flex justify-center items-center"
          style={style}
        >
          <Header />
        </div>
      </div>
      <div className="mt-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">
          O MNIE
        </p>
      </div>
      <AboutMe />
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">
          MOJE PRACE
        </p>
      </div>
      <Photos />
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">
          UMÓW SIĘ NA WIZYTĘ
        </p>
      </div>
      <div className="container mx-auto px-8">
        <p className="text-justify" style={{ textIndent: "1rem" }}>
          Wizytę można zarezerwować za pośrednictwem rozmowy telefonicznej lub
          SMS, kontaktu mailowego, wiadomości na Instagramie lub Messengerze.
          Więcej informacji znajdziesz w zakładce{" "}
          <Link href="/kontakt">
            <span className="underline font-bold">kontakt</span>
          </Link>
          .
        </p>
      </div>
      <Opinions />
    </>
  );
}
