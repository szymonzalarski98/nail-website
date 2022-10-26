import Head from "next/head";
import { NextSeo } from "next-seo";

const services = [
  {
    name: "Manicure hybrydowy",
    price: 70,
  },
  {
    name: "Manicure żelowy na naturalnej płytce",
    price: 90,
  },
  {
    name: "Uzupełnienie żelu (do 4 tygodni)",
    price: 90,
  },
  {
    name: "Odnowa żelowa (po 4 tygodniach)",
    price: 100,
  },
  {
    name: "Przedłużenie paznokci na formie",
    price: 110,
  },
  {
    name: "Naprawa paznokcia",
    price: 10,
  },
  {
    name: "Usunięcie stylizacji po innej stylistce",
    price: 20,
  },
  {
    name: "Manicure klasyczny bez malowania",
    price: 30,
  },
  {
    name: "Pedicure hybrydowy",
    price: 80,
  },
  {
    name: "Pedicure hybrydowy SPA",
    price: 90,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Wiktoria Grzywa - Cennik</title>
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
        title="Wiktoria Grzywa Stylizacja Paznokci - cennik"
        description="Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci. Na tej podstronie znajduje się cennik moich usług."
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
          CENNIK
        </p>
      </div>
      <div className="container mx-auto mb-20">
        <div className="flex flex-row">
          <div className="hidden lg:block w-1/6"></div>
          <div className="w-full px-4 md:px-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left pl-4 pb-4">Usługi</th>
                  <th className="text-right pr-4 pb-4">Ceny</th>
                </tr>
              </thead>
              <tbody className="mt-8">
                {services.map((service) => (
                  <tr className="bg-gray-200 px-4 py-2 odd:bg-gray-100 cursor-default">
                    <td className="px-4 py-2 overflow-clip overflow-hidden break-words">
                      {service.name}
                    </td>
                    <td className="px-4 py-2 text-right font-medium">
                      {service.price} zł
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="hidden lg:block w-1/6"></div>
        </div>
      </div>
    </>
  );
}
