import Link from "next/link";

export const AboutMe = () => (
  <div className="container mx-auto px-4"> 
    <section className="px-4">
      <div className="flex flex-wrap -mx-4 center">
        <div className="md:w-1/6 px-4 mb-8 md:mb-0"></div>
        <div className="md:w-1/3 px-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://firebasestorage.googleapis.com/v0/b/wgrzywa-33d36.appspot.com/o/wiki_zdjecie_resized.jpeg?alt=media&token=4eef1772-3d7d-454c-ba9d-45f63e75deaf" alt=""/></div>
        <div className="md:w-1/3 px-4 md:mb-0 flex items-center">
          <p className="text-justify" style={{ textIndent: "1rem" }}>Nazywam się Wiktoria Grzywa, jestem kosmetologiem i zajmuję się stylizacją paznokci. W skład mojej oferty wchodzi manicure hybrydowy, żelowy na naturalnej płytce, przedłużanie paznokci na formie, uzupełnianie żelu oraz odnowa żelu po czterech tygodniach. Ponadto oferuję pedicure hybrydowy, pedicure hybrydowy SPA oraz inne usługi. Zapraszam do skorzystania z moich usług, wszystkie wymienione są w <a className="underline font-bold"><Link href="/cennik">cenniku</Link></a>.</p>
        </div>
        <div className="md:w-1/6 px-4 mb-8 md:mb-0"></div>
      </div>
    </section>
  </div>
)