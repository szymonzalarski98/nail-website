import Head from "next/head";
import { Header } from "../components/Header";
import { Photos } from "../components/Photos";
import Link from "next/link";

const style = {
  backgroundImage: "url(" + "https://1bolu849lji0aq4e82lakei1-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2021/04/Lounge-01_lg-scaled-aspect-ratio-16-9-scaled.jpg" + ")",
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
      </Head>
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
        <p style={{ textIndent: "1rem" }}>Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci. W skład mojej oferty wchodzi manicure hybrydowy, żelowy na naturalnej płytce, przedłuanie paznokci na formie, uzupełnianie żelu oraz odnowa żelu po czterech tygodniach. Ponadto oferuję pedicure hybrydowy, pedicure hybrydowy SPA oraz inne usługi. Zapraszam do skorzystania z moich usług, wszystkie wymienione są w <a className="underline font-bold"><Link href="/cennik">cenniku</Link></a>.</p>
      </div>
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">UMÓW SIĘ NA WIZYTĘ</p>
      </div>
      <div className="container mx-auto px-8 mb-20">
        <p style={{ textIndent: "1rem" }}>Wizytę można zarezerwować za pośrednictwem rozmowy telefonicznej lub SMS, kontaktu mailowego, wiadomości na Instagramie lub Messengerze. Więcej informacji znajdziesz w zakładce <a className="underline font-bold"><Link href="/kontakt">kontakt</Link></a>.</p>
      </div>
    </>
  )
}
