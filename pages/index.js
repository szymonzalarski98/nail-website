import Head from "next/head";
import { Header } from "../components/Header";
import { Photos } from "../components/Photos";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Opinions } from "../components/Opinions";
import { AboutMe } from "../components/AboutMe";

const style = {
  backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/wgrzywa-33d36.appspot.com/o/website_background.jpeg?alt=media&token=117efb68-8472-4dc1-a7ef-f3c15bc74bd9" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

export default function Home() {
  return (
    <>
      <Head>
          <title>Wiktoria Grzywa</title>
          <link rel='icon' href='/favicon.ico' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      <NextSeo
          title="Wiktoria Grzywa Stylizacja Paznokci"
          description="Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci."
          canonical="https://www.wiktoriagrzywa.pl/"
          openGraph={{
            url: "https://www.wiktoriagrzywa.pl/",
            title: "Wiktoria Grzywa Stylizacja Paznokci",
            description: "Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci.",
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
              { url: "https://firebasestorage.googleapis.com/v0/b/nail-website-d8fc6.appspot.com/o/photo1.png?alt=media&token=57373a3e-cafa-4b21-a9cf-f98aa1037b6a" },
              { url: "https://firebasestorage.googleapis.com/v0/b/nail-website-d8fc6.appspot.com/o/photo4.jpeg?alt=media&token=ad978c16-8979-4c00-b65b-219f52ec4eb3" },
            ],
            site_name: "Wiktoria Grzywa - stylizacja paznokci",
        }}
      />
      <div className="object-fill" style={{ height: "50vh" }}>
        <div className="h-full w-full flex justify-center items-center" style={style}>
          <Header />
        </div>
      </div>
      <div className="mt-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">O MNIE</p>
      </div>
      <AboutMe />
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">MOJE PRACE</p>
      </div>
      <Photos />
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">UMÓW SIĘ NA WIZYTĘ</p>
      </div>
      <div className="container mx-auto px-8">
        <p className="text-justify" style={{ textIndent: "1rem" }}>Wizytę można zarezerwować za pośrednictwem rozmowy telefonicznej lub SMS, kontaktu mailowego, wiadomości na Instagramie lub Messengerze. Więcej informacji znajdziesz w zakładce <a className="underline font-bold"><Link href="/kontakt">kontakt</Link></a>.</p>
        <p className="text-justify font-bold" style={{ textIndent: "1rem" }}>Na pierwszą wizytę przysługuje rabat 20%!</p>
      </div>
      <Opinions />
    </>
  )
}
