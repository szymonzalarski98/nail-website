import Head from "next/head";
import { Header } from "../components/Header";
import { Photos } from "../components/Photos";
import Link from "next/link";
import { NextSeo } from "next-seo";

const style = {
  backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/nail-website-d8fc6.appspot.com/o/website_background.jpeg?alt=media&token=cae4a997-925d-4cce-a9aa-78f5c1f2e621" + ")",
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
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">MOJE PRACE</p>
      </div>
      <Photos />
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">OFERTA</p>
      </div>
      <div className="container mx-auto px-8">
        <p className="text-justify" style={{ textIndent: "1rem" }}>Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci. W skład mojej oferty wchodzi manicure hybrydowy, żelowy na naturalnej płytce, przedłuanie paznokci na formie, uzupełnianie żelu oraz odnowa żelu po czterech tygodniach. Ponadto oferuję pedicure hybrydowy, pedicure hybrydowy SPA oraz inne usługi. Zapraszam do skorzystania z moich usług, wszystkie wymienione są w <a className="underline font-bold"><Link href="/cennik">cenniku</Link></a>.</p>
      </div>
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">UMÓW SIĘ NA WIZYTĘ</p>
      </div>
      <div className="container mx-auto px-8 mb-20">
        <p className="text-justify" style={{ textIndent: "1rem" }}>Wizytę można zarezerwować za pośrednictwem rozmowy telefonicznej lub SMS, kontaktu mailowego, wiadomości na Instagramie lub Messengerze. Więcej informacji znajdziesz w zakładce <a className="underline font-bold"><Link href="/kontakt">kontakt</Link></a>.</p>
      </div>
    </>
  )
}
