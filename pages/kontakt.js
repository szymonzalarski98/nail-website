import Head from "next/head";
import { NextSeo } from "next-seo";

const EMAIL_SUBJECT = "Umówienie wizyty";

export default function Home() {
  const phoneCall = () => window.open("tel:504573540");
  const sendEmail = () =>
    window.open(`mailto:wgrzywa98@gmail.com?subject=${EMAIL_SUBJECT}`);
  const openInNewTab = () =>
    window.open("https://www.instagram.com/w.grzywa/", "_blank").focus();
  return (
    <div>
      <Head>
        <title>Wiktoria Grzywa - Kontakt</title>
        <link rel="icon" href="/favicon.ico" />
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
        title="Wiktoria Grzywa Stylizacja Paznokci - kontakt"
        description="Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci. Na tej podstronie znajdują się informacje kontaktowe."
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
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">
          INFORMACJE KONTAKTOWE
        </p>
      </div>
      <div className="my-8 lg:my-12 container mx-auto flex items-center flex-col">
        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">
          Wiktoria Grzywa
        </p>
        <p
          onClick={phoneCall}
          className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight cursor-pointer"
        >
          Numer telefonu: +48 504573540
        </p>
        <p
          onClick={sendEmail}
          className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight cursor-pointer"
        >
          Adres email: wgrzywa98@gmail.com
        </p>
        <p
          onClick={openInNewTab}
          className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight cursor-pointer"
        >
          Instagram: @w.grzywa
        </p>
      </div>
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">
          ADRES
        </p>
      </div>
      <div className="my-8 lg:my-12 container mx-auto flex items-center flex-col">
        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">
          ul. Tęczowa 3
        </p>
        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">
          32-590 Libiąż
        </p>
      </div>
      <div className="container mx-auto flex justify-center mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.4871334113222!2d19.30312371598519!3d50.095888420729615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716eb0270378e1d%3A0xfa9b7aa647f9ca6c!2zVMSZY3pvd2EgMywgMzItNTkwIExpYmnEhcW8!5e0!3m2!1spl!2spl!4v1627819892329!5m2!1spl!2spl"
          height={500}
          width="100%"
          style={{ border: 0, paddingHorizontal: 8 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
