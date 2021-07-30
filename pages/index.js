import Head from "next/head";
import { InfoCard } from "../components/InfoCard";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <>
     <Head>
        <title>Wiktoria Grzywa</title>
        <link rel='icon' href='/favicon.ico' />
     </Head>
     <div className="container mx-auto mb-10">
      <InfoCard
        imageUri="https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/81441129_2607828932638457_2187188000721469440_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jdyX_tXAzwMAX87tAnL&_nc_ht=scontent-frt3-2.xx&oh=64d668de72a65012647bea685379ed34&oe=6128E207"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="mt-10" />
      <InfoCard
        imageUri="https://d375139ucebi94.cloudfront.net/pl/21064/e512298e024146f489e19d72c69746c8-Salon-Kosmetyczny-Marta-Ramza-biz-photo.JPEG"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <Slider />
      {/* <div className="container flex flex-wrap justify-between items-start">
        {[1,2,3,4,5,6,7,8].map(item => (
          <img className="max-w-full lg:max-w-lg xl:max-w-sm" key={item} src="https://d375139ucebi94.cloudfront.net/pl/21064/e512298e024146f489e19d72c69746c8-Salon-Kosmetyczny-Marta-Ramza-biz-photo.JPEG" />
        ))}
      </div> */}
    </div>
   </>
  )
}
