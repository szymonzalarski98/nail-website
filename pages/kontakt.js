import Head from "next/head";

const EMAIL_SUBJECT = "Umówienie wizyty";

export default function Home() {
  const phoneCall = () => window.open("tel:504573540");
  const sendEmail = () => window.open(`mailto:wgrzywa98@gmail.com?subject=${EMAIL_SUBJECT}`);
  const openInNewTab = () => window.open("https://www.instagram.com/w.grzywa/", "_blank").focus();
  return (
    <div>
      <Head>
        <title>Wiktoria Grzywa - Kontakt</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">INFORMACJE KONTAKTOWE</p>
      </div>
      <div className="my-8 lg:my-12 container mx-auto flex items-center flex-col">
        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">Wiktoria Grzywa</p>
        <p onClick={phoneCall} className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">Numer telefonu: +48 504573540</p>
        <p onClick={sendEmail} className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">Adres email: wgrzywa98@gmail.com</p>
        <p onClick={openInNewTab} className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">Instagram: @w.grzywa</p>
      </div>
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">ADRES</p>
      </div>
      <div className="my-8 lg:my-12 container mx-auto flex items-center flex-col">
        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">ul. Tęczowa 3</p>
        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl font-extralight">32-590 Libiąż</p>
      </div>
      <div className="container mx-auto flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.4871334113222!2d19.30312371598519!3d50.095888420729615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716eb0270378e1d%3A0xfa9b7aa647f9ca6c!2zVMSZY3pvd2EgMywgMzItNTkwIExpYmnEhcW8!5e0!3m2!1spl!2spl!4v1627819892329!5m2!1spl!2spl" height={500} width="100%" style={{ border: 0, paddingHorizontal: 8 }} allowfullscreen={true} loading="lazy"></iframe>
      </div>
   </div>
  );
};
