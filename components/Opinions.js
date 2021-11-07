import { Opinion } from "./Opinion";

const opinionsContent = [
  "Jestem bardzo zadowolona ze stylizacji, które wykonuje Wiktoria. Paznokcie bardzo długo się trzymają pomimo tego, że ich nie oszczędzam, serdecznie rekomentuję.",
  "Profesjonalne wykonanie, gabinet czyściutki i bardzo miła atmosfera. Hybryda trzymała się bez zarzutu. Polecam na 5+.",
  "Bardzo polecam, śliczne paznokcie i przemiła stylistka!",
  "Polecam!  Pieknee paznokcie 💅🤩",
  "Polecam serdecznie, piękne paznokcie i świetna stylistka.",
  "Mega dokładnie zrobione paznokcie, bardzo trwałe i co się rzadko zdarza dokładnie takie jak chciałam.",
  "Bardzo uprzejma osoba, a co najważniejsze, świetnie wykonuje swoją pracę.",
  "Polecam w 100 % profesjonalizm !!! Paznokcie przepiękne i co najważniejsze super się trzymają😀 ❤️",
  "Bardzo serdecznie polecam. Miła obsługa. Czyściutki salonik. Perfekcyjne wykonanie z bardzo dużą precyzją, starannością i dbałością o każdy najmniejszy szczegół. Polecam."
];

export const Opinions = () => {
  return (
    <>
      <div className="my-8 lg:my-12">
        <p className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-extralight">OPINIE KLIENTEK</p>
      </div>
      <div className="container mx-auto px-8 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
        <Opinion description={opinionsContent[0]} name="Ewa" />
        <Opinion description={opinionsContent[1]} name="Katarzyna" />
        <Opinion description={opinionsContent[2]} name="Wiktoria" />
        <Opinion description={opinionsContent[3]} name="Emilia" />
        <Opinion description={opinionsContent[4]} name="Matylda" />
        <Opinion description={opinionsContent[5]} name="Aneta" />
        <Opinion description={opinionsContent[6]} name="Lucyna" />
        <Opinion description={opinionsContent[7]} name="Agata" />
        <Opinion description={opinionsContent[8]} name="Barbara" />
      </div>
    </>
  );
}